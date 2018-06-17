import React from 'react';
import { Link } from 'react-router-dom';
import AuthArea from '../AuthArea.js';
import SignUpFormContainer from './SignUpFormContainer.js';

const SignUp = () => (
  <AuthArea>
    <SignUpFormContainer />
    <p style={{ textAlign: 'center' }}>
      Already have an account? <Link to="login">Login</Link>
    </p>
  </AuthArea>
);

export default SignUp;
