import React from 'react'
import styles from './Input.module.css'

export default function Input(props) {
  return (
    <>
      <input 
      placeholder='enter your task here '
      id = {`${styles["in"]}`}
      onKeyDown = {(event)=>{props.handler(event)}}
      >

      </input>
    </>
  )
}
