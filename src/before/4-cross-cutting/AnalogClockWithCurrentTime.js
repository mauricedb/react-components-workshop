import React, { Component } from 'react';

import AnalogClock from '../../components/AnalogClock';

class AnalogClockWithCurrentTime extends Component {
  state = { now: new Date() };

  componentDidMount() {
    this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;

    return <AnalogClock time={now} />;
  }
}

export default AnalogClockWithCurrentTime;
