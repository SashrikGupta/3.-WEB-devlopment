import React from 'react'
import Item from'./Item.jsx'
export default function List(props) {

   let itlist = props.item

   console.log(itlist) ; 

  return (
   <> 
      { itlist.map((item , idx)=>
      {
         return(
            <Item
            key = {idx}
            id = {idx}
            ci1 = {props.click1}
            ci2 = {props.click2}
            items = {item}
            intake = {props.intake}
            up = {props.up}
         ></Item>
         )
      }
        )}

   </>


      

    
  )
}
