import React, { Component } from 'react';
import '../assets/css/style.css';
import '../assets/css/index.css';

const Home = () => (
  <div>
      <div className="home">
    <nav className="">
    <div className="title-area">
      <a href="index.html" className="title">
        <img className="logo" src="img/logo-white.svg" width="30" />
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
    <div className="mask">
      <div className="intro-text">
        <span style={{fontFamily: 'cursive'}} className="hungry">
          <span style={{fontSize: 68}}>
            <b>
              <i className="z">H</i>
              <i className="z">u</i>
              <i className="z">n</i>
              <i className="z">g</i>
              <i className="z">r</i>
              <i className="z">y</i>
              <i className="z">!</i>
              <i className="z">?,</i>
            </b>
          </span><br />
          book a meal on the go...
        </span>
      </div>
    </div>
  </div>
  <div className="content">
    <div className="menu-peak">
      <span>~~  </span><span><b>Peep into today's menu</b></span><span>  ~~</span>
    </div>
    <div className="meals">
      <div className="card">
          <div className="card-img">
            <img src="img/pounded-yam-egusi.jpg" />
          </div>
          <div className="card-body">
            <div className="card-title">Pounded yam and egusi</div>
            <div className="card-description">
              Sautéed chicken strips in a unique blend of basil pesto, Grana Padano and toasted pine nuts served over fusilli pasta with fresh cream drizzle
            </div>
          </div>
          <div className="card-footer">
            <span>
              <b>Price</b>: &#8358;1,500
            </span>
            <div className="card-options">
              <a className="order-btn" href="login.html">Order</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="img/jollof-rice.jpg" />
          </div>
          <div className="card-body">
            <div className="card-title">Jollof rice and chicken</div>
            <div className="card-description">
              Sautéed chicken strips in a unique blend of basil pesto, Grana Padano and toasted pine nuts served over fusilli pasta with fresh cream drizzle
            </div>
          </div>
          <div className="card-footer">
            <span>
              <b>Price</b>: &#8358;1,500
            </span>
            <div className="card-options">
              <a className="order-btn" href="login.html">Order</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="img/fried-rice.jpg" />
          </div>
          <div className="card-body">
            <div className="card-title">Fried rice and chicken</div>
            <div className="card-description">
              Sautéed chicken strips in a unique blend of basil pesto, Grana Padano and toasted pine nuts served over fusilli pasta with fresh cream drizzle
            </div>
          </div>
          <div className="card-footer">
            <span>
              <b>Price</b>: &#8358;1,500
            </span>
            <div className="card-options">
              <a className="order-btn" href="login.html">Order</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-img">
            <img src="img/yam-porridge.jpg" />
          </div>
          <div className="card-body">
            <div className="card-title">Yam porridge</div>
            <div className="card-description">
              Sautéed chicken strips in a unique blend of basil pesto, Grana Padano and toasted pine nuts served over fusilli pasta with fresh cream drizzle
            </div>
          </div>
          <div className="card-footer">
            <span>
              <b>Price</b>: &#8358;1,500
            </span>
            <div className="card-options">
              <a className="order-btn" href="login.html">Order</a>
            </div>
          </div>
        </div>
    </div>
    <script type="text/javascript" src="js/index.js"></script>
  </div>
  <footer>
    &copy; 2018 Book-A-Meal Inc.
  </footer>
  </div>
)

export default Home;
