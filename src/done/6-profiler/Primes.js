import React, { Component } from 'react';
import calculatePrimes from './calculatePrimes';

class Primes extends Component {
  render() {
    const { primeCount } = this.props;
    const primes = calculatePrimes(primeCount);

    return (
      <div>
        <h3>Primes</h3>
        {primes.join(', ')}
      </div>
    );
  }
}

export default Primes;
