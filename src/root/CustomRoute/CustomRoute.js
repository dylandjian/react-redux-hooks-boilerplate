import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

export const CustomRoute = ({ options = {}, ...rest }) => {
  const isLogged = useSelector(state => state.user.isLogged);

  if (options.fallbackComponent && !isLogged) {
    return <Route {...rest} component={options.fallbackComponent} />;
  }

  return <Route {...rest} />;
};

CustomRoute.propTypes = {
  options: PropTypes.shape({
    fallbackComponent: PropTypes.func.isRequired,
  }),
};

export default CustomRoute;
