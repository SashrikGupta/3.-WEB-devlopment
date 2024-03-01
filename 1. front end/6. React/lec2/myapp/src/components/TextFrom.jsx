import React  , {useState}from 'react'


export default function TextFrom(props) {

  const[text , set_text] = useState("enter text here ") ; 

  
  


 


  return (
    <>
      <div className="mb-3">
         <h4>{props.heading} </h4>
      <textarea className="form-control" onChange={props.handler} placeholder = {text} id="exampleFormControlTextarea1" rows="16"></textarea>
      </div>
      <button className='btn btn-primary' > {props.texter}convert </button>

    </>
  )
}
