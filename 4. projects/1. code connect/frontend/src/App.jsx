import './App.css'
import Card from '../components_basic/Card/Card';
import Navbari from '../components_basic/Navbar/Navbar'
import UserCard from '../components_basic/UserCard/UserCard'
import Querylist from '../components_basic/Querylist/Querylist'
import Settings from '../components_basic/Settings/Settings'
import BG from '../contexts/background'
import QueryPost from '../comoponent_code/QuerPost/QueryPost';
import { Routes  , Route} from 'react-router-dom';


function App() {
  
  

  return (
    <>

      <BG>
        <Navbari/>
        <Routes>
          <Route path="/settings" element = {<Settings/>} /> 
          <Route path="/solve-query" element = {<Querylist/>} /> 
          <Route path="/post-query" element = {<QueryPost/>} /> 
          <Route path = "/" element = {<UserCard/>}/>
          </Routes>
      </BG>

    </>
  )
}

export default App
