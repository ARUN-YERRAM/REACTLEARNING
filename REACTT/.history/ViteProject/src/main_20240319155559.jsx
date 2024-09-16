// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1> Custom App!</h1>
    </div>

  )
}
ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
