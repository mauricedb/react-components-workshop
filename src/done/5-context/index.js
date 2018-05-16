import React, { Component } from 'react';

import SimpleClock from '../../components/SimpleClock';
import AnalogClock from '../../components/AnalogClock';

import { TimeContextProvider, TimeContextConsumer } from './TimeContext';

class ErrorsDemo extends Component {
  render() {
    return (
      <div>
        <TimeContextProvider>
          <h2>Context API</h2>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col" />
            <div className="mdl-cell mdl-cell--4-col">
              <TimeContextConsumer>{now => <SimpleClock now={now} />}</TimeContextConsumer>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <TimeContextConsumer>{now => <AnalogClock time={now} />}</TimeContextConsumer>
            </div>
          </div>
        </TimeContextProvider>
      </div>
    );
  }
}

export default ErrorsDemo;
