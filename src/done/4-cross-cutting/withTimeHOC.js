import React, { Component } from 'react';

const withTimeHOC = TheComponent => {
  return class extends Component {
    state = { now: new Date() };

    componentDidMount() {
      this.handle = setInterval(() => this.setState({ now: new Date() }), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.handle);
    }

    render() {
      const { now } = this.state;

      return <TheComponent now={now} />;
    }
  };
};

export default withTimeHOC;
