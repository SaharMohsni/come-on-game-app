import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GameList from '../../pages/gamesList/GamesList';
import Game from '../../pages/game/Game';
import Layout from '../Layout';
import routes from './routes';
import { setUrlPath } from '../../utils/url.helper';

const PrivateRoutes = () => {
	useEffect(() => {
		if (window.location.pathname !== '/games-list') {
			window.location = setUrlPath(window.location.href, '/games-list');
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
