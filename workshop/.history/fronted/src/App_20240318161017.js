// import logo from './logo.svg';
import './App.css';
import House from './components/House';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://google.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header> */}
      <h1> Hello World</h1>
      <House/>
      <Home/>
    </div>
  );
}

export default App;
