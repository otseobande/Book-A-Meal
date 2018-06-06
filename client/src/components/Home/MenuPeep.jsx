import React from 'react';
import PropTypes from 'prop-types';
import DisplayMeals from './DisplayMeals.jsx';
import LoadingMeals from './LoadingMeals.jsx';

const MenuPeep = ({ loading, meals }) => (
  <div className="content">
    <div className="menu-peak">
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
