import './../Css/Create.css';
import React, { useEffect } from 'react'
import { SiGoogleforms } from 'react-icons/si';
import {PiCardsLight} from 'react-icons/pi';
import {BsUiRadiosGrid , BsToggle2Off} from 'react-icons/bs';
import { FiCheckCircle } from 'react-icons/fi';
import { TbInputAi , TbLoader3 } from 'react-icons/tb';
import {MdKeyboardArrowDown,MdOutlineSmartButton} from 'react-icons/md';
import { createElement, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigateTo = useNavigate();
  const [element,setElement] = useState("");
  const [model,setModel] = useState(true);
  return (
    <div>
      { 
    model ? <>
      <div className='model-background' onClick={()=>setModel(false) `${navigateTo('/')}`}></div>
      <div className='model-frame'>
          <h1>What are you Making?</h1>
          <div className='create-item'>
            <div onClick={()=>setElement("button")}>
              {
                element === "button" ? 
                <div className='selected-item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>                
                :
                <div className='item'>
                  <MdOutlineSmartButton style={{
                    fontSize : "50px",
                  }}/>
                  <label>Button</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("form")}>
              {
                element === "form" ? 
                <div className='selected-item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>                
                :
                <div className='item'>
                  <SiGoogleforms style={{
                    fontSize : "50px",
                  }}/>
                  <label>Forms</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("card")}>
              {
                element === "card" ? 
                <div className='selected-item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>                
                :
                <div className='item'>
                  <PiCardsLight style={{
                    fontSize : "50px",
                    }}/>
                  <label>Cards</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("radio button")}>
              {
                element === "radio button" ? 
                <div className='selected-item'>
                  <BsUiRadiosGrid style={{
                    fontSize : "40px",
                      }}/>
                  <label>Radio Button</label>
                </div>                
                :
                <div className='item'>
                  <BsUiRadiosGrid style={{
                  fontSize : "40px",
                    }}/>
                  <label>Radio Button</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("check box")}>
              {
                element === "check box" ? 
                <div className='selected-item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>                
                :
                <div className='item'>
                  <FiCheckCircle style={{
                  fontSize : "40px"
                }}/>
                <label>Check Box</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("input")}>
              {
                element === "input" ? 
                <div className='selected-item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>                
                :
                <div className='item'>
                  <TbInputAi style={{
                  fontSize : "40px"
                }}/>
                <label>Input</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("toggle switch")}>
              {
                element === "toggle switch" ? 
                <div className='selected-item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>                
                :
                <div className='item'>
                  <BsToggle2Off style={{
                  fontSize : "40px"
                }}/>
                <label>Toggle switche</label>
                </div>
              }
            </div>
            <div onClick={()=>setElement("loader")}>
              {
                element === "loader" ? 
                <div className='selected-item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>                
                :
                <div className='item'>
                  <TbLoader3 style={{
                  fontSize : "40px"
                }}/>
                <label>Loaders</label>
                </div>
              }
            </div>
            <button>Continue</button>
          </div>
        </div>
    </>
     : <div></div>}
    </div>
  )
}

export default Create
