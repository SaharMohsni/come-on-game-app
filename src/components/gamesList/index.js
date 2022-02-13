/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import { selectGamesList } from '../../features/selectors/games.selectors';
import GameCard from './gameCard';
import './games-list.scss';
const GamesList = () => {
	const gamesList = useSelector(selectGamesList);
	const renderGames = () => {
		return gamesList.map((game) => {
			return <GameCard game={game} key={Math.random()} />;
		});
	};

	return (
		<div className="games-list">
			<h1 className="games-list__title">Games</h1>
			<div className="games-list__content global-flex-column-h-start-v-start">{renderGames()}</div>
		</div>
	);
};

export default GamesList;
