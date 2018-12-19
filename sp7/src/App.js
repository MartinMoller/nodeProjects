import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from './Welcome';
import AllUsers from './AllUsers';
import Detail from './Detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>

              <Route exact path="/" component={Welcome} />
              <Route path="/all" component={AllUsers} />
              <Route path="/details/:index" component={Detail}/>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}


export default App;