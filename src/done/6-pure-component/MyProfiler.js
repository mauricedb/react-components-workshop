import React, { Component, unstable_Profiler as Profiler } from 'react';

class MyProfiler extends Component {
  static defaultProps = {
    id: 'profile'
  };

  static results = {};

  onRender = (id, phase, actualTime) => {
    this.constructor.results[id] = this.constructor.results[id] || {
      id,
      count: 0,
      totalActualTime: 0,
      maxActualTime: 0,
      minActualTime: Number.MAX_SAFE_INTEGER
    };

    const result = this.constructor.results[id];
    result.count++;
    result.totalActualTime += actualTime;
    result.averageTime = result.totalActualTime / result.count;
    result.maxActualTime = Math.max(result.maxActualTime, actualTime);
    result.minActualTime = Math.min(result.minActualTime, actualTime);

    console.table(this.constructor.results);
  };

  render() {
    const { children, id } = this.props;

    return (
      <Profiler id={id} onRender={this.onRender}>
        {children}
      </Profiler>
    );
  }
}

export default MyProfiler;
