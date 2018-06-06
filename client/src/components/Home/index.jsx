import React, { Component } from 'react';
import Footer from '../layout/Footer.jsx';
import Header from '../layout/Header.jsx';
import MenuPeepContainer from './MenuPeepContainer.jsx';
import styles from './home.scss';
import '../../../assets/css/style.css';
import '../../../assets/css/index.css';

/**
 * @class Home
 */
class Home extends Component {
  /**
   * @returns {undefined}
   */
  componentDidMount() {
    const animateHungry = () => {
      this.hungryElements.forEach((letterElm, index) => {
        setTimeout(() => letterElm.classList.toggle(styles.bounceIn), index * 250);
      });
    };
    setInterval(animateHungry, 2500);
  }

  hungryElements = [];

  /**
   * @returns {JSX} - React JSX
   */
  render() {
    return (
      <div>
        <div className="home">
          <Header />
          <div className="mask">
            <div className="intro-text">
              <span style={{ fontFamily: 'cursive' }} className="hungry">
                <span style={{ fontSize: 68 }}>
                  <b>
                    {
                      ('Hungry').split('').map((letter, index) => (
                        <i
                          key={letter}
                          ref={elm => this.hungryElements[index] = elm}
                          className={styles.hungry}
                        >
                          {letter}
                        </i>
                      ))
                    }
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
    );
  }
}

export default Home;
