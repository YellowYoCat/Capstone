
import './App.css';
import {Route, Routes } from 'react-router-dom';
import Home from './Componets/Pages/Home';
import Contact from './Componets/Pages/Contact';
import Profile from './Componets/Pages/Profile';
import Shop from './Componets/Pages/Shop';
import Social from './Componets/Pages/Social';
import Cart from './Componets/Pages/Cart';
import Navbar from './Componets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/social' element={<Social/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      </Navbar>
      
      
    </div>
  );
}

export default App;
