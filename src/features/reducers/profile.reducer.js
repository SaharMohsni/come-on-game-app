/* eslint-disable no-case-declarations */
/*
 *
 * Profile reducer
 *
 */
import produce from 'immer';
import { hasToken } from '../../utils/access-token';
import { setUrlPath } from '../../utils/url.helper';
import ActionTypes from '../constants/profile.constants';

const initialLocal = {
	isSignedIn: hasToken(),
	loading: {
		loginLoading: false,
		logoutLoading: false
	},
	errors: {
		loginErrors: '',
		logoutErrors: ''
	}
};

export const initialState = {
	local: initialLocal,
	data: {
		userInfo: {}
	}
};

/* eslint-disable default-case, no-param-reassign */
const profileReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			//Login
			case ActionTypes.LOGIN_USER.request:
				draft.local.loading.loginLoading = true;
				draft.local.errors.loginErrors = '';
				break;
			case ActionTypes.LOGIN_USER.success:
				draft.local.loading.loginLoading = false;
				localStorage.setItem('token', action.data.access_token);
				draft.local.isSignedIn = true;
				draft.data.userInfo = action.data.player;
				window.location = setUrlPath(window.location.href, '/games-list');
				break;
			case ActionTypes.LOGIN_USER.failure:
				draft.local.loading.loginLoading = false;
				draft.local.errors.loginErrors = action.e.response.data.error;
				break;

			//Logout
			// case ActionTypes.LOGOUT_USER.request:
			// 	draft.local.loading.logoutLoading = true;
			// 	draft.local.errors.logoutErrors = {};
			// 	break;
			// case ActionTypes.LOGOUT_USER.success:
			// 	draft.local.loading.logoutLoading = false;
			// 	localStorage.setItem('token', '');
			// 	window.location = setUrlPath(window.location.href, '/');

			// 	draft.local.isSignedIn = false;
			// 	draft.data.userInfo = {};
			// 	break;
			// case ActionTypes.LOGOUT_USER.failure:
			// 	draft.local.loading.logoutLoading = false;
			// 	draft.local.errors.logoutErrors = action.objectErrors;
			// 	break;

			case ActionTypes.CLEAR_LOGIN_FORM_ERRORS.success:
				draft.local.errors.loginErrors = '';
				break;

			//Clear reducer
			// case ActionTypes.CLEAR_REDUCER_LOCAL.success:
			// 	draft.local = initialLocal;
			// 	break;
		}
	});

export default profileReducer;
