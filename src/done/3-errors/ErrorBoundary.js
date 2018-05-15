import React, { Component } from 'react';

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
      return (
        <div className="mdl-card mdl-shadow--2dp error-card">
          <div className="mdl-card__title mdl-card--expand">
            <h2 className="mdl-card__title-text">{error.message}</h2>
          </div>
          <div className="mdl-card__supporting-text">
            <h3>Stack trace</h3>
            <pre>{error.stack}</pre>
          </div>
          <div className="mdl-card__supporting-text">
            <h3>Component stack</h3>
            <pre>{errorInfo.componentStack}</pre>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
