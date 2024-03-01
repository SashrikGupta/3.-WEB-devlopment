import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter"
import { useContext } from 'react';
import {CounterContext} from "./context/contex"

function App() {

  const counterstate = useContext(CounterContext) ; 
  console.log(counterstate) ; 
  return (
    <div className="App">
      <h1> context is {counterstate.count} </h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
