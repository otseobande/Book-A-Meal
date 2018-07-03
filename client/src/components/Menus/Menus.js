import React from 'react';
import rightArrow from '../../../assets/img/right-arrow.svg';
import Layout from '../Layout/Layout.js';
import MealDropDown from './MealDropDown.js';
import styles from './menus.scss';

const Menus = () => (
  <Layout>
    <div className={styles.menu}>
      <h2 className={styles.menuHeader}>~ Menus for the day ~</h2>
      <div className={styles.menuBody}>
        <div className={styles.catererName}>Otse's menu</div>
        <h3 className={styles.categoryTitle}>-Breakfast</h3>

        <ul className={styles.mealList}>
          <li>
            <div className={styles.meal}>
              <div className={styles.mealTitle}>
              * Pancake and syrup
                <img className={styles.img} src={rightArrow} alt="right-arrow" />
              </div>
            </div>
          </li>
          <li>
            <MealDropDown />
          </li>
        </ul>

      </div>
    </div>
  </Layout>
);

export default Menus;
