import React from 'react';
import ReactDOM from 'react-dom';
//import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider, configureApi } from 'react-reqq-lite';

import reducers from './reducers';

import './index.css';
import App from './App';

//const store = createStore(reducers, compose(applyMiddleware(thunk)));
export const store = configureApi({
	endpoint: 'http://localhost:5000',
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
