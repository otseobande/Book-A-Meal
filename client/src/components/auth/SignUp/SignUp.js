import React from 'react';
import { Link } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import AuthArea from '../AuthArea.js';
import SignUpFormContainer from './SignUpFormContainer.js';


const SignUp = () => (
  <DocumentTitle title="Sign Up - Book A Meal">
    <AuthArea>
      <SignUpFormContainer />
      <p style={{ textAlign: 'center' }}>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </AuthArea>
  </DocumentTitle>
);

export default SignUp;
