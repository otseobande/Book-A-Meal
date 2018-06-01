import React, { Component } from 'react';
import logo from '../../../assets/img/logo-white.svg';
import Footer from '../layout/Footer.jsx';
import Header from '../layout/Header.jsx';
import MenuPeepContainer from './MenuPeepContainer.jsx';
import '../../../assets/css/style.css';
import '../../../assets/css/index.css';

class Home extends Component {
  componentDidMount() {
    const letters = document.querySelectorAll('i.z');

    const animateHungry = () => {
      letters.forEach((letter, index) => {
        setTimeout(() => letter.classList.toggle('bounceIn'), index * 250 );
      })
    }

    setInterval(animateHungry, 2500)
  }

  render(){
    return (
      <div>
        <div className="home">
          <Header />
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
                    <i className="z">?</i>
                  </b>
                </span><br />
                Book a meal on the go...
              </span>
            </div>
          </div>
        </div>
        <MenuPeepContainer />
        <Footer />
      </div>
    )
  }
  
}

export default Home;
