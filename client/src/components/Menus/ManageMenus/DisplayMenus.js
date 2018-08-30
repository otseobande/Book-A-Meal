import React from 'react';
import PropTypes from 'prop-types';
import MenuCardContainer from './MenuCard/MenuCardContainer';
import NoMenu from './NoMenu';
import styles from './manage-menus.scss';

const DisplayMenus = ({ menus }) => (
  <div className={styles.menus}>
    {
      menus.length ?
        menus.map(menu => <MenuCardContainer key={menu.id} menu={menu} />) :
        <NoMenu />
    }
  </div>
);

DisplayMenus.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default DisplayMenus;
