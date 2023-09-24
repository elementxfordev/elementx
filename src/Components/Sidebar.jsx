import './../Css/Sidebar.css';
import React from 'react'
import { AiFillHome,AiOutlineCreditCard,AiFillCheckCircle } from 'react-icons/ai';
import { CgPlayButtonO,CgMoreVertical } from 'react-icons/cg';
import { VscOutput } from 'react-icons/vsc';
import { LuTextCursorInput } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb'
import { BsUiRadiosGrid,BsToggles } from 'react-icons/bs'
const SideBar = (props) => {

  let activeMode = {
    color : "rgb(77,175,200)",
    textShadow  : "0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3),0 0 10px rgba(77,175,200,0.3)",
    display : "flex",
    justifyContent : "start",
    alignItem : "start",
    backgroundColor : "#333333",
    padding : "9px",
    width : '170px',
    borderRadius : "8px",
    gap : '22px',

  }
  let inActiveMode = {
    color : "white",
    display : "flex",
    justifyContent : "start",
    alignItem : "start",
    width : "170px",
    padding : "9px",
    gap : '22px',
  }
  console.log(props.active);
  let handleButtonRequest = () => {
    props.setActive("button"); 
  }
  let handleCardRequest = () => {
    props.setActive("card");
    
  }
  let handleCheckBoxRequest = () => {
    props.setActive("checkBox");
  }
  let handleFormRequest = () => {
    props.setActive("form");
  }
  let handleOtherRequest = () => {
    props.setActive("other");
  }
  let handleAllRequest = () => {
    props.setActive("all");
  }
  let handleInputsRequest = () => {
    props.setActive("input");
  }
  let handleLoadersRequest = () => {
    props.setActive("loader");
  }
  let handleRadioButtonRequest = () => {
    props.setActive("radio button");
  }
  let handletoggleSwitchesRequest = () => {
    props.setActive("toggle switche");
  }

  return (
    <div style={{backgroundColor : '#212121'}}>
      <div className="content">
              <div className="options">
                <label className="sideBarLabels" style={props.active === "all" ? activeMode : inActiveMode} onClick={handleAllRequest}><AiFillHome />All</label>
                <label className="sideBarLabels" style={props.active === "button" ? activeMode : inActiveMode} onClick={handleButtonRequest}><CgPlayButtonO />Button</label>
                <label className="sideBarLabels" style={props.active === "form" ? activeMode : inActiveMode} onClick={handleFormRequest}><VscOutput />Form</label>
                <label className="sideBarLabels" style={props.active === "card" ? activeMode : inActiveMode} onClick={handleCardRequest}><AiOutlineCreditCard />Card</label>
                <label className="sideBarLabels" style={props.active === "checkBox" ? activeMode : inActiveMode} onClick={handleCheckBoxRequest}><AiFillCheckCircle />Check box</label>
                <label className="sideBarLabels" style={props.active === "input" ? activeMode : inActiveMode} onClick={handleInputsRequest}><LuTextCursorInput />Inputs</label>
                <label className="sideBarLabels" style={props.active === "loader" ? activeMode : inActiveMode} onClick={handleLoadersRequest}><TbLoader3 />Loaders</label>
                <label className="sideBarLabels" style={props.active === "radio button" ? activeMode : inActiveMode} onClick={handleRadioButtonRequest}><BsUiRadiosGrid />Radio Buttons</label>
                <label className="sideBarLabels" style={props.active === "toggle switche" ? activeMode : inActiveMode} onClick={handletoggleSwitchesRequest}><BsToggles />toggle Switches</label>
                <label className="sideBarLabels" style={props.active === "other" ? activeMode : inActiveMode} onClick={handleOtherRequest}><CgMoreVertical />Other</label>
              </div>
      </div>
    </div>
  )
}
export default SideBar
