import React, { Component } from 'react';

import SimpleClock from '../../components/SimpleClock';
import AnalogClock from '../../components/AnalogClock';
import withTimeHOC from './withTimeHOC';
import WithTimeRP from './WithTimeRP';

const SimpleClockWithCurrentTime = withTimeHOC(SimpleClock);
const AnalogClockWithCurrentTime = withTimeHOC(AnalogClock);

class CrossCuttingConcernsDemo extends Component {
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
        <hr/>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h3>Higher Order Components</h3>
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <SimpleClockWithCurrentTime />
          </div>
          <div className="mdl-cell mdl-cell--4-col">
            <AnalogClockWithCurrentTime />
          </div>
        </div>
        <hr/>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--4-col">
            <h3>Render Props</h3>
          </div>
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

export default CrossCuttingConcernsDemo;
