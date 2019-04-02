/**
 *
 * LoginContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// import { FormattedMessage } from 'react-intl';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import Login from '../../components/Login';
// import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class LoginContainer extends React.Component {
  render() {
    return (
      <div>
        <Login {...this.props.LoginContainer} />
      </div>
    );
  }
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginContainer', reducer });
const withSaga = injectSaga({ key: 'loginContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(LoginContainer);
