import React, { Component } from 'react';

import Primes from './Primes';
import LabeledInput from './LabeledInput';

class ProfileDemo extends Component {
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
        <h2>Profiler</h2>

        <div>
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
          <Primes primeCount={primeCount} />
        </div>
      </div>
    );
  }
}

export default ProfileDemo;
