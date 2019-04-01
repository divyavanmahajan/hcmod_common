/**
 *
 * CdbAdminCard
 *  Summary cards for a single KPI
 *  Has a progress bar.
 *  See MDB Dashboard v1 - for examples (SALES $2000)
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { MDBCard, MDBIcon, MDBCardBody, MDBProgress } from 'mdbreact';

function CdbAdminCard({
  filled,
  icon,
  cardcolor,
  cardtitle,
  cardvalue,
  cardtext,
  progressvalue,
}) {
  if (filled) {
    return (
      <MDBCard color={cardcolor} className="classic-admin-card white-text mt-1 mb-1 mr-2">
        <MDBCardBody>
          <div className="float-right">
            <MDBIcon icon={icon} />
          </div>
          <p className="white-text">{cardtitle}</p>
          <h4>{cardvalue}</h4>
        </MDBCardBody>
        <MDBProgress
          value={progressvalue}
          barClassName="bg grey darken-3"
          height="6px"
          wrapperStyle={{ opacity: '.7' }}
        />
        <MDBCardBody>
          <p>{cardtext}</p>
        </MDBCardBody>
      </MDBCard>
    );
  }
  return (
    <MDBCard cascade className="cascading-admin-card mt-4 mb-1 mr-1">
      <div className="admin-up">
        <MDBIcon icon={icon} className={cardcolor} />
        <div className="data">
          <p>{cardtitle}</p>
          <h4 className="font-weight-bold dark-grey-text">{cardvalue}</h4>
        </div>
      </div>
      <MDBCardBody cascade>
        <MDBProgress
          value={progressvalue}
          barClassName="bg-primary"
          height="6px"
          wrapperStyle={{ opacity: '.7' }}
          className="mb-3"
        />
        <p className="card-text">{cardtext}</p>
      </MDBCardBody>
    </MDBCard>
  );
}

CdbAdminCard.propTypes = {
  filled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  cardcolor: PropTypes.string.isRequired,
  cardtitle: PropTypes.string.isRequired,
  cardvalue: PropTypes.string.isRequired,
  cardtext: PropTypes.string,
  progressvalue: PropTypes.number.isRequired,
};

export default CdbAdminCard;
