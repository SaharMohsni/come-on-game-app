/*
 *
 * Games constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga';

const root = 'app/Games/';
const FETCH_GAMES = generateActionTypes(root, 'FETCH_GAMES');
const FETCH_CATEGORIES = generateActionTypes(root, 'FETCH_CATEGORIES');

export default {
	FETCH_GAMES,
	FETCH_CATEGORIES
};
