import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DetailPage from './page/Detail';
import LoginPage from './page/Login';
import HomePage from './page/Home';

import {
  BrowserRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <ul>
              <li><Link to="/">Home</Link></li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" render={HomePage} />
            <Route exact path="/login" render={LoginPage} />
            <Route path="/article/:id" component={DetailPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
