import React from 'react'
import { AiFillHome,AiOutlineCreditCard,AiFillCheckCircle } from 'react-icons/ai';
import { CgPlayButtonO,CgMoreVertical } from 'react-icons/cg';
import { VscOutput } from 'react-icons/vsc';
import { LuTextCursorInput } from 'react-icons/lu';
import { TbLoader3 } from 'react-icons/tb'
import { BsUiRadiosGrid,BsToggles } from 'react-icons/bs'
import './../Css/Sidebar.css';
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
    props.setActive('buttons');
  }
  let handleCardRequest = () => {
    props.setActive('cards');
    
  }
  let handleCheckBoxRequest = () => {
    props.setActive('checkBoxes');
  }
  let handleFormRequest = () => {
    props.setActive('forms');
  }
  let handleOtherRequest = () => {
    props.setActive('others');
  }
  let handleAllRequest = () => {
    props.setActive('all');
  }
  let handleInputsRequest = () => {
    props.setActive('inputs');
  }
  let handleLoadersRequest = () => {
    props.setActive('loaders');
  }
  let handleRadioButtonRequest = () => {
    props.setActive('radioButtons');
  }
  let handletoggleSwitchesRequest = () => {
    props.setActive('toggleSwitches');
  }
  return (
    <div >
      <div className="content">
              <div className="options">
                <label className="sideBarLabels" style={props.active === "all" ? activeMode : inActiveMode} onClick={handleAllRequest}><AiFillHome />All</label>
                <label className="sideBarLabels" style={props.active === "buttons" ? activeMode : inActiveMode} onClick={handleButtonRequest}><CgPlayButtonO />Button</label>
                <label className="sideBarLabels" style={props.active === "forms" ? activeMode : inActiveMode} onClick={handleFormRequest}><VscOutput />Form</label>
                <label className="sideBarLabels" style={props.active === "cards" ? activeMode : inActiveMode} onClick={handleCardRequest}><AiOutlineCreditCard />Card</label>
                <label className="sideBarLabels" style={props.active === "checkBoxes" ? activeMode : inActiveMode} onClick={handleCheckBoxRequest}><AiFillCheckCircle />Check box</label>
                <label className="sideBarLabels" style={props.active === "inputs" ? activeMode : inActiveMode} onClick={handleInputsRequest}><LuTextCursorInput />Inputs</label>
                <label className="sideBarLabels" style={props.active === "loaders" ? activeMode : inActiveMode} onClick={handleLoadersRequest}><TbLoader3 />Loaders</label>
                <label className="sideBarLabels" style={props.active === "radioButtons" ? activeMode : inActiveMode} onClick={handleRadioButtonRequest}><BsUiRadiosGrid />Radio Buttons</label>
                <label className="sideBarLabels" style={props.active === "toggleSwitches" ? activeMode : inActiveMode} onClick={handletoggleSwitchesRequest}><BsToggles />toggle Switches</label>
                <label className="sideBarLabels" style={props.active === "others" ? activeMode : inActiveMode} onClick={handleOtherRequest}><CgMoreVertical />Other</label>
              </div>
      </div>
    </div>
  )
}
export default SideBar
