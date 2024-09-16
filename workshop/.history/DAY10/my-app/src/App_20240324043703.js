// import logo from './logo.svg';
// import Header from './Header';
import Home from './Home.js';
import './App.css';
import Login from './Login.js';

function App() {
  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="*" element={<PageNotFound/>} /> 
          <Route path='/house/:id' element={<House/>}/>
          <Route path="listahouse" element={<ListAHouse/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/searchhouse/:id' element={<SearchHouse/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/enquiries' element={<Enquiries/>}/>
          <Route path='/search' element={<SearchFilter/>}/> 
          <Route path='/searchresults/:locality/:bhk' element={<SearchResults/>}/>     
             
          
      </Routes>
      </>
  );
}

export default App;
