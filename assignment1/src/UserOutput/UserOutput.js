import React from 'react';

const UserOutput = (props) => {
  const style = {
    width: '60%',
    padding: '16px',
    margin: '16px auto',
    border: '2px solid black',
    backgroundColor: '#ccc',
    textAlighn: 'center'
  }
  return (
    <div className='UserOutput' style={style}>
      <p>Username is {props.userName}</p>
      <p >Paragraph 2</p>
    </div>
  );
}

export default UserOutput;
