import React from 'react';

const UserInput = (props) => {
  const style = {
    width: '60%',
    margin: '16px auto',
    border: '2px solid red'
  };
  
  return (
    <div className="UserInput" style={style}>
      <label htmlFor="userInput">Username: </label>
      <input 
        type="text" 
        onChange={props.handler}
        value={props.username}></input>
    </div>
  )
}

export default UserInput;