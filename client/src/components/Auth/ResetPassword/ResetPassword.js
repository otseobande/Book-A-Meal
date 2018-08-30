import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import AuthArea from '../AuthArea.js';
import SentMessage from './SentMessage.js';

import styles from './resetpassword.scss';
import ResetPasswordFormContainer from './ResetPasswordFormContainer.js';

const ResetPassword = ({ mailSent }) => (
  <DocumentTitle title="Reset password - Book-A-Meal">
    <AuthArea>
      <div className={styles.mailSentCard}>
        {
        mailSent ?
          <SentMessage /> :
          <Fragment>
            <ResetPasswordFormContainer />
            <p style={{ textAlign: 'center' }}>
            Already have an account? <Link to="/login">Login</Link>
            </p>
          </Fragment>
      }
      </div>
    </AuthArea>
  </DocumentTitle>
);

ResetPassword.propTypes = {
  mailSent: PropTypes.bool.isRequired
};


export default ResetPassword;
