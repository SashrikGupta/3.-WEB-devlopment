import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Timeline from '../components/Timeline/Timeline'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card/Card';
import Sidebar from '../components/Sidebar/Sidebar'
import Navbari from '../components/Navbar/Navbar'
import UserCard from '../components/UserCard/UserCard'
import Querylist from '../components/Querylist/Querylist'
import Settings from '../components/Settings/Settings'
import BG from '../contexts/background'

function App() {
  
  

  return (
    <>
    <BG>
      <Navbari/>
        {/* --routing-- */}
        <UserCard/>
        {/* <Querylist/> */}
        {/* <Settings/>  */}
    </BG>
    </>
  )
}

export default App
