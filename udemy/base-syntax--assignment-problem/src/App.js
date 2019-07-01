import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    'user': {
      'username':'potatohead',
    },
  };
  
  
  // Update username
  updateUsername = (e) => {
    this.setState({
      'user': {
        // Update username
        'username': e.target.value,
        
        // Add state for initial usernamesad
        'username-old': this.state['user']['username-old']?this.state['user']['username-old']:this.state['user']['username'],
      },
    });
  }
  
  
  // Render App
  render() {
    return (
      <div className="App">
        <UserOutput 
          username={this.state['user']['username']}
          usernameOld={this.state['user']['username-old']}
          />
        <UserOutput 
          username={this.state['user']['username']}
          usernameOld={this.state['user']['username-old']}
          />
        <UserOutput 
          username={this.state['user']['username']}
          usernameOld={this.state['user']['username-old']}
          />
        <UserInput 
          value={this.state['user']['username']}
          change={this.updateUsername}
          />
      </div>
    );
  }
}

export default App;
