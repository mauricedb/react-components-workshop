import React, { Component } from 'react';

import Greeting from './Greeting';

class StrictModeDemo extends Component {
  render() {
    return (
      <div>
        <h2>Strict mode</h2>

        <Greeting name="Maurice" />
      </div>
    );
  }
}

export default StrictModeDemo;
