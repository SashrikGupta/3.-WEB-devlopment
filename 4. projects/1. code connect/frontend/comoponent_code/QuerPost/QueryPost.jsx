import React , {useState , useContext} from 'react'
import Card from '../../components_basic/Card/Card'
import TextEditor from './TextEditor'
import { Link } from 'react-router-dom';
import { curr_context } from '../../contexts/background';






export default function QueryPost() {

  const cont = useContext(curr_context) ; 
  const bg  = cont.theme ; 
  console.log(bg) ; 
  console.log("ye wala hai bhai") ; 
  const [mode , setmode] = useState('text/x-c++src') ; 
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [node1 , setnode1] = useState('bg-gray-800 text-white') ; 
  const [node2 , setnode2] = useState('text-white') ; 
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

  return (
    <>
    <div className='flex '>
      <Card w = '35vw' h = '90vh' mx = '3'  my = '2'>
      <div className='w-[35vw] h-[90vh] flex justify-center '>

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
          </div>
      </div>





                  

                








      </Card>
      <div className='flex flex-col'>
         <Card w = '65vw' h = '55vh' mx = '3'  mt = '2'>
          <TextEditor 
            w='63vw' 
            h='52vh'
            tailwind = 'rounded-lg opacity-100'
            mode = {mode}
         />
         </Card>
         <Card w = '65vw' h = '33vh' mx = '3' mt='[2vh]' >
          <div className='h-[33vh] flex flex-col justify-around'>
          <div className='h-[5vh] flex justify-end'>
           <button className='btn btn-success text-[2vh] w-[6vw] py-0' > run </button>
           <button className='btn btn-danger text-[2vh] w-[6vw] py-0 mx-2'> post </button>
          </div>
          <div className='w-[65vw] flex justify-around items-center'>

           <textarea placeholder = " input " id = "ok" className=' w-[31vw] h-[25vh] rounded-lg bg-gray-800'></textarea>      
           <textarea placeholder = " output  " id = "ok" className=' w-[31vw] h-[25vh] rounded-lg bg-gray-800'></textarea>         
          </div>

          </div>

          </Card>
      </div> 
    </div>

    </>
  )
}
