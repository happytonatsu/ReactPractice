import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  
  state = {
    persons: [
      { id:'dasffghtgfs', name: 'Max', age: 28 },
      { id:'daf345fds', name: 'Manu', age: 29 },
      { id:'sdfafd2345efdscv', name: 'Stephanie', age: 26} 
    ],
    otherState: 'Some other value',
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27} 
      ]
    })
  }


  nameChangedHandler = (event, id) => {
    console.log("test");
    console.log(event.target);
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    })

    //You should never modify the state directly, thus we use the spread
    // operator to make a copy 
    const updPersons = [...this.state.persons];
    updPersons[personIndex].name = event.target.value;
    this.setState ({
      persons: updPersons
    })
  }


  deletePersonHandler = (index) => {
    // You slice to get a copy of the array so you are not
    //modifying the state directly as arrays are reference type
    // const updPersons = this.state.persons.slice();
    const updPersons = [...this.state.persons]
    updPersons.splice(index, 1);
    this.setState({persons: updPersons})
  }

  togglePersonHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover' : {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    };

    let persons = null;
    const arr = this.state.persons;
    console.log(arr);
    if (this.state.showPersons) {
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
      persons = (
        <div>
          {arr.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              />
          })}
         {/* <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
         <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Max!")}
          changed={this.nameChangedHandler}>Hobbies: Racing </Person>
         <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> */}
        </div> 
      );
    }
    //turns the array of classes into "elementA elementB elmentC"
    const classes = [];
    if(this.state.persons.length <= 2) classes.push('red');
    if(this.state.persons.length <= 1) classes.push('bold');
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}> This is really working!</p>
          <button
            style={style} 
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
