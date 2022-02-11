import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import { UserContext } from './app/context';
import PublicRoutes from './app/routes/PublicRoutes';
import PrivateRoutes from './app/routes/PrivateRoutes';
function App({ profile }) {
	const { local: { isSignedIn }, data: { userInfo } } = profile;
	const renderLayout = () => {
		if (isSignedIn && localStorage.getItem('token')) {
			return (
				<Routes>
					<Route
						path="/games-list"
						render={() => (
							<UserContext.Provider
								value={{
									userInfo
								}}
							>
								<CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
								<PrivateRoutes profile={profile} />
							</UserContext.Provider>
						)}
					/>
				</Routes>
			);
		}
		return (
			<Routes>
				<Route  path="/" element={<PublicRoutes/>} />
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
