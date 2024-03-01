import React, { useContext } from 'react';
import { PostContext } from '../store/PostContext';
import { AiOutlineLike } from "react-icons/ai"; 
export default function Post({it , idx}) {

  const nowcontext = useContext(PostContext) ; 


     console.log(it) ; 
  return (
    <div className="card" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {it.reactions}
    <span className="visually-hidden">unread messages</span>
  </span>

      <div className="card-body">
        <h5 className="card-title">{it.title}</h5>
        <div className="cont">
         {
          it.tags.map((item, tagIdx) => (
            <p key={tagIdx} className="badge text-bg-info"  style={{ height: '2em'  , color :'white'}}>#{item}</p>
            ))
         }
        </div>
        <p className="card-text">{it.body}</p>

        <div className="container"
         style = {{
          display : 'flex',
          gap : '20px'
         }}
        >
        <a href="#" 
        className="btn btn-danger" 
        onClick={()=>{nowcontext.del(it.key , it.title , it.text)}}
        >Delete</a>
        <a href="#" 
        className="btn btn-success" 
        onClick={()=>{nowcontext.up(idx)}}
        ><AiOutlineLike /></a>
        <a href="#" 
        className="btn btn-primary" 
        >{it.userId}</a>

        </div>
      </div>
    </div>
  );
}
