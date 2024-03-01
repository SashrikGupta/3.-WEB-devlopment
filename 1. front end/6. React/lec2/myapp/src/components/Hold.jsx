import React from 'react'
import styles from './Hold.module.css'

export default function (props) 
{
   console.log(props.message)
  return (
   <div>
      <h1>{props.pni}</h1>
      <div className= {` ${styles["ok"]} `} style = {props.styles} >
      {props.children}
      </div>
   </div>

  )
}
