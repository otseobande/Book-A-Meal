import React from 'react';
import { Link } from 'react-router-dom';
import AuthArea from '../AuthArea.js';
import LoginFormContainer from './LoginFormContainer.js';


const Login = () => (
  <AuthArea>
    <LoginFormContainer />
    <p style={{ textAlign: 'center' }}>

      <Link to="/resetpassword" style={{ textAlign: 'center' }}>Forgot your password?</Link>
      <br /><br />
      <span style={{ textAlign: 'center' }}>Need an account? <Link to="/signup">Sign up</Link></span>
    </p>
  </AuthArea>
);

export default Login;
