import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import { useState } from "react";
import PCP from '../store/PostContext'
import { Outlet } from "react-router-dom";
function App() {
  const [Tab, setTab] = useState("home");

  return (
    <>
      <div className="app-container">
        <Sidebar tb={Tab} stb={setTab}></Sidebar>
        <div className="content">
          <PCP>
           <Header></Header>
            <div className="in">
             <Outlet/>
            </div>
            <footer>
             <Footer></Footer>
            </footer>  
          </PCP>
        </div>
      </div>
    </>
  );
}

export default App;
