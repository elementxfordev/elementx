import './Css/main.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Create from './Components/Create';
import Profile from './Components/Profile';
import View from './Components/View';
const App = () => {
  const [html,setHtml] = useState("");
  const [css,setCss] = useState("");
  return (
    <div>
      <BrowserRouter >
        <Navbar /> 
          <Routes >
            <Route path='/' element={<Hero />} />
            <Route path='/create' element={<Create />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/elements' element={<View />} />
          </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
    </div>
  )
}

export default App