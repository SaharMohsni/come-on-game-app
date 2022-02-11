import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Authentication from '../../pages/authentication/Authentication'
import {
	getCurrentQueryStringParameter,
	setUrlPath,
	// addOrSetQueryStringParameter,
	// getPath
} from '../../utils/url.helper';
import routes from './routes';

const PublicRoutes = () => {
	let redirectUrl = getCurrentQueryStringParameter('redirectUrl');
	if ((redirectUrl == null || redirectUrl == undefined) && window.location.pathname !== routes.LOGIN_OR_REGISTER.path)
		redirectUrl = window.location.href;
	else if (
		(redirectUrl == null || redirectUrl == undefined) &&
		window.location.pathname === routes.LOGIN_OR_REGISTER.path
	)
		redirectUrl = setUrlPath(window.location.href, '/');
	// const loginUrl = setUrlPath(window.location.href, routes.LOGIN_OR_REGISTER.path);
	// const fallbackLoginUrl = getPath(addOrSetQueryStringParameter(loginUrl, 'redirectUrl', redirectUrl));
	return (
		<Routes>
			<Route exact path={routes.LOGIN_OR_REGISTER.path} element={<Authentication/>} />
			{/* <Navigate exact to={fallbackLoginUrl} preserveQueryString /> */}
		</Routes>
	);
};

export default PublicRoutes;
