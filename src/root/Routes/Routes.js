import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../../pages/HomePage';

const routes = [{ component: HomePage, exact: true, path: '/' }];

const Routes = () => (
    <Switch>
        {routes.map(route => (
            <Route {...route} key={route.path} />
        ))}
    </Switch>
);

export default Routes;
