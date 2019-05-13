import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../src/reducers';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    const { logger } = require('redux-logger');

    middlewares.push(logger);
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;
