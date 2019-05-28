import React from 'react';
import { useSelector } from 'react-redux';

import Dashboard from './Dashboard';
import Login from './Login';

export function HomePage() {
    const isLogged = useSelector(state => state.user.isLogged);

    if (isLogged) {
        return <Dashboard />;
    }

    return <Login />;
}

export default HomePage;
