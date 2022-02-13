import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import Authentication from '../../pages/authentication';
import routes from './routes';
import { setUrlPath } from '../../utils/url.helper';

const PublicRoutes = () => {
	useEffect(() => {
		if (window.location.pathname !== '/') {
			window.location = setUrlPath(window.location.href, '/');
		}
	}, []);

	return (
		<Layout>
			<Routes>
				<Route exact path={routes.LOGIN_OR_REGISTER.path} element={<Authentication />} />;
			</Routes>
		</Layout>
	);
};

export default PublicRoutes;
