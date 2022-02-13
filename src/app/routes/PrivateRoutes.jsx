import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import GameList from '../../pages/gamesListPage';
import GamePage from '../../pages/gamePage';
import Layout from '../Layout';
import routes from './routes';
import { setUrlPath } from '../../utils/url.helper';
import { decryptToken } from '../../utils/localStorage.helper';
import { getPlayerDataFromToken } from '../../features/actions/profile.actions';
import { fetchCategories, fetchGames } from '../../features/actions/games.actions';

const PrivateRoutes = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (window.location.pathname !== routes.GAMES_LIST.path) {
			window.location = setUrlPath(window.location.href, routes.GAMES_LIST.path);
		}
		try {
			const localStorageUserInfoFromToken = decryptToken(localStorage.getItem('token'));
			dispatch(getPlayerDataFromToken(localStorageUserInfoFromToken));
		} catch (error) {
			localStorage.removeItem('token');
		}
		dispatch(fetchGames());
		dispatch(fetchCategories());
	}, []);

	return (
		<Layout>
			<Routes>
				<Route exact path={routes.GAMES_LIST.path} element={<GameList />} />;
				<Route exact path={routes.GAME.path} element={<GamePage />} />;
			</Routes>
		</Layout>
	);
};

export default PrivateRoutes;
