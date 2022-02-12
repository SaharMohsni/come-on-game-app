/*
 *
 * Games constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Games/';
const FETCH_GAMES = generateActionTypes(root, 'FETCH_GAMES');

export default {
	FETCH_GAMES
};
