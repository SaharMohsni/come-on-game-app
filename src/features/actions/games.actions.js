/**
 *
 * Games action 
 *
 */
import { action } from 'typesafe-actions';
import ActionTypes from '../constants/games.constants';

export const fetchGames = () => {
	return action(ActionTypes.FETCH_GAMES.request);
};
