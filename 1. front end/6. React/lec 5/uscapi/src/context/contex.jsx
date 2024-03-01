import { createContext  , useReducer} from "react" 
export const CounterContext = createContext(null) ; 


//pure function bahar ki chigo se koi relation nahi hai 
const reducer_func = ()=>{
   return [] ; 
}


export const CounterProvider = (props) =>
{
   const [count , dispatch ] = useReducer(reducer_func , []) ; 

   const action ={
      type: "NEW_ITEM" ,
      payload:{
         num
      }
   }

   return <
      CounterContext.Provider
      value ={{count : count , inc :increment , dec : decrement}}
   >{props.children }
   </CounterContext.Provider>
}
