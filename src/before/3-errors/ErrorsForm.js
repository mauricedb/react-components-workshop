import React, { Component } from 'react';

class ErrorsForm extends Component {
  static displayName = 'ErrorsForm';

  state = {
    firstName: 'Maurice'
  };

  clearFirstName() {
    this.setState({ firstName: null });
  };

  render() {
    const { firstName } = this.state;

    return (
      <div>
        <div>
          Firstname: {firstName} is {firstName.length} characters long
        </div>
        <div>
          <button
            className="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect"
            onClick={this.clearFirstName}
          >
            Clear firstname
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorsForm;
