import React, { Component } from 'react';
//import ListDemo from './ListDemo';
import NumberTable from './ListDemo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         
        <NumberTable numbers={[1,3,7,8,3,1]}/>
      </div>
    );
  }
}

export default App;
