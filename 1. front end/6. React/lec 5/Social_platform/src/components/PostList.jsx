import React, { useReducer  , useContext , useEffect} from 'react'
import Post from "./Post"
import { PostContext } from '../store/PostContext'
import Welcome from './Welcome';

export default function PostList() {

  //using the context 
  const nowcontext  = useContext(PostContext) ; 
  console.log(nowcontext)
  useEffect(()=>{
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then((data)=>{nowcontext.in(data)});
  } , [])
  return (
   <>
    {
      nowcontext.list.length === 0 && <Welcome /> 
    }
    <div className="flow" style = {{overflow:'auto', height:'100%'}}>
    {
      nowcontext.list.map((item , idx)=>(<Post key = {idx} it = {item} idx = {idx}></Post>))
    }
    </div>

   </>
  )
}
