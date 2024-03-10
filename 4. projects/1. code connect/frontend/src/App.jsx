import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Timeline from '../components/Timeline/Timeline'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card/Card';
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar'
import UserCard from '../components/UserCard/UserCard'

function App() {
  
  

  return (
    <>
    <Navbar>
    <Sidebar/>
    </Navbar>
    <UserCard></UserCard>
   
  
    {/* <Card
    w = '720px'
    h = '150px'
    m = '0' 
    >
    <Timeline range={dateRange} data={data} colorFunc={({ alpha }) => `rgba(0 , 225 , 225 , ${alpha})`} />
    </Card> */}
    </>
  )
}

export default App
