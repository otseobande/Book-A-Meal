import React from 'react';
import { Link } from 'react-router-dom';
import styles from './resetpassword.scss';

const Message = () => (
  <div className={styles.mailSent}>
    <h4>Reset password link would be sent to your email shortly.</h4>

    <p>
      Go back to <Link to="login">Login</Link>
    </p>
  </div>
);

export default Message;
