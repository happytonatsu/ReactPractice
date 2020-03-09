import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }
  
  inputChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  deleteCharacterHandler= (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedChars = text.join('');
    this.setState({
      userInput: updatedChars
    });
  }
  
  render () {
   
    const charList = this.state.userInput.split('').map((character, index) => {
      return <CharComponent 
        char={character} 
        key={index} 
        click={this.deleteCharacterHandler.bind(this, index)}/>
    })
    return (
      <div>
        <input 
          type="text" 
          onChange={this.inputChangedHandler} 
          value={this.state.userInput} />
        <p>The length of the entered text is: {this.state.userInput.length}</p>
        <ValidationComponent inputLength={this.state.userInput.length} />
        {charList}
      </div>
    )
  } 
  
}

export default App;
