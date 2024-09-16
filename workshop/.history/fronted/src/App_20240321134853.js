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


function App() {
  return (
    <>
    <Navbar/>
      <h1 className="bg-dark text-light" >Welcome to Workshop</h1>
      <h2 style={{color:"white", backgroundColor:"black"}}>Basic react app</h2>
      <House himg = "house1.jpg" hname = "Mansion1"/>
      <House himg = "house2.jpg" hname = "Mansion2"/>
    </>
    
  );