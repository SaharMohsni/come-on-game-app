import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GameList from '../../pages/gamesListPage';
import Game from '../../pages/gamePage';
import Layout from '../Layout';
import routes from './routes';
import { setUrlPath } from '../../utils/url.helper';
import { decryptToken } from '../../utils/localStorage.helper';
import { getPlayerDataFromToken } from '../../features/actions/profile.actions';

const PrivateRoutes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.location.pathname !== '/games-list') {
			window.location = setUrlPath(window.location.href, '/games-list');
		}
		try {
			const localStorageUserInfoFromToken = decryptToken(localStorage.getItem('token'));
			dispatch(getPlayerDataFromToken(localStorageUserInfoFromToken));
		} catch (error) {
			localStorage.removeItem('token');
		}
	}, []);

	return (
		<Layout>
			<Routes>
				<Route exact path={routes.GAMES_LIST.path} element={<GameList />} />;
				<Route exact path={routes.GAME.path} element={<Game />} />;
			</Routes>
		</Layout>
	);
};

export default PrivateRoutes;
