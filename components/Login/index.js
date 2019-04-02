/**
 *
 * Login
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBInput,
  MDBIcon,
  MDBView,
  MDBBtn,
} from 'mdbreact';
import './Login.css';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

// eslint-disable-next-line import/no-unresolved
import hcare360logo from './HCare360-logo.png';

/* eslint-disable react/prefer-stateless-function */
class Login extends React.Component {
  state = {
    collapseID: '',
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  render() {
    return (
      <div className="classic-form-page" id="login">
        <MDBView>
          <MDBMask
            className="d-flex justify-content-center align-items-center"
            overlay="stylish-strong"
          >
            <MDBContainer>
              <MDBRow>
                <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto">
                  <MDBCard style={{ width: '22rem' }}>
                    <img
                      className="card-img-top"
                      src={hcare360logo}
                      alt="HCare360"
                    />
                    <div style={{ paddingBottom: '40px', paddingLeft: '10px' }}>
                      <b>HCare 360 = Healthcare Analytics</b> <i>Re-defined</i>
                    </div>
                    <MDBCardBody>
                      <div className="form-header blue-gradient">
                        <h3>
                          <MDBIcon
                            icon="user"
                            className="mt-2 mb-2 text-white"
                          />{' '}
                          <FormattedMessage {...messages.login} />:
                        </h3>
                      </div>
                      <MDBInput
                        type="email"
                        label="Your username"
                        icon="envelope"
                        iconClass="white-text"
                      />
                      <MDBInput
                        type="password"
                        label="Your password"
                        icon="lock"
                        iconClass="white-text"
                      />
                      <div className="text-center mt-3 black-text">
                        <MDBBtn className="blue-gradient" size="lg">
                          <FormattedMessage {...messages.login} />
                        </MDBBtn>
                        <hr />
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

Login.propTypes = {};

export default Login;
