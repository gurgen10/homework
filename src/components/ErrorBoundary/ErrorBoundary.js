import React, { Component } from 'react';

import ErrorVeiw from '../ErrorVeiw';

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({hasError: true})
  }

  render() {
    const { hasError } = this.state;
    if (hasError) return <ErrorVeiw />;

    return this.props.children;
  }
}

export default ErrorBoundary;