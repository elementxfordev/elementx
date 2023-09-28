import './../Css/Navbar.css';
import React from 'react'
const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className='navbar-right'>
        <img src='./src/Components/logo.png' alt='nahi mili' className='logo-image' />
      </div>
      <div className='navbar-elements'><button onClick={()=>props.setActive('all')} className='element-button'>Elements</button></div>
      <div className='navbar-btn'>
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