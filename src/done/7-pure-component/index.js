import React, { Component } from 'react';

import Primes from './Primes';
import LabeledInput from './LabeledInput';
import MyProfiler from './MyProfiler';

class PureDemo extends Component {
  state = {
    primeCount: 2500,
    firstName: ''
  };

  onChange = (name, value) => {
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, primeCount } = this.state;

    return (
      <div>
        <h2>Pure Components</h2>

        <div>
          <MyProfiler id="inputs">
            <LabeledInput
              label="Firstname:"
              value={firstName}
              name="firstName"
              onChange={this.onChange}
            />
            <LabeledInput
              label="Max Prime:"
              value={primeCount}
              type="number"
              name="primeCount"
              onChange={this.onChange}
            />
          </MyProfiler>
          <MyProfiler id="primes">
            <Primes primeCount={primeCount} />
          </MyProfiler>
        </div>
      </div>
    );
  }
}

export default PureDemo;
