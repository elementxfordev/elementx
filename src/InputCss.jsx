import React from 'react'

const InputCss = (props) => {
    let handleOnCssChange = (e) => {
        props.setCss(e.target.value);
    };
  return (
    <div>
        <textarea value={props.css} onChange={handleOnCssChange} />
    </div>
  )
}

export default InputCss