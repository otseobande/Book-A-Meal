import React from 'react';
import PropTypes from 'prop-types';
import loadingCube from '../../assets/img/loading-cube.svg';

const Loader = ({ width, message }) => (
  <div style={{ textAlign: 'center' }}>
    <img src={loadingCube} width={width} alt="loading" /><br />
    { message }
  </div>
);

Loader.propTypes = {
  width: PropTypes.number,
  message: PropTypes.string
};

Loader.defaultProps = {
  width: 40,
  message: ''
};
export default Loader;
