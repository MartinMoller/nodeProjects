import React, { Component } from 'react';
import NameForm from './ NameForm';
import EssayForm from './EssayForm';
import FlavorForm from './FlavorForm';
import Reservation from './Reservation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameForm/>
        <EssayForm/>
        <FlavorForm/>
        <Reservation/>
      </div>
    );
  }
}

export default App;
