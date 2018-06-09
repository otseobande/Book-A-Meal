import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import styles from './welcome.scss';

/**
 * @class Welcome
 */
class Welcome extends Component {
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
      <div className={styles.welcome}>
        <Header />
        <div className={styles.mask}>
          <div className={styles.intro}>
            <span className={styles.text}>
              <b>
                {
                  ('Hungry!?').split('').map((letter, index) => (
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
              <br />
              Book a meal on the go...
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
