import { useState } from 'react';
import './../Css/Navbar.css';
import {MdKeyboardArrowDown,MdOutlineSmartButton} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Navbar = (props) => {
  const navigateTo = useNavigate();
  const [login,setLogin] = useState(false);
  const handleCreateRequest = ()=>{
    navigateTo('create');

  };
  return (
    <>
    <div className='navbar'>
      <div className='navbar-right'>
        <img src='./src/Components/logo.png' alt='nahi mili' className='logo-image' />
        <button className='element-button' onClick={()=>navigateTo('/elements')}>Elements&nbsp;<MdKeyboardArrowDown /></button>
      </div>
      <div className='navbar-left'>
          <button onClick={handleCreateRequest}>Create</button>
        {
          login ? <></> : <>
            <button onClick={()=>navigateTo('/login')}>Log in</button>
            <button onClick={()=>navigateTo('/register')}>Sign up</button> 
          </>
        }
      </div>
    </div>
    </>
  )
}

export default Navbar