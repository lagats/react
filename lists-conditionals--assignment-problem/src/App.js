import React, { Component } from 'react';
import './App.css';

import InputCounter from './InputCounter/InputCounter';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';
class App extends Component {
  state = {
    messages : {
      'inputs': {
        min_length : 5,
        too_short : 'Text too short',
        too_long :  'Text long enough',
      },
    },
  }
  
  inputData = (e) => {
    this.setState({
        inputs : {
            [e.target.id] : {
              value : e.target.value,
              length : e.target.value.length,
            },
        },
    });
  };
  
  removeCharacters = (inputId,e,i) => {
    const inputData = {...this.state.inputs[inputId]};
    const newValue = inputData.value.split('').splice(i,1);
    console.log(newValue);
    // this.setState({
    //     inputs : {
    //         [e.target.id] : {
    //           value : inputData.join(''),
    //           length : newValue.length,
    //         },
    //     },
    // });
  };

  render() {    
    return (
      <div className="App">
        <ol>
          {/* <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li> */}
          {/* <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li> */}
          {/* <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li> */}
          {/* <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li> */}
          {/* <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li> */}
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        
        
        {/* Our form */}
        <InputCounter 
          id="counted_input"
          state={this.state}
          title="Edit this text" 
          change={(e) => this.inputData(e)}
        />
        
        {/* Validation for this input instance. */}
        <ValidationComponent
          id="counted_input"
          state={this.state}
          messages={this.state.messages.inputs}
        />
        
        {/* Remove letters from the instance */}
        <CharComponent
          id="counted_input"
          state={this.state}
          click={this.removeCharacters}
        />
          
      </div>
    );
  }
}

export default App;
