import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../services/games.service';
import ActionTypes from '../constants/games.constants';

//Fetch games
export function* fetchGames() {
	try {
		const results = yield call(api.fetchGames);
		yield put({
			type: ActionTypes.FETCH_GAMES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_GAMES.failure, e });
	}
}

export function* fetchGamesWatcher() {
	yield takeLatest(ActionTypes.FETCH_GAMES.request, fetchGames);
}

//Fetch categories
export function* fetchCategories() {
	try {
		const results = yield call(api.fetchCategories);
		yield put({
			type: ActionTypes.FETCH_CATEGORIES.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.FETCH_CATEGORIES.failure, e });
	}
}

export function* fetchCategoriesWatcher() {
	yield takeLatest(ActionTypes.FETCH_CATEGORIES.request, fetchCategories);
}
