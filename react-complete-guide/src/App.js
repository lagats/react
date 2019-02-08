import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = {
    persons: [
      { id: 'adsadasda', name: 'Max', age: 28 },
      { id: 'adsadaasddsda', name: 'Manu', age: 29 },
      { id: 'adqqwewwsadasda', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: true,
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(personEntry => {
      return personEntry.id === id;
    });
    
    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;
    
    this.setState({
      persons,
    });
  }
  
  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex,1);
    this.setState({persons: persons});
  }
  
  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons});
  }
  
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
    };
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age} 
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
          })}
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Hi</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Show items</button>
          
          {persons}
           
      </div>
    );
  }
}

export default App;
