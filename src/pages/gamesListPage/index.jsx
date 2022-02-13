import React from 'react';

import GamesList from '../../components/gamesList';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';

const GameListPage = () => {
	return (
		<div className="game-list-page-container">
			<GamesPagesHeader />
			<GamesList />
		</div>
	);
};

export default GameListPage;
