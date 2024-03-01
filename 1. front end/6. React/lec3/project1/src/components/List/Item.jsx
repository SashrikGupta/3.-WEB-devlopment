import React from 'react'
import Holder from '../Holder/Holder';
import styles from './Item.module.css'

export default function Item(props) {



  return (
    <>
      <Holder
       styles = {
        { border :"2px black solid" , 
         width:"60vw" ,  
         display : 'flex' ,
         borderRadius:"2rem" , 
         margin : 'auto',
         height : '2em' , 
         fontSize : '24px' ,
         marginBottom : '8px' ,   
         background : 'linear-gradient(45deg ,hotpink,purple)',
         color : 'white',
         fontWeight : 'bolder',
         justifyContent : 'space-around',
         alignItems : 'center' 
         }
       }
      >
      <div style = {{width:'25vw'}}>
         {props.id+1}.  {props.items}
      </div>
      <div 
      style = {{width:'21vw' , gap:'10px' , display:'flex' ,justifyContent:'space-around' }}
      >
      <button style = {
         {
            width:'10vw',
            border :"2px black solid" ,
            borderRadius:"2rem" ,
            fontSize : '16px' ,
            height : '2em' ,
            background : 'linear-gradient(45deg , white , red)',
            color : 'white',
            fontWeight : 'bolder', 
            }
         }
         onClick = {(event)=>{props.ci1(event , props.id)}}
      >
         Delete
      </button>
      <button  style = {
         {
            width:'10vw',
            border :"2px black solid" ,
            borderRadius:"2rem" ,
            fontSize : '16px' ,
            height : '2em' ,
            background : 'linear-gradient(45deg , white , green)',
            color : 'white',
            fontWeight : 'bolder'
            }
         }
         onClick = {(event)=>{props.ci2(event , props.id)}}
      >
         Update
      </button>

      
      </div>
     </Holder> 
     { props.intake[props.id] && <input onKeyDown = {(event)=>{props.up(event , props.id)}}></input>}
    </>
  )
}
