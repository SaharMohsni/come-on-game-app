/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesList, selectGamesList } from '../../features/selectors/games.selectors';
import GameCard from './gameCard';
import './games-list.scss';

const GamesList = () => {
	const [ filterBy, setFilterBy ] = useState(null);

	const gamesList = useSelector(selectGamesList);
	const categoriesList = useSelector(selectCategoriesList);
	const filterGamesList = () => {
		if (filterBy === null) {
			return gamesList;
		}
		return gamesList.filter((game) => {
			return game.categoryIds.includes(filterBy);
		});
	};

	// Render games
	const renderGames = () => {
		return filterGamesList().map((game) => {
			return <GameCard game={game} key={Math.random()} />;
		});
	};
	// Filter by category function
	const handleFilterByCategory = (categoryId) => {
		setFilterBy(categoryId);
	};

	// Render categories
	const renderCategories = () => {
		return categoriesList.map((category) => {
			return (
				<div
					className="games-list__filter-section__content__filter-element"
					key={category.id}
					onClick={() => handleFilterByCategory(category.id)}
				>
					{category.name}
				</div>
			);
		});
	};

	return (
		<div className="games-list">
			<div className="games-list__data">
				<h1 className="games-list__data__title">Games</h1>
				<div className="games-list__data__content global-flex-column-h-start-v-start">{renderGames()}</div>
			</div>
			<div className="games-list__filter-section">
				<h1 className="games-list__filter-section__title">Categories</h1>
				<div className="games-list__filter-section__content">{renderCategories()}</div>
			</div>
		</div>
	);
};

export default GamesList;
