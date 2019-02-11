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
  
  removeCharacters = (inputId,index) => {
    const inputData = {...this.state.inputs[inputId]};
    const inputDataValue = inputData.value.split('');
    inputDataValue.splice(index,1); 
    
    this.setState({
        inputs : {
            [inputId] : {
              value : inputDataValue.join(''),
              length : inputDataValue.length,
            },
        },
    });
  };

  render() {    
    return (
      <div className="App">
      
        <div className="form-wrap">
          {/* Our form */}
          <InputCounter 
            id="counted_input"
            state={this.state}
            title="Enter your text here:" 
            change={(e) => this.inputData(e)}
          />
          
          {/* Validation for this input instance. */}
          <ValidationComponent
            id="counted_input"
            state={this.state}
            messages={this.state.messages.inputs}
          />
        </div>
          
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
