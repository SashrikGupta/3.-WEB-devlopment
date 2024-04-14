import React , {useState , useContext, useEffect} from 'react'
import Card from '../../components_basic/Card/Card'
import TextEditor from '../../comoponent_code/QuerPost/TextEditor'
import { Link } from 'react-router-dom';
import { curr_context } from '../../contexts/background';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/python/python'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import '../../comoponent_code/QuerPost/TextEditor'
import codemirror from 'codemirror';
import {useParams} from 'react-router-dom'
import { curr_config } from '../../contexts/Conf'; 





export default function QDL() {

  const now_config = useContext(curr_config)
  const back_key = now_config.back_key
  const {id} = useParams() ; 
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
  const [solved , set_solved] = useState(false) ; 
  const [program , set_program] = useState() ; 
  const [problemStatment , set_porblemstatment] = useState("") ; 
  const [query , set_query] = useState(false) ;  


  
  



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
  fetch(`${back_key}/query/getone`, {
    method: 'POST',
      headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache', 
    },
    body: JSON.stringify({ id: id}), 
  })
  .then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error('Failed to fetch data');
    }
  })
  .then(data => {
    set_query(data.data.users) ; 

  })
  .catch(error => {console.error("bhai error  : " + error)});
},[])

useEffect(()=>{
console.log(query) ; 
if(query){
  if ("code" in query) set_program(query.code);
  if ("problemStatement" in query) set_porblemstatment(query.problemStatement);
  if ("status" in query){
    if(query.status == "solved") set_solved(true)
  }
}

console.log(program)
} , [query , program])



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

      <div className="relative" onMouseLeave={closeDropdown}>
                  <div className='flex flex-wrap justify-center items-center '>
                  <button  className="text-gray-300 h-[4.5vh] my-1 flex items-center hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                      language
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 12a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1zM10 6a1 1 0 011 1v4a1 1 0 11-2 0V7a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <div id = "lang" onClick={toggleDropdown} className={` w-[15vw] h-[1.5em] flex justify-center items-center rounded-xl  backdrop-blur-3xl shadow-xl border-2 border-[aqua] `}
                     style = {{
                      backgroundColor : `${bg}`
                     }}> enter language
                    </div>
                    </div>
                    {dropdownOpen && (
                      <div className="absolute right-0 mt-0 w-48 bg-gray-800 rounded-b-lg shadow-lg" style={{ zIndex: '10' }}>
                        <a onClick = {language_python} className="block px-4 py-2 text-[2vh] text-gray-200 hover:bg-gray-100 hover:text-gray-800">Python</a>
                        <a onClick = {language_cpp} className="block px-4 py-2 text-[2vh] text-gray-200 hover:bg-gray-100 hover:text-gray-800"> C++ </a>
                        <a onClick = {language_java} className="block px-4 py-2 text-[2vh] text-gray-200 hover:bg-gray-100 hover:text-gray-800"> JAVA </a>
                        <a onClick = {language_javascript} className="block px-4 py-2 text-[2vh] text-gray-200 hover:bg-gray-100 hover:text-gray-800"> javascript </a>
                </div>
               )}

<hr  className=' mt-1 mb-2'/>
          </div>
          <Card w='28vw' h='61vh' tailwind = 'shadow-lg' >
          <div
          className='p-2 w-[28vw] h-[59vh] mt-[2vh] backdrop-blur-6xl rounded-lg placeholder:text-white hover:border-2 hover:border-[aqua]'
          name="" 
          id="" 
          cols="30" 
          rows="10"
          style={{ background: ohm , backdropFilter: 'blur(10px)' }}
        >{problemStatment}
        </div>

          </Card>
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
            prog = {program}
         >
        
         </TextEditor>
         </Card>
         <Card w = '65vw' h = '33vh' mx = '3' mt='[2vh]' >
          <div className='h-[33vh] flex flex-col justify-around'>
          <div className='h-[5vh] flex justify-end'>
           <button onClick = {()=>{handel_run()}} className='btn btn-success text-[2vh] w-[6vw] py-0' > run </button>
           {!solved ? <button  class="btn btn-danger text-[2vh] w-[6vw] py-0" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-theme="dark"> solve </button> : <></> }
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