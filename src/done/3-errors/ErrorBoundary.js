import React, { Component } from 'react';

import ErrorCard from '../../components/ErrorCard';

class ErrorBoundary extends Component {
  static displayName = 'ErrorBoundary';

  state = {
    error: null,
    errorInfo: null
  };

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;

    if (error) {
      return <ErrorCard error={error} errorInfo={errorInfo} />;
    }

    return children;
  }
}

export default ErrorBoundary;
