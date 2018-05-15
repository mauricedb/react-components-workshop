import React, { Component, createContext } from 'react';

const TimeContext = createContext();

export const TimeContextConsumer = TimeContext.Consumer;

export class TimeContextProvider extends Component {
  state = { now: new Date() };

  componentDidMount() {
    this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }
  render() {
    const { children } = this.props;
    const { now } = this.state;

    return <TimeContext.Provider value={now}>{children}</TimeContext.Provider>;
  }
}
