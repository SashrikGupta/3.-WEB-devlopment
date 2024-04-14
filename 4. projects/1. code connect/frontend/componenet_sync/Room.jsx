import React , {useState , useContext, useEffect , useRef} from 'react'
import Card from '../components_basic/Card/Card'
import TextEditor from '../comoponent_code/QuerPost/TextEditor'
import { Link } from 'react-router-dom';
import { curr_context } from '../contexts/background';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import '../comoponent_code/QuerPost/TextEditor.module.css'
import codemirror from 'codemirror';
import {useParams ,  useNavigate , Navigate} from 'react-router-dom'
import { initSocket } from '../socket';
import ACTIONS from '../actions';
import { useLocation } from 'react-router-dom';
import SyncEditor from './SyncEditor';
import { IoIosSend } from "react-icons/io";
import Message from './Message';



export default function Room() {

  const [chat_list , set_chat_list] = useState([])
  const [my_chat , set_my_chat] = useState() 
  const [message_enter , set_message_enter] = useState(0) ; 
  const [client , setclient] = useState([{socketId : 1  , username : "sashrik gupta" } , {socketId : 2 , username : "jhon doe"}])
  const codeRef = useRef(null) ; 
  const rng = useNavigate() ; 
  const {id}= useParams() ; 
  const cont = useContext(curr_context) ; 
  const bg  = cont.theme ; 
  const [mode , setmode] = useState('text/x-c++src') ; 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [node1 , setnode1] = useState('bg-gray-800 text-white') ; 
  const [node2 , setnode2] = useState('text-white') ; 
  const [run_btn , setrun_btn]= useState(false) ; 
  const [ed  , set_ed] = useState() ; 
  const [code , set_code] = useState() ; 
  const [ohm , set_ohm] = useState() ; 
  const [allchat , set_all_chat] = useState([]) ; 
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  const language_python = ()=>{
      setmode('python') 
      document.getElementById('lang').innerText = "Python" ; 
  }
  const language_cpp = ()=>{
    setmode('text/x-c++src') 
    document.getElementById('lang').innerText = "C++" ; 
}
const language_java = ()=>{
  setmode('text/x-java') 
  document.getElementById('lang').innerText = "JAVA" ; 
}
const language_javascript = ()=>{
  setmode({name : 'javascript', mode :'json'}) 
  document.getElementById('lang').innerText = "javascript" ; 
}

useEffect(()=>{
  if(bg=='') set_ohm('transparent')
  else  set_ohm("#333333") 
} , [bg])







const socketRef = useRef(null) ; 
const location = useLocation() ; 

if(!location.state){
  return <Navigate to = "/code"></Navigate>
}

useEffect(()=>{
  const init = async ()=>{
    socketRef.current = await initSocket () ; 
    socketRef.current.on('connect_error' , (err)=>handelErrors(err)) ; 
    socketRef.current.on('connect_failed' , (err)=> handelErrors(err)) ; 

    function handelErrors(e){
      console.log('socket_error' , e) ; 
      alert("connection failed try again later") ; 
      rng('/') ; 
    }

    socketRef.current.emit(ACTIONS.JOIN , {
      roomId : id , 
      username : location.state?.username 
    }) ; 

     //listening for joined evet 
     socketRef.current.on(ACTIONS.JOINED , ({clients , username , socketid})=>{
      if(username !== location.state?.username){
        alert(`${username} has joined`) ; 
        console.log(`${username} joined`) ; 
      }
      setclient(clients)
      socketRef.current.emit(ACTIONS.SYNC_CHANGE , {
        code : codeRef.current , 
        socketid ,
      })
     })


     //listening for disconnected
     socketRef.current.on(ACTIONS.DISCONNECTED , ({socketId , username})=>{
       alert(`${username} left the room `) ; 
       setclient((prev)=>{
        return prev.filter(client => client.socketId !== socketId)
       })
     })
  } ;  init() ; 
  // cleaning function 
  return ()=>{
    socketRef.current.disconnect() ; 
    socketRef.current.off(ACTIONS.JOINED)
    socketRef.current.off(ACTIONS.DISCONNECTED)
  }
} , [])



useEffect(()=>{
       //listening to chat event 
       
       if (socketRef.current) { // Check if socketRef.current exists
        socketRef.current.emit('chat', {
          roomId: id,
          chat_text : my_chat,
          username : location.state?.username
        }) 
         
        
      } 
      }, [socketRef.current, message_enter ])


  
function m_handler(){

  const old_chat = allchat ; 
  old_chat.push({
    username : location.state?.username , 
    chat : my_chat
  })
  set_all_chat(old_chat) ; 
  set_message_enter(1-message_enter) ; 
  document.getElementById('kp').value = '' ; 
}
  




useEffect(()=>{
  //listening to chat event 
  if(socketRef.current){
    socketRef.current.on('chat' , ({chat_text , username})=>{
      set_chat_list({
        username : username , 
        chat : chat_text
      }) ; 
      console.log(chat_list)

      const old_chat = allchat ; 
      old_chat.push({
        username  , 
        chat : chat_text
      })
      set_all_chat(old_chat) ; 
     })
  }
} , [socketRef.current , allchat])

useEffect(()=>{
console.log(chat_list)
} , [chat_list , allchat])






useEffect(() => {
  const fetchData = async () => {
    if (ed) {
      const code = ed.getValue();
      console.log(document.getElementById("in2").value )
      set_code(code);
      console.log(code) ; 

      try {
        const response = await fetch("http://localhost:8000/py_router/", {
          method: 'POST',
          body: JSON.stringify({
            code: code , 
            input : `${document.getElementById("in2").value}` 
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
        const out = data.output ; 
        document.getElementById('out2').value = out ; 

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  fetchData();
}, [ed, run_btn]);

const handel_run = ()=>{
  setrun_btn(!run_btn) ; 
}



  return (
    <>
    <div className='flex '>
      <Card w = '35vw' h = '90vh' mx = '3'  my = '2'>
      <div className='w-[35vw] h-[90vh] flex flex-col items-center justify-start '>

      
                  <div className='flex flex-col  flex-wrap justify-center items-center h-[10vh]'>
                   <div>Room_Id : <span className = "text-[2vh] h-[100%] rounded-lg p-1 text-center bg-white/10">{id}</span></div>  
                   <div>connected : <span className = "text-[2vh] h-[100%] rounded-lg p-1 text-center bg-white/10" >
                     {client.map(el=><span>{el.username} , </span> )}
                     </span></div>
                  </div>
                  <div className='h-[69vh] w-[25vw] bg-white/10 rounded-lg' style={{ overflowY: 'scroll', scrollbarWidth: 'none' }}>
                  {allchat && allchat.map((el , index)=><Message key ={index} ked = {location.state?.username} username = {el.username} chat = {el.chat} />)}
                 </div>

               <div className='flex justify-between mt-4 w-[25vw]'>
                <input id = "kp" className='rounded-lg h-[5vh] bg-white/10 text-[2vh] text-center w-[20vw]' onChange={(e)=>{set_my_chat(e.target.value)}}/>
                <button className='btn btn-primary flex justify-center items-center w-[4vw]' onClick={m_handler}><IoIosSend/> </button>
               </div>
          
      </div>

      </Card>

      <div className='flex flex-col'>
         <Card w = '65vw' h = '55vh' mx = '3'  mt = '2'>






          <SyncEditor 
            id = "RTE"
            w='63vw' 
            h='52vh'
            tailwind = 'rounded-lg opacity-100'
            mode = {mode}
            run_btn = {run_btn}
            set = {set_ed}
            socketRef = {socketRef}
            roomId = {id}
            onCodeChange = {(code)=>{codeRef.current = code}}
         >
         </SyncEditor>




         </Card>
         <Card w = '65vw' h = '33vh' mx = '3' mt='[2vh]' >
          <div className='h-[33vh] flex flex-col justify-around items-center'>
          <div className='h-[5vh] w-[63vw] flex justify-between'>
            <input className='rounded-lg bg-white/10 text-[2vh] text-center w-[31vw]' placeholder = "enter a query id here "></input>
            <span>
            <button onClick = {()=>{handel_run()}} className='btn btn-success text-[2vh] h-[5vh] w-[6vw] py-0' > run </button>
           <button  class="btn bg-[aqua] text-black text-[2vh] h-[5vh] w-[6vw] py-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-theme="dark">solved</button>
            </span>
          </div>
          <div className='w-[65vw] flex justify-around items-center'>

           <textarea id = "in2" placeholder = " input "  className=' w-[31vw] h-[25vh] rounded-lg bg-gray-800'></textarea>      
           <textarea id = "out2" placeholder = " output  " className= ' w-[31vw] h-[25vh] rounded-lg bg-gray-800'></textarea>         
          </div>

          </div>

          </Card>
      </div> 
    </div>

   

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className={`modal-dialog`}>
    <div className={`modal-content  backdrop-blur bg-gray-800 text-[2vh]`}>
      <div className="modal-header">
        <p className="modal-title fs-5" id="exampleModalLabel"> sending the query ... </p>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-[2vh]">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label"> POINTS  </label>
            <input type="text" className="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label"> Description </label>
            <textarea className="form-control text-[2vh] h-[30vh]" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button className="btn btn-danger"> post </button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
