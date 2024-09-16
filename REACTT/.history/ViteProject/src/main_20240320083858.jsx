// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'


function MyApp(){
  return (
    <div>
      <h1> Custom App!</h1>
    </div>
  )
}

const ReactElement = {
  type:'a',
  props:{
      href:'https://google.com',
      target:'_blank'
  },          
  children : 'Click me to visit google'
}


ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <React.StrictMode>
    <ReactElement/>
  // </React.StrictMode>,
)
