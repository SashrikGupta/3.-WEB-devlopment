import { createContext, useContext, useState } from "react"
import React from 'react'

export const curr_context = createContext() ; 

export default function BG(props) {

  const [ theme , set_theme] = useState('#333333') 

  function toggle(){
   if(theme == '#333333') set_theme('')
   else set_theme('#333333')
  }

  return (
<>
  <curr_context.Provider value ={{theme , toggle}}>
   {props.children}
  </curr_context.Provider>
</>
  )
}
