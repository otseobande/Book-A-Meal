import React from 'react';
import PropTypes from 'prop-types';
import loadingCube from '../../../assets/img/loading-cube.svg';

const Loader = ({ width }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={loadingCube} width={width} alt="loading" /><br />
    loading...
  </div>
);

Loader.propTypes = {
  width: PropTypes.number
};

Loader.defaultProps = {
  width: 40
};
export default Loader;
