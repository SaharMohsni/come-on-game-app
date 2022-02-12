import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import './App.scss';
import PublicRoutes from './app/routes/PublicRoutes';
import PrivateRoutes from './app/routes/PrivateRoutes';
import { selectSignedInStatus } from './features/selectors/profile.selectors';
function App() {
	const isSignedIn = useSelector(selectSignedInStatus);

	const renderLayout = () => {
		if (isSignedIn && localStorage.getItem('token')) {
			return (
				<Routes>
					<Route path="*" element={<PrivateRoutes />} />
				</Routes>
			);
		}

		return (
			<Routes>
				<Route path="*" element={<PublicRoutes />} />
			</Routes>
		);
	};

	return <div className="app">{renderLayout()}</div>;
}
App.propTypes = {
	/**
     * Current Profile
  */
	profile: PropTypes.object.isRequired
};

export default App;
