import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { selectUserInfo } from '../../features/selectors/profile.selectors';
import { useDispatch } from 'react-redux';
import { fetchGames } from '../../features/actions/games.actions';

import './game-list-container.scss';

const GameList = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGames());
	}, []);

	return <div className="game-list-container  global-flex-h-center-v-center">game List</div>;
};

export default GameList;
