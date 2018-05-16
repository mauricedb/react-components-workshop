import React, { Component } from 'react';

import SimpleClock from '../../components/SimpleClock';
import AnalogClock from '../../components/AnalogClock';
import WithTimeRP from './WithTimeRP';

class ErrorsDemo extends Component {
  render() {
    return (
      <div>
        <h2>Context API</h2>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--2-col" />
          <div className="mdl-cell mdl-cell--4-col">
            <WithTimeRP>{now => <SimpleClock now={now} />}</WithTimeRP>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <WithTimeRP>{now => <AnalogClock time={now} />}</WithTimeRP>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorsDemo;
