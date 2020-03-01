import React from 'react';
import { Alert } from 'react-bootstrap';

import './ErrorVeiw.css';
import icon from './error.png';

const ErrorVeiw = ({ message }) => {

  const msg = message ? message: 'Error message text';

  return (
    <Alert variant="warning" className="error-indicator">
      <Alert.Heading className="error-header w-100">Oh snap! You got an error!</Alert.Heading>
      <div><img src={icon} alt="test" className="error-icon" /></div>
      <p className="error-message w-100">{msg}</p>
    </Alert>
  );
};

export default ErrorVeiw;