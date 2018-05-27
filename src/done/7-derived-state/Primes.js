import React, { Component } from 'react';
import calculatePrimes from './calculatePrimes';

class Primes extends Component {
  state = { primeCount: 0, primes: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.primeCount !== state.primeCount) {
      const { primeCount } = props;
      const primes = calculatePrimes(primeCount);

      return { primeCount, primes };
    }

    return null;
  }

  render() {
    const { primes } = this.state;

    return (
      <div>
        <h3>Primes</h3>
        {primes.join(', ')}
      </div>
    );
  }
}

export default Primes;


