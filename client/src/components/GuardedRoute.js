import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Redirect, Route } from 'react-router';

const GuardedRoute = ({
  component: Component,
  loggedIn,
  allow,
  user,
  location,
  ...otherProps
}) => {
  const routeIsForGuests = allow === 'guest';

  const redirectTo = routeIsForGuests ? '/' : '/login';
  const permitRoute = routeIsForGuests ? !loggedIn : loggedIn;

  if (allow !== user.role && !routeIsForGuests) {
    toast.error('You are not authorized to view that page', 5000);

    return (
      <Redirect
        to={{
          pathname: '/',
          state: { from: location.pathname }
        }}
      />
    );
  }

  return (
    <Route
      {...otherProps}
      component={props => (
        permitRoute ?
          <Component {...props} /> :
          <Redirect
            to={{
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
  allow: PropTypes.string,
  user: PropTypes.objectOf(PropTypes.shape({
    role: PropTypes.string
  })),
  loggedIn: PropTypes.bool.isRequired
};

GuardedRoute.defaultProps = {
  type: '',
  allow: 'guest',
  user: { role: 'guest' }
};

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  user: state.auth.user,
  location: state.router.location
});

export default connect(mapStateToProps)(GuardedRoute);
