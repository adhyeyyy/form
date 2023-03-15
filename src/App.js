import './App.css';
import Login from './Components/Login';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Login/>}></Route>
      <Route path='/signup'element={<Signup/>}></Route>
      <Route path='/contact'element={<Contact/>}></Route>
     </Routes>
     </BrowserRouter> 
   
    </div>
  );
}

export default App;
