import React from 'react'
import { useState } from 'react';
import Input from "./input";
import Output from "./output";
import InputCss from './InputCss';
import Hero from './Hero';
import Navbar from './Navbar';
const App = () => {
  const [html,setHtml] = useState("");
  const [css,setCss] = useState("");
  return (
    <div>
       <Navbar />
       <Hero /> 
     
    </div>
  )
}

export default App