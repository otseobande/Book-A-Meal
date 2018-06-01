import React from 'react';
import logo from '../../../assets/img/logo-white.svg';

const Header = () => (
  <nav className="">
    <div className="title-area">
      <a href="index.html" className="title">
        <img className="logo" src={logo} width="30" />
        <span className="app-name">Book-A-Meal</span>
      </a>
      <button id="nav-toggle" href="#">&#9776;</button>
    </div>
    <div className="nav-menus">
      <ul className="nav-list">
        <li><a href="meals-caterer.html">Caterers</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="signup.html">Sign Up</a></li>
      </ul>
    </div>
  </nav>
);

export default Header;