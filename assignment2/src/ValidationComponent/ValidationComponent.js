import React from 'react';

const ValidationComponent = (props) => {
  let output = (props.inputLength < 5) ? 
    "Text is too short" : 
    "Text is good!"; 
  return (
    <div>
      <p>{output}</p>
    </div>
  )
}

export default ValidationComponent;