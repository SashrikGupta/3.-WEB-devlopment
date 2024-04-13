import './App.css'
import Card from '../components_basic/Card/Card';
import Navbari from '../components_basic/Navbar/Navbar'
import UserCard from '../components_basic/UserCard/UserCard'
import Querylist from '../components_basic/Querylist/Querylist'
import Settings from '../components_basic/Settings/Settings'
import BG from '../contexts/background'
import QueryPost from '../comoponent_code/QuerPost/QueryPost';
import { Routes  , Route} from 'react-router-dom';
import QDL from '../components_basic/Querylist/QDL'; 
import Config from '../contexts/Conf';
function App() {
  
  

  return (
    <>
      
      <BG>
        <Config>
         <Navbari/>
          <Routes>
           <Route path="/settings" element = {<Settings/>} /> 
           <Route path="/solve-query" element = {<Querylist/>} /> 
           <Route path="/post-query" element = {<QueryPost/>} /> 
           <Route path="/:id" element = {<UserCard/>}/>
           <Route path="/querydetail/:id" element = {<QDL></QDL>} />
          </Routes>
        </Config>
      </BG>
      


    </>
  )
}

export default App
