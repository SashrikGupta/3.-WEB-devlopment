import React, { useContext } from 'react';
import { CounterContext } from '../context/contex';

export default function Counter() {

  const counterState = useContext(CounterContext);
  // activating the counter context using countercontext from 
  // from use context 

  return (
    <div>
      {/*using context's functions like inc and dec ( key provided )*/}
      <button onClick={()=>{counterState.inc()}}>Increment</button>
      <button onClick={()=>{counterState.dec()}}>Decrement</button>
    </div>
  );
}
