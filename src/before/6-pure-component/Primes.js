import React, { Component } from 'react';

class Primes extends Component {
  render() {
    const { primeCount } = this.props;
    const primes = [];

    console.time('Calculating primes');
    for (let prime = 2; prime < primeCount; prime++) {
      let isPrime = true;
      for (let i = 2; i < prime - 1; i++) {
        if (prime % i === 0) {
          isPrime = false;
        }
      }
      if (isPrime) {
        primes.push(prime);
      }
    }
    console.timeEnd('Calculating primes');

    return (
      <div>
        <h3>Primes</h3>
        {primes.join(', ')}
      </div>
    );
  }
}

export default Primes;
