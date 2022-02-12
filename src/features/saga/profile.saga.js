import { takeEvery, takeLatest, put, call } from 'redux-saga/effects';
import * as api from '../services/auth.service';
import ActionTypes from '../constants/profile.constants';

//login
export function* loginUser(action) {
	try {
		const results = yield call(api.loginUser, action.payload);
		yield put({
			type: ActionTypes.LOGIN_USER.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.LOGIN_USER.failure, e });
	}
}

export function* loginUserWatcher() {
	yield takeLatest(ActionTypes.LOGIN_USER.request, loginUser);
}

//logout
export function* logoutUser() {
	try {
		const results = yield call(api.logoutUser);
		yield put({
			type: ActionTypes.LOGOUT_USER.success,
			data: results
		});
	} catch (e) {
		yield put({ type: ActionTypes.LOGIN_USER.failure, e });
	}
}

export function* logoutUserWatcher() {
	yield takeLatest(ActionTypes.LOGOUT_USER.request, logoutUser);
}

//Clear Login form Errors
export function* clearLoginFormErrors(action) {
	try {
		yield put({
			type: ActionTypes.CLEAR_LOGIN_FORM_ERRORS.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.CLEAR_LOGIN_FORM_ERRORS.failure, e });
	}
}

export function* clearLoginFormErrorsWatcher() {
	yield takeEvery(ActionTypes.CLEAR_LOGIN_FORM_ERRORS.request, clearLoginFormErrors);
}

//Clear reducer local
export function* clearReducerLocal(action) {
	try {
		yield put({
			type: ActionTypes.CLEAR_REDUCER_LOCAL.success,
			payload: action.payload
		});
	} catch (e) {
		yield put({ type: ActionTypes.CLEAR_REDUCER_LOCAL.failure, e });
	}
}

export function* clearReducerLocalWatcher() {
	yield takeEvery(ActionTypes.CLEAR_REDUCER_LOCAL.request, clearReducerLocal);
}
