import React, { Component } from 'react';
import Badge from './components/badge.jsx';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Badge max={99} count={100}>
              <input type="button" value='一等奖'/>
          </Badge>
          <Badge max={99} count={100} color={'green'}>
              <div>徽章</div>
          </Badge>
          <Badge max={999} count={100}>
            <input type="text" value='一等奖'/>
          </Badge>
      </div>
    );
  }
}

export default App;
