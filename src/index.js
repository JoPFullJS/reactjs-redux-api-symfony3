import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes/index';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	, document.getElementById('root'));
