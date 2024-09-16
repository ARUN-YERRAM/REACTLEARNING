import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;

  const [counter,setCounter] = useState(0);

  const addValue = () => {
    console.log("Value added:",{counter})
    setCounter(counter+1);
  }
  const removeValue = () => {
    if(counter > 0){
    console.log("Value decreased:",{counter})
    setCounter(counter-1);
    } else {
      console.log("Count can't be negative");
      setCounter(counter+1);
      // break;
    }
  }

  return (
    <>
      <h1> Counter Counting</h1>
      <h3>Counter : {counter}</h3>

      <button onClick={addValue}>Increment : {counter}</button>
      <br/>
      
      <button onClick={removeValue}>remove value : {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App


