import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import {jsx as _jsx} from "react/jsx-runtime.js";


// function MyApp(){
//   return (
//     <div>
//       <h1> Custom App!</h1>
//     </div>
//   )
// }

// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },          
//   children : 'Click me to visit google'
// }


// const anotherElement = (
  // <a href="http://google.com" target='_blank'>Google</a>
// 
// )
const user = "Yerram";
const reactElement = React.createElement('a',{href:'http://google.com',target:'_blank'},
'click me to visit google',user
  )
// const user = "Yerram";

ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <React.StrictMode>
    // ReactElement
    // anotherElement
    reactElement
  // </React.StrictMode>,
    // <App/>
)



