import { Component } from 'react';

class WithTimeRP extends Component {
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

    return children(now);
  }
}

export default WithTimeRP;
