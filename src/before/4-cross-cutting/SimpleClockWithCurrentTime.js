import React, { Component } from 'react';

import SimpleClock from '../../components/SimpleClock';

class SimpleClockWithCurrentTime extends Component {
  state = { now: new Date() };

  componentDidMount() {
    this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    const { now } = this.state;

    return <SimpleClock now={now} />;
  }
}

export default SimpleClockWithCurrentTime;
