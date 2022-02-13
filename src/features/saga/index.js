/**
 * Combine  Sagas  watcher
 */
import { all } from 'redux-saga/effects';
import { fetchGamesWatcher } from './games.saga';
import {
	clearLoginFormErrorsWatcher,
	clearReducerLocalWatcher,
	getPlayerDataFromTokenWatcher,
	loginUserWatcher,
	logoutUserWatcher
} from './profile.saga';

// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([
		loginUserWatcher(),
		logoutUserWatcher(),
		clearLoginFormErrorsWatcher(),
		getPlayerDataFromTokenWatcher(),
		clearReducerLocalWatcher(),
		fetchGamesWatcher()
	]);
}
