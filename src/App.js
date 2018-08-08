import React, { Component } from 'react';
import './App.css';
import { Route, Switch ,Redirect,withRouter} from 'react-router-dom';
import landingpage from './container/landingpage/landingpage'

class App extends Component {
  render() {
    return (
      <Switch>
          <Route path="/" exact component ={landingpage}/>
      </Switch>
    );
  }
}

export default App;
