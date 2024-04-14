import React , {useState , useContext, useEffect} from 'react'
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
import {useParams} from 'react-router-dom'






export default function Room() {

  const [client , setclient] = useState([{socketId : 1  , username : "sashrik gupta" } , {socketId : 2 , username : "jhon doe"}])


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
               <div className=' h-[79vh] w-[25vw] bg-white/10 rounded-lg'>

               </div>
          
      </div>

      </Card>

      <div className='flex flex-col'>
         <Card w = '65vw' h = '55vh' mx = '3'  mt = '2'>
          <TextEditor 
            id = "RTE"
            w='63vw' 
            h='52vh'
            tailwind = 'rounded-lg opacity-100'
            mode = {mode}
            run_btn = {run_btn}
            set = {set_ed}
         >
         </TextEditor>
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
