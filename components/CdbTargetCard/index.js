/**
 *
 * CdbTargetCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { MDBCard, MDBIcon, MDBCardBody } from 'mdbreact';

function CdbTargetCard({
  cardtitle,
  icon,
  dark,
  cardcolor,
  displayValue,
  displayTarget,
  displayExplanation,
  isTargetAchieved,
}) {
  const valuecolor = isTargetAchieved ? 'green' : 'red';
  const valueicon = isTargetAchieved ? 'check-circle' : 'times-circle';
  const textColor = dark ? 'dark-grey-text' : 'white-text';
  return (
    <MDBCard
      color={cardcolor}
      className={`classic-admin-card ${textColor} mt-1 mr-1`}
    >
      <MDBCardBody className={`${textColor}`}>
        <div className="float-right">
          <MDBIcon icon={icon} />
        </div>
        <h6 className="font-weight-bold mb-1">{cardtitle}</h6>
        <h6 className="font-weight-bold m-0">
          {displayValue}
          &nbsp;
          <span className={`label ${valuecolor}-text`}>
            <MDBIcon icon={valueicon} />
          </span>
        </h6>
        <p>{displayExplanation}</p>
        <h6 className="m-0">Your target</h6>
        <h6 className="font-weight-bold m-0">{displayTarget}</h6>
      </MDBCardBody>
    </MDBCard>
  );
}

CdbTargetCard.propTypes = {
  cardtitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  cardcolor: PropTypes.string.isRequired,
  displayValue: PropTypes.string.isRequired,
  displayTarget: PropTypes.string.isRequired,
  displayExplanation: PropTypes.string.isRequired,
  isTargetAchieved: PropTypes.bool.isRequired,
  dark: PropTypes.bool,
};

export default CdbTargetCard;
