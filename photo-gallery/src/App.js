import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhotoGallery from './photo';
import Form from './photo';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <PhotoGallery/>
        <Form/>
      </div>
    );
  }
}

export default App;
