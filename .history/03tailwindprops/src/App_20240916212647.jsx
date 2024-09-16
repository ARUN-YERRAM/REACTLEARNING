// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  // let myobj = {
  //   name:"ARUN",
  //   channel:"Delba"
  // }
  // let Arr = [1,2,3];
    // console.log("props")
  return (
     <>
     <h1 className='bg-blue-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card channel="Delba" btnText="click me"/>
    <Card channel="Arun" btnText="click me"/>
    </>   
  )
}
export default App
