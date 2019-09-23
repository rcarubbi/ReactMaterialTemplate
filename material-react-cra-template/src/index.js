import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './App';
import Landing from './pages/Landing';

import * as serviceWorker from './serviceWorker';

import './assets/css/material-dashboard-react.css?v=1.8.0';

const hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path='/landingpage' component={Landing} />
			<Route path='/logon' component={App} />
			<Route path='/profile' component={App} />
			<Route path='/materialkit' component={App} />
			<Route path='/admin' component={App} />
			<Redirect from='/' to='/admin/dashboard' />
		</Switch>
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
