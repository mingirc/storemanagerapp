import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import './style.css';
import ErrorBoundry from './ErrorBoundry';

// To use chrome Redux Dev Tools composeWithDevTools() added.
export const store = createStore(reducers,
    composeWithDevTools())

// ErrorBoundry wraps whole application and throw error if any error occurs all over application.
ReactDOM.render(
    <ErrorBoundry>
        <Provider store={store}>
            <App />
        </Provider>
    </ErrorBoundry>,
    document.querySelector('#root')
);