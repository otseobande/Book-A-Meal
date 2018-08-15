import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router';

const GuardedRoute = ({
  component: Component,
  type,
  loggedIn,
  ...otherProps
}) => {
  const routeIsForGuests = type === 'guest';

  const redirectTo = routeIsForGuests ? '/' : '/login';
  const permitRoute = routeIsForGuests ? !loggedIn : loggedIn;

  return (
    <Route
      {...otherProps}
      component={props => (
        permitRoute
        ? <Component {...props} />
        : <Redirect to={{
          pathname: redirectTo,
          state: { from: props.location.pathname }
        }}
        />
      )
    }
    />
  );
};


GuardedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  type: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])).isRequired,
  loggedIn: PropTypes.bool.isRequired
};

GuardedRoute.defaultProps = {
  type: ''
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  location: state.router.location
});

export default connect(mapStateToProps)(GuardedRoute);
