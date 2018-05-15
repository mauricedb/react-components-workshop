import React, { Component } from 'react';

import ErrorsForm from './ErrorsForm';
import ErrorBoundary from './ErrorBoundary';

class ErrorsDemo extends Component {
  static displayName = 'ErrorsDemo';

  render() {
    return (
      <div>
        <h2>Error Handling</h2>
        <ErrorBoundary>
          <ErrorsForm />
        </ErrorBoundary>
      </div>
    );
  }
}

export default ErrorsDemo;
