import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Demo from './before/1-controlled';

class App extends Component {
  render() {
    return (
      <div>
        <div className="mdl-grid">
          <header className="mdl-cell mdl-cell--12-col App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--8-col mdl-cell--2-offset">
            <Demo />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
