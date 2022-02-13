import React from 'react';
import { loadGame } from '../../features/services/games.service';
// import './example.scss'
const GamePage = () => {
	const game = loadGame('starburst');
	console.log('🚀 ~ file: index.jsx ~ line 7 ~ GamePage ~ game', game);
	return (
		<div className="game-page global-page-css  global-flex-h-center-v-center">
			<div id="game-launch" />
		</div>
	);
};

export default GamePage;
