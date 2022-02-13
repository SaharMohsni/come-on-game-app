import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import GamesList from '../../components/gamesList';
import { fetchGames } from '../../features/actions/games.actions';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';

const GameListPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	return (
		<div className="game-list-page-container">
			<GamesPagesHeader />
			<GamesList />
		</div>
	);
};

export default GameListPage;
