import React from 'react';
import logo from '../../../../assets/img/logo.svg';
import '../../../../assets/css/style.css';
import '../../../../assets/css/auth.css';
import styles from '../auth.scss';

const SignUp = () => (
  <div className={styles['login-area']} style={{ marginTop: '0px' }}>
    <div className="title brand">
      <a href="index.html">
        <img src={logo} alt="book-a-meal" />
        <h1 className={styles.title}>Book-A-Meal</h1>
      </a>
    </div>
    <form action="menu-user.html">
      <label htmlFor="fullname">Full name:
        <input className="card-1" type="text" name="fullname" id="fullname" required />
      </label>

      <label htmlFor="username">Username:
        <input className="card-1" type="text" id="username" name="username" required />
      </label>

      <label htmlFor="email">Email:
        <input className="card-1" type="email" name="email" id="email" required />
      </label>

      <label htmlFor="password">Password:
        <input className="card-1" type="password" id="password" name="password" required />
      </label>

      <label htmlFor="password-confirmation">Confirm password:
        <input className="card-1" type="password" name="password-confirmation" id="password-confirmation" />
      </label>

      <button className="card-1 login-btn" type="submit">Sign Up</button>
    </form>
    <p style={{ textAlign: 'center' }}>Already have an account? <a href="login.html">Login</a></p>
  </div>
);

export default SignUp;
