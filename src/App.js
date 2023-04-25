import './App.css';
import {BrowserRouter, Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/auth/register' element={<Register/>}></Route>
      <Route path='/auth/login' element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
