import React from 'react';
import styles from './pagenotfound.scss';
import Layout from '../Layout/Layout.js';

export default () => (
  <Layout>
    <div className={styles.background}>
      <div className={styles.notFound}>
          404<br />
          Page not found
      </div>
    </div>
  </Layout>
);
