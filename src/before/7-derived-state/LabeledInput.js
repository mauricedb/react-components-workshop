import React from 'react';

const LabeledInput = ({
  value,
  name,
  label,
  errorMessage,
  onChange,
  ...props
}) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input
      className="mdl-textfield__input"
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={e => onChange(name, e.target.value)}
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
