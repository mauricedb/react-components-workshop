import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SimpleClock.css';

class SimpleClock extends Component {
  static propTypes = {
    now: PropTypes.instanceOf(Date).isRequired
  };

  static defaultProps = {
    now: new Date(2000, 0, 1, 0, 20, 40)
  };

  render() {
    const { label, now } = this.props;

    return (
      <div className="simple-clock">
        {label} {now && now.toLocaleTimeString()}
      </div>
    );
  }
}

export default SimpleClock;
