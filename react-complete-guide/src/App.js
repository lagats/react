import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 38 },
        { name: 'Manu', age: 49 },
      ]
    });
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 38 },
        { name: 'Manu', age: 49 },
      ]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={() => this.switchNameHandler('Mad')}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Map')}
          changed={this.nameChangedHandler}>
          Hobbies: racing
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/> 
      </div>
    );
  }
}

export default App;
