import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Hold from './components/Hold' ; 
import { useState } from 'react';

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
    <Navbar id = "ok" title_name = "Text Utils" about_text = "about " drop_name="sashrik" bod = {bod} theme = {theme}/>
    <div className="container">
      <Hold message = "mai console me print hunga " pni = "inside a container named hold" styles = {{padding:'7px'}}>
      <TextFrom heading  = "enter your text below " texter = "45" handler = {(event)=>{handler(event)}}/>
      </Hold>
    
    </div>
    </> 
  );
}

export default App;
