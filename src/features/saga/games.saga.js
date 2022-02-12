import { takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../services/games.service';
import ActionTypes from '../constants/games.constants';

//Fetch games
export function* fetchGames(action) {
	try {
		const results = yield call(api.fetchGames, action.payload);
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
