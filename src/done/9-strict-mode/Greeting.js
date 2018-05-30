import React, { Component } from 'react';

class Greeting extends Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    const { name } = this.props;
    console.log('xxx')
    return <div>Hello {name}</div>;
  }
}

export default Greeting;
