import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import DocumentTitle from 'react-document-title';

const TitledRoute = props => (
  <DocumentTitle title={`${props.title} - Book-A-Meal`}>
    <Route {...props} />
  </DocumentTitle>
);

TitledRoute.propTypes = {
  title: PropTypes.string
};

TitledRoute.defaultProps = {
  title: ''
};

export default TitledRoute;
