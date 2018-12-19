  import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import goat from './img/goat.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My demo app</h1>
        <img src={goat} />
        <BodyTxt />
        <ClassComp />
        <WithProps name="Jordan"/>
        <StateComponent/>
        <InteractiveComp/>
      </div>
    );
  }
}

const BodyTxt = () => {
  return <h1>The Goat</h1>;
}
class ClassComp extends Component {
  render() {
    return <p>Hello from class Component</p>
  }
}
const WithProps = (props) => {return `This is the text with prop: ${props.name} is old as dirt`;};
class StateComponent extends Component{
  constructor(){
    super();
    this.state = {person: 'Michael Jordan'};
  }
  render(){
    return (<div>Indhold: {this.state.person}</div>);
  }
}
class InteractiveComp extends Component{
  constructor(){
    super();
    this.state = {};
  }
  doSomething = ()=>{
    alert("Buh!!!");
  }
  render(){
    return (<div>
      <button onClick={this.doSomething}>Klik her</button>
    </div>)
  }
}
export default App;
