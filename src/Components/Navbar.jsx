import './../Css/Navbar.css';
import {MdKeyboardArrowDown} from 'react-icons/md';
import React from 'react'
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const navigateTo = useNavigate();
  return (
    <div className='navbar'>
      <div className='navbar-right'>
        <img src='./src/Components/logo.png' alt='nahi mili' className='logo-image' />
        <button className='element-button' onClick={()=>navigateTo('/elements')}>Elements&nbsp;<MdKeyboardArrowDown /></button>
      </div>
      <div>
        
      </div>
        <div className='navbar-left'>
          <button class="btn">
            <span class="button-content">Sign in</span>
          </button>
          <button class="btn">
            <span class="button-content">Login</span>
          </button>
      </div>
    </div>
  )
}

export default Navbar