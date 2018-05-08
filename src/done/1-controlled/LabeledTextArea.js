import React from 'react';

const LabeledTextArea = ({
  value,
  name,
  label,
  errorMessage,
  onChange,
  ...props
}) => (
  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <textarea
      className="mdl-textfield__input"
      id="overview"
      name="overview"
      value={value}
      onChange={e => onChange(name, e.target.value)}
      {...props}
    />
    <label className="mdl-textfield__label" htmlFor="overview">
      {label}
    </label>
    {errorMessage && (
      <span className="mdl-textfield__error">{errorMessage}</span>
    )}
  </div>
);

export default LabeledTextArea;
