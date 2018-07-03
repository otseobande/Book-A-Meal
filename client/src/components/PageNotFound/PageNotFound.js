import React from 'react';
import Overdrive from 'react-overdrive';
import styles from './pagenotfound.scss';
import Layout from '../Layout/Layout.js';

export default () => (
  <Layout>
    <Overdrive id="page">
      <div className={styles.background}>
        <div className={styles.notFound}>
          404<br />
          Page not found
        </div>
      </div>
    </Overdrive>
  </Layout>
);
