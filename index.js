import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './src/root/App';
import store from './config/store';

import './config/initializers/moment';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
