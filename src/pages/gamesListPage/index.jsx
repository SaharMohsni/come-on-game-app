import { isEmpty } from 'lodash';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import GamesList from '../../components/gamesList';
import { selectCategoriesList, selectGamesList } from '../../features/selectors/games.selectors';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';

const GameListPage = () => {
	const [ FilterByCategory, setFilterByCategory ] = useState(null);
	const [ filterByGameName, setFilterByGameName ] = useState('');

	const gamesList = useSelector(selectGamesList);
	const categoriesList = useSelector(selectCategoriesList);

	const filterGamesList = () => {
		if (FilterByCategory === null && isEmpty(filterByGameName)) {
			return gamesList;
		}
		if (FilterByCategory === null && !isEmpty(filterByGameName)) {
			return gamesList.filter((game) => game.name.toLowerCase().includes(filterByGameName.toLowerCase()));
		}
		if (FilterByCategory !== null && isEmpty(filterByGameName)) {
			return gamesList.filter((game) => {
				return game.categoryIds.includes(FilterByCategory);
			});
		}
		if (FilterByCategory !== null && !isEmpty(filterByGameName)) {
			return gamesList
				.filter((game) => game.name.toLowerCase().includes(filterByGameName.toLowerCase()))
				.filter((game) => {
					return game.categoryIds.includes(FilterByCategory);
				});
		}
	};

	return (
		<div className="game-list-page-container">
			<GamesPagesHeader setFilterBy={setFilterByGameName} />
			<GamesList
				gamesList={filterGamesList()}
				categoriesList={categoriesList}
				setFilterBy={setFilterByCategory}
			/>
		</div>
	);
};

export default GameListPage;
