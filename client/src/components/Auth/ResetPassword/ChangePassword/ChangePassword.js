import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthArea from '../../AuthArea.js';
import ChangePasswordFormContainer from './ChangePasswordFormContainer.js';
import checkMark from '../../../../../assets/img/check-mark.svg';


const ChangePassword = ({ resetSuccessful }) => (
  <AuthArea>
    {
      resetSuccessful ?
        <div style={{ textAlign: 'center' }}>
          Password reset successful!
          <div style={{ marginTop: '10px' }}>
            <img width="80" src={checkMark} alt="reset-success" />
          </div>
          <p>
            <Link to="/login">Login</Link> to access your account
          </p>
        </div> :
        <Fragment>
          <ChangePasswordFormContainer />
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <div style={{ marginBottom: '10px' }}>
              Link expired? <Link to="/reset_password">Resend link </Link>
            </div>
            <div>
              Need an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </Fragment>
    }
  </AuthArea>
);

ChangePassword.propTypes = {
  resetSuccessful: PropTypes.bool.isRequired
};

export default ChangePassword;
