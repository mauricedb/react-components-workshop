import React, { Component } from 'react';

import SimpleClock from './SimpleClock';
import AnalogClock from './AnalogClock';
import SimpleClockWithCurrentTime from './SimpleClockWithCurrentTime';
import AnalogClockWithCurrentTime from './AnalogClockWithCurrentTime';

class ErrorsDemo extends Component {
  render() {
    return (
      <div>
        <h2>Cross cutting concerns</h2>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col" />
          <div className="mdl-cell mdl-cell--4-col">
            <SimpleClock />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <AnalogClock />
          </div>
        </div>
        <hr />
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h3>Wrapped component</h3>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <SimpleClockWithCurrentTime />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <AnalogClockWithCurrentTime />
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorsDemo;
