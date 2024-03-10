import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../Card/Card';

export default function (props) {
  return (
    <>
     <div style ={{
      backgroundColor:'#333333' , 
      width : '100vw' , 
      height : '6vh' , 
     }}
     className = "flex  fles-col  items-center"
     >

       {props.children}
     </div>
 


  
    </>
  );
}
