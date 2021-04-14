import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import { PrivateRoute } from './PrivateRoute';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login} />
			<Route exact path='/signup' component={SignUp} />
			<PrivateRoute exact path='/tasks' component={Home} />
			<PrivateRoute exact path='/tasks/profile' component={Profile} />
			<PrivateRoute path='*' component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
