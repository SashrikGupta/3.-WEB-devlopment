import React,{useState , useContext} from 'react'
import Loader from '../Loader/Loader'
import FD from '../FD/FD'
import * as faceapi from 'face-api.js';
import { PostContext } from '../Context/StoreContext';

export default function  Face(props)
 {
  const nowcontext  = useContext(PostContext) ; 
  let labels = nowcontext.labels.map((item) => item.name);
  console.log(labels);

  const [name, setName] = useState();
  const [key, setKey] = useState(false);
  const [loaded, setLoaded] = useState(false);

  function gate(value, label) {
    if (value < 0.45 && labels.includes(label)) {
      setKey(true);
      setName(label);
    } else {
      setKey(false);
    }
  }
  return (
   <div id="wrap1">
   {!loaded && <Loader />}
     <div></div>
     <div id="vid">
     <FD
        on={loaded}
        onset={setLoaded}
        div="vidcont"
        func={gate}
        labels={labels}
     ></FD>
     </div>
     <div
       style={{
         width: '20vw',
         height: '20vh',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
       }}
     >
       {key && <button id = "buttone">enter</button>}
     </div>
   </div> 
  )
}
