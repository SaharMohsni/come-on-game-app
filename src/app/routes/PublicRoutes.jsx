import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Authentication from '../../pages/authentication/Authentication';
import routes from './routes';
import { setUrlPath } from '../../utils/url.helper';

const PublicRoutes = () => {
	const renderRoutes = () => {
		if (window.location.pathname !== '/') {
			window.location = setUrlPath(window.location.href, '/');
		}
		return <Route exact path={routes.LOGIN_OR_REGISTER.path} element={<Authentication />} />;
	};
	return (
		<Layout>
			<Routes>{renderRoutes()}</Routes>
		</Layout>
	);
};

export default PublicRoutes;
