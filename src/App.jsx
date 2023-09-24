import './Css/main.css';
import React from 'react';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Create from './Components/Create';
import Profile from './Components/Profile';
import ProductCard from './Components/ProductCard';


const App = () => {
  const [html,setHtml] = useState("");
  const [css,setCss] = useState("");
  const [active,setActive] = useState("all");
  return (
    // <div>
    //   <BrowserRouter >
    //     <Navbar />
    //       <Routes >
    //         <Route path='/' element={<Hero />} />
    //         <Route path='/create' element={<Create />} />
    //         <Route path='/profile' element={<Profile />} />
    //         <Route path='/login' element={<Login />} />
    //         <Route path='/register' element={<Register />} />
    //         <Route path='/all' element={<Sidebar active='all' />}/>
    //         <Route path='/buttons' element={<Sidebar active='buttons'/>} />
    //         <Route path='/forms' element={<Sidebar active='forms' />} />
    //         <Route path='/cards' element={<Sidebar active='cards'/>} />
    //         <Route path='/checkBoxes' element={<Sidebar active='checkBoxes'/>} />
    //         <Route path='/inputs' element={<Sidebar active='inputs' />} />
    //         <Route path='/loaders' element={<Sidebar active='loaders'/>} />
    //         <Route path='/radioButtons' element={<Sidebar active='radioButtons' />} />
    //         <Route path='/toggleSwitches' element={<Sidebar active='toggleSwitches' />} />
    //         <Route path='/others' element={<Sidebar active='others'/>} />
    //       </Routes>
    //   </BrowserRouter>
    // </div>
    <>
    <ProductCard 
    html="<button>click me</button>" 
    css="
    button{
      color : white;
      background-color : black; 
      border : 2px solid black;
    } 
    button:hover{
      color : black;
      border : 2px solid white;
      background-color : white;
    }
    "/>
    </>
  )
}

export default App