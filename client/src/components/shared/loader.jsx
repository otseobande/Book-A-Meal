import React from 'react';
import loadingCube from '../../../assets/img/loading-cube.svg';

const Loader = () => (
  <div style={{ textAlign: 'center' }}>
    <img src={loadingCube} width={40} alt="loading" /><br />
    loading...
  </div>
);

export default Loader;
