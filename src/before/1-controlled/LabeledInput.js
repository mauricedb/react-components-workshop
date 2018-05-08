import React from 'react';

const LabeledInput = ({ value, name, label, errorMessage, ...props }) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input
      className="mdl-textfield__input"
      type="text"
      id={name}
      name={name}
      defaultValue={value}
      {...props}
    />
    <label className="mdl-textfield__label" htmlFor={name}>
      {label}
    </label>
    {errorMessage && (
      <span className="mdl-textfield__error">{errorMessage}</span>
    )}
  </div>
);

export default LabeledInput;
