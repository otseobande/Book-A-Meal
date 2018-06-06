import React from 'react';
import PropTypes from 'prop-types';
import DisplayMeals from './DisplayMeals.jsx';
import LoadingMeals from './LoadingMeals.jsx';
import styles from './menupeep.scss';

const MenuPeep = ({ loading, meals }) => (
  <div className={styles.peep}>
    <div className={styles.heading}>
      <span>~~ <b>Peep into todays menus</b> ~~</span>
    </div>
    { loading ? <LoadingMeals /> : <DisplayMeals meals={meals} /> }
  </div>
);

MenuPeep.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired
};

export default MenuPeep;
