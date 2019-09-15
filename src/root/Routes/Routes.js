import React from 'react';
import { Switch } from 'react-router-dom';

import AdminPage from '../../pages/AdminPage';
import CustomRoute from '../CustomRoute';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/HomePage/Login';

const routes = [
  { component: HomePage, exact: true, path: '/' },
  {
    component: AdminPage,
    exact: true,
    options: {
      fallbackComponent: LoginPage,
    },
    path: '/admin',
  },
];

export function Routes() {
  return (
    <Switch>
      {routes.map(route => (
        <CustomRoute {...route} key={route.path} />
      ))}
    </Switch>
  );
}

export default Routes;
