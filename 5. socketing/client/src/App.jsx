import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {io} from 'socket.io-client'

function App() {
  const [count, setCount] = useState(0) 
  const socket = io("http://localhost:3000")
  useEffect(
    ()=>{

      // now we will be connecting the user to the 
      // the socket 
      socket.on("connect" , () => {
          console.log('connected' , socket.id)
          // by this we can recieve what ever has been recieved 
          // by the server to client 
          // socket.on(eventname , (event_message)=>{function})
          socket.on("welcome" , (s)=>{
          console.log(s) ; 
          })

          //event handler for broadcast 
          socket.on("enter" , (message)=>{
           console.log(message) ; 
          })
     })

    } , []
  )

  return (
    <>
      <div> app </div>
    </>
  )
}

export default App
