/**
 *
 * CdbObservationCard
 *
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { MDBCard, MDBIcon, MDBCardBody } from 'mdbreact';

function CdbObservationCard({ title, icon, dark, cardcolor, observations }) {
  const textColor = dark ? 'dark-grey-text' : 'white-text';
  let key = 1;
  const obs = observations.map(itm => (
    // eslint-disable-next-line no-plusplus
    <Fragment key={`obs-${key++}`}>
      <p className="font-weight-bold mt-1">{itm.header}</p>
      <p className="ml-2">{itm.detail}</p>
    </Fragment>
  ));
  return (
    <MDBCard
      color={cardcolor}
      className={`classic-admin-card ${textColor} mt-1`}
    >
      <MDBCardBody className={`${textColor}`}>
        <div className="float-right">
          <MDBIcon icon={icon} />
        </div>
        <h6 className="font-weight-bold mb-1">{title}</h6>
        {obs}
      </MDBCardBody>
    </MDBCard>
  );
}

CdbObservationCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dark: PropTypes.bool,
  cardcolor: PropTypes.string,
  observations: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      detail: PropTypes.string.isRequired,
    }),
  ),
};

export default CdbObservationCard;
