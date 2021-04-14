/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';
import Header from '../component/Header';

export const PrivateRoute = ({ component: Component, ...rest }) => (
	<div>
		<Header />

		<Route
			{...rest}
			render={(props) =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	</div>
);
