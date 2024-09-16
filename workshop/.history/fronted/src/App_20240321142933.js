// // import logo from './logo.svg';
// import './App.css';
// import House from './components/House';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://google.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React

//         </a>
//       </header> */}
//       <h1> Hello World</h1>
//       <House/>
//       <Home/>
//       <About/>
//     </div>
//   );
// }

// export default App;


// function App() {
//   return (
//     <>
//     <Navbar/>
//       <h1 className="bg-dark text-light" >Welcome to Workshop</h1>
//       <h2 style={{color:"white", backgroundColor:"black"}}>Basic react app</h2>
//       <House himg = "house1.jpg" hname = "Mansion1"/>
//       <House himg = "house2.jpg" hname = "Mansion2"/>
//     </>
    
//   );
// }




// App.js

// function App() {
//   return (
//     <>
//      <BrowserRouter>
//       <Navbar/>
//         <Routes>
//           <Route path="/home" element={<Home />} />
//           <Route path="/houses" element={<Houses />}/>
//           <Route path="/aboutproject" element={<AboutProject/>}/>
//           <Route path="*" element={<PageNotFound />}/>
//         </Routes>
//     </BrowserRouter>
//       {/* <h1 className="bg-dark text-light" >Welcome to Workshop</h1>
//       <h2 style={{color:"white", backgroundColor:"black"}}>Basic react app</h2>
//        */}
//     </>
    
//   );
// }



// App.js

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import RegistrationForm from './components/RegistrationForm';
import { useState } from 'react';
import UserCard from './components/UserCard';
import Signup from './components/Signup';
function App() {
  const [users, setUsers] = useState([]);

  const handleRegistration = (userData) =>{
    setUsers([...users,userData])
  }
  return (
    <>
      {/* <RegistrationForm onreg = {handleRegistration}/>
      <div className='row'>
        {users.map((user,index)=>(
        <div className='col'>
          <UserCard user = {user} />
        </div>))}
      </div> */}

      <Navbar/>
      <Signup/>
    </>
  );
}

export default App;