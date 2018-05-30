import React, { Component, StrictMode } from 'react';

import Greeting from './Greeting';

class StrictModeDemo extends Component {
  render() {
    return (
      <div>
        <h2>Strict mode</h2>

        <StrictMode>
          <Greeting name="Maurice" />
        </StrictMode>
      </div>
    );
  }
}

export default StrictModeDemo;
