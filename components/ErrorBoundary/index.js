/**
 *
 * ErrorBoundary
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { CompositeDisposable } from 'rx';
// import styled from 'styled-components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong loading module {this.props.module}.</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  module: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ErrorBoundary;
