import {useRef,useEffect} from 'react'
import './App.css'
import FD from './components/FD.jsx'

function App(){


  return (
    <div className="hold"
    style = {{
      width : '100vw' , 
      height:'100vh' , 
      display:'flex',
      justifyContent: 'center',
      alignItems :'center',
    }}
    >
          <FD
     vid = "video"
     style = {{
      
     }}
    ></FD>
    </div>

    )

}

export default App;