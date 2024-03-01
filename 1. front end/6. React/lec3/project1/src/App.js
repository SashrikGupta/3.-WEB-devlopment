import logo from './logo.svg';
import './App.css';
import Holder from './components/Holder/Holder';
import Input from './components/Input/Input' ; 
import List from './components/List/List.jsx'
import { Todoitems } from './store/itemstore.jsx';
import { useState } from 'react';

function App() {

  const [task , setTask] = useState([]) ; 
  const [intake , setIntake] = useState([]) ; 
  const handler = (event)=>{
    if(event.key == "Enter")
    {
       let newTask = [...task , event.target.value] ; 
       let newIntake = [...intake , false] ; 
       setTask(newTask) ; 
       console.log(newTask) ;
       event.target.value = "" ; 
    } 
  } ; 
  function handel1(event,idx)
  {
    console.log("btn del clicked" + idx );
    let newarr = [...task]
    let newarr2 = [...intake]
    newarr.splice(idx , 1) ; 
    intake.splice(idx , 1) ; 
    setTask(newarr) ; 
    setIntake(newarr2); 
  }
  function handel2(event,idx)
  {
    console.log("btn up clicked" + idx);
    let newarr2 = [...intake] ; 
    newarr2[idx] = true ; 
    setIntake(newarr2) ; 
  }
  function handelupdate(event , idx)
  {
    if(event.key == "Enter")
    {
       let newTask = [...task] ; 
       newTask[idx] = event.target.value ; 
       let newarr2 = [...intake] ; 
       newTask[idx] = event.target.value ; 
       newarr2[idx] = false ;
       setIntake(newarr2) ; 
       setTask(newTask) ; 
       event.target.value = "" ; 
    } 
  }



  return (
    <div className="App">
    
    <Todoitems.Provider>
    <Holder 
      styles = {
        { border :"2px black solid" , 
          width:"80vw" ,  
          display : 'flex' ,
          borderRadius:"2rem" , 
          margin : 'auto',
          flexDirection:'column' ,
          marginTop:'50px'
          }
        }
      >
      <Input handler = {handler}></Input>
      <List 
        item = {task} 
        click1 = {(event , idx)=>{handel1(event , idx)}}
        click2 = {(event , idx)=>{handel2(event , idx)}}
        intake = {intake}
        up ={(event , idx)=>{handelupdate(event , idx)}}
      ></List>
      

    </Holder>
    </Todoitems.Provider>


    
    </div>
  );
}

export default App;
