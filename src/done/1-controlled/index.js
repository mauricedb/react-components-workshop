import React, { Component } from 'react';

import LabeledInput from './LabeledInput';
import LabeledTextArea from './LabeledTextArea';

class ControlledDemo extends Component {
  state = {
    movie: {
      title: 'Star Wars: The Last Jedi',
      director: 'Rian Johnson',
      overview:
        'Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.'
    },
    valid: true
  };
  render() {
    const { movie, valid } = this.state;

    return (
      <div>
        <h2>Controlled & Uncontrolled components</h2>
        <form onSubmit={this.onFormSubmit} noValidate>
          <LabeledInput
            value={movie.title}
            name="title"
            label="Title"
            required
            errorMessage="Please enter a title!"
            onChange={this.updateMovie}
          />

          <LabeledInput
            value={movie.director}
            name="director"
            label="Director"
            required
            errorMessage="Please enter the directors name!"
            onChange={this.updateMovie}
          />

          <LabeledTextArea
            value={movie.overview}
            name="overview"
            label="Overview"
            rows="3"
            onChange={this.updateMovie}
          />

          <div>
            <button
              className="mdl-button mdl-button--primary mdl-js-button mdl-js-ripple-effect"
              disabled={!valid}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }

  updateMovie = (name, value) => {
    const movie = { ...this.state.movie, [name]: value };

    let valid = true;
    valid = valid && movie.title;
    valid = valid && movie.director;

    this.setState({ movie, valid });
  };

  onFormSubmit = e => {
    e.preventDefault();

    alert(JSON.stringify(this.state.movie, null, 2));
  };
}

export default ControlledDemo;
