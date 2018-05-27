import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Demo from './before/1-controlled';
// import Demo from './done/1-controlled';
// import Demo from './before/2-fragments';
// import Demo from './done/2-fragments';
// import Demo from './before/3-errors';
// import Demo from './done/3-errors';
// import Demo from './before/4-cross-cutting';
// import Demo from './done/4-cross-cutting';
// import Demo from './before/5-context';
// import Demo from './done/5-context';
// import Demo from './before/6-pure-component';
// import Demo from './done/6-pure-component';
// import Demo from './before/7-derived-state';
import Demo from './done/7-derived-state'

class App extends Component {
  static displayName = 'App';

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
