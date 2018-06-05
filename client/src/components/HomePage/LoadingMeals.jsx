import React from 'react';
import loadingCube from '../../../assets/img/loading-cube.svg';

const LoadingMeals = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={loadingCube} width={80} alt="loading" /><br />
    loading meals...
  </div>
);

export default LoadingMeals;
