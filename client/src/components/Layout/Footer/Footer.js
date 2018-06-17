import React from 'react';
import styles from './style.scss';

const Footer = () => (
  <footer className={styles.footer}>
    &copy; {new Date().getFullYear()} Book-A-Meal.
  </footer>
);

export default Footer;
