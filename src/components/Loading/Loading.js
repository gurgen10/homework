import React from 'react';
import { Spinner } from 'react-bootstrap';

import './Loading.css';

const Loading = () => {
  return (
    <Spinner animation="border" variant="warning" />
  )
}

export default Loading;
