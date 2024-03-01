import React from 'react'
import { createContext, useReducer } from "react";

export const PostContext = createContext();

const reduc_func = (state, action) => {
   let newstate;
   if (action.type === "ADD") {
     newstate = [...state, { name : action.payload.name , email: action.payload.email , filename:action.payload.filename , file:action.payload.file }];
   }else {
     newstate = state;
   }
   return newstate;
 };


export default function SCW(props) {


   const  intial = []
   const [labels, dispatch] = useReducer(reduc_func,intial);

   

   
   const addpost = (name , email , file , filename) => {
      const addaction = {
        type: "ADD",
        payload: {
         name , 
         email,
         filename,
         file
        }
      };
      dispatch(addaction);
    };

    return (
      <>
        <PostContext.Provider
          value={{
            labels : labels,
            add : addpost 
          }}
        >
          {props.children}
        </PostContext.Provider>
      </>
    ); 

}
