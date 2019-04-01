/**
 *
 * GoToTopButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function GoToTopButton() {
  return (
    <div
      className="fixed-action-btn smooth-scroll"
      style={{ bottom: '45px', right: '24px' }}
    >
      <a href="#top-section" className="btn-floating btn-large red">
        <i className="fas fa-arrow-up" />
      </a>
    </div>
  );
}

GoToTopButton.propTypes = {};

export default GoToTopButton;
