/**
 *
 * CardStack
 * Generate React stack of cards. 1 per MDBRow
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { MDBRow } from 'mdbreact';

import CdbAdminCard from '../CdbAdminCard';
import CdbTargetCard from '../CdbTargetCard';
import CdbObservationCard from '../CdbObservationCard';

function CardStack({ cards }) {
  let i=0;
  return cards.map(icard => {
    switch (icard.cardtype) {
      case 'CdbObservationCard':
        return (
          <MDBRow className="mr-0" key={`cards-${i++}`}>
            <CdbObservationCard {...icard} />
          </MDBRow>
        );
      case 'CdbTargetCard':
        return (
          <MDBRow key={`cards-${i++}`} >
            <CdbTargetCard {...icard}/>
          </MDBRow>
        );
      case 'CdbAdminCard':
        return (
          <MDBRow key={`cards-${i++}`} >
            <CdbAdminCard {...icard}/>
          </MDBRow>
        );
      default:
        return <div />;
    }
  });
}

CardStack.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardStack;
