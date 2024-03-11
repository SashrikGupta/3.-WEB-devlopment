import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Timeline from '../components/Timeline/Timeline'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card/Card';
import Sidebar from '../components/Sidebar/Sidebar'
import Navbari from '../components/Navbar/Navbar'
import UserCard from '../components/UserCard/UserCard'

function App() {
  
  

  return (
    <>
    <Navbari>
    <Sidebar/> 
    </Navbari>


    <UserCard/>

    </>
  )
}

export default App
