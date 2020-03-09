import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames: [
      'David',
      'John',
      'Kari'
    ]
  };

  usernameChangeHandler = (event) => {
    this.setState({
      usernames: [
        event.target.value,
        'John',
        'Kari'
      ]
    });
    console.log("hi");
  }

  render = () => {
    return (
      <div className="App">
        <UserInput 
        handler={this.usernameChangeHandler} 
        username={this.state.usernames[0]}/>
        <UserOutput userName={this.state.usernames[0]}/>
        <UserOutput userName={this.state.usernames[1]} />
        <UserOutput userName={this.state.usernames[2]} />
      </div>
    );
  } 
}

export default App;
