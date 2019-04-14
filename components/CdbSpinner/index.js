/**
 *
 * CdbSpinner
 */

import React from 'react';
import PropTypes from 'prop-types';

function CdbSpinner({ isSpinning }) {
  if (isSpinning) {
    return <i className="fas fa-spinner fa-pulse" />;
  }
  return '';
}

CdbSpinner.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
};

export default CdbSpinner;
