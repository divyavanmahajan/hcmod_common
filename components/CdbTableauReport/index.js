/**
 *
 * CdbTableauReport
 * This embeds a tableau report into a MDB Card with a title.
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import TableauReport from 'tableau-react-embed';

/* eslint-disable react/prefer-stateless-function */
class CdbTableauReport extends React.PureComponent {
  render() {
    return (
      <MDBCard className="mt-0" style={{ height: '50rem' }}>
        <MDBCardHeader color={this.props.color}>
          {this.props.title}
        </MDBCardHeader>
        <MDBCardBody>
          <TableauReport url={this.props.url} />
        </MDBCardBody>
      </MDBCard>
    );
  }
}

CdbTableauReport.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CdbTableauReport;
