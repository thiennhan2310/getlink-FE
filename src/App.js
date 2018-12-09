import React, { Component } from 'react';
import './App.css';
import DetailPage from './page/Detail';
import LoginPage from './page/Login';
import HomePage from './page/Home';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route path="/article/:id" component={DetailPage} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
