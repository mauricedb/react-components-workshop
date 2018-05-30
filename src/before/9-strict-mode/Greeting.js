import React, { Component } from 'react';

class Greeting extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  render() {
    const { name } = this.props;
    return <div>Hello {name}</div>;
  }
}

export default Greeting;
