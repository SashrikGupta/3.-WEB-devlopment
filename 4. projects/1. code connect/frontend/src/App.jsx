import './App.css'
import Card from '../components/Card/Card';
import Navbari from '../components/Navbar/Navbar'
import UserCard from '../components/UserCard/UserCard'
import Querylist from '../components/Querylist/Querylist'
import Settings from '../components/Settings/Settings'
import BG from '../contexts/background'
import { Routes  , Route} from 'react-router-dom';


function App() {
  
  

  return (
    <>

      <BG>
        <Navbari/>
        <Routes>
          <Route path="/settings" element = {<Settings/>} /> 
          <Route path="/query" element = {<Querylist/>} /> 
          <Route path = "/" element = {<UserCard/>}/>
          </Routes>
      </BG>

    </>
  )
}

export default App
