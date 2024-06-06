import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Hold from './components/Hold' ; 
import { useState } from 'react';
import Mtb from './components/Mtb';
function App() {

  const handler = (event)=>
  {
    console.log(`the value in the text box is : ${event.target.value}`)
  }
  const [theme , setTheme ] = useState("white") ; 
  function bod()
  {
    setTheme((prevtheme)=>
    {
      if (prevtheme==="black") 
      {
        document.body.style.background = "white" ; 
        document.body.style.color = "black" ; 
        return "white" ; 
      }
      else {
        document.body.style.color = "white" ; 
        document.body.style.background = "black" ; 
         return "black" ; 
        }
    }) ; 
  }
  
  return (
    <>
     <Mtb/>
    </> 
  );
}

export default App;
