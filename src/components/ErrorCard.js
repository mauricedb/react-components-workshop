import React from 'react';

import './ErrorCard.css';

const ErrorCard = ({ error, errorInfo: { componentStack } }) => (
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
      <pre>{componentStack}</pre>
    </div>
  </div>
);

ErrorCard.defaultProps = {
  error: { message: '', stack: '' },
  errorInfo: { componentStack: '' }
};

export default ErrorCard;
