import React from 'react';
import PropTypes from 'prop-types';
import prevIcon from '../../../assets/img/prev.svg';
import nextIcon from '../../../assets/img/next.svg';
import styles from './menus.scss';

const MenuNavigator = props => (
  <div className={styles.navigators}>
    {
      props.prevExists() &&
      <button onClick={props.goToPrevMenu}>
        <img src={prevIcon} alt="prev" />
        Prev
      </button>
    }
    {
      props.nextExists() &&
      <button onClick={props.goToNextMenu} className={styles.right}>
        Next
        <img src={nextIcon} alt="next" />
      </button>
    }
  </div>
);

MenuNavigator.propTypes = {
  goToNextMenu: PropTypes.func.isRequired,
  goToPrevMenu: PropTypes.func.isRequired,
  prevExists: PropTypes.func.isRequired,
  nextExists: PropTypes.func.isRequired
};

export default MenuNavigator;
