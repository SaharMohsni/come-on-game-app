import React, { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import GamesList from '../../components/gamesList';
import { selectCategoriesList, selectGamesList } from '../../features/selectors/games.selectors';
import GamesPagesHeader from '../../shared/components/gamesPagesHeader';

import './game-list-page.scss';
import { fetchCategories, fetchGames } from '../../features/actions/games.actions';

const GameListPage = () => {
	const [ FilterByCategory, setFilterByCategory ] = useState(null);
	const [ filterByGameName, setFilterByGameName ] = useState('');
	const dispatch = useDispatch();
	const gamesList = useSelector(selectGamesList);
	const categoriesList = useSelector(selectCategoriesList);
	useEffect(() => {
		dispatch(fetchGames());
		dispatch(fetchCategories());
	}, []);
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
		<div className="game-list-page-container global-page-css">
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
