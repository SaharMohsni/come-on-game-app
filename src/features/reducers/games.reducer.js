/* eslint-disable no-case-declarations */
/*
 *
 * Games reducer
 *
 */
import produce from 'immer';
import ActionTypes from '../constants/games.constants';

const initialLocal = {
	loading: {
		fetchGamesLoading: false
	},
	errors: {
		fetchGamesErrors: ''
	}
};

export const initialState = {
	local: initialLocal,
	data: {
		gamesList: []
	}
};

/* eslint-disable default-case, no-param-reassign */
const gamesReducer = (state = initialState, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			//Fetch games
			case ActionTypes.FETCH_GAMES.request:
				draft.local.loading.fetchGamesLoading = true;
				draft.local.errors.fetchGamesLoading = '';
				break;
			case ActionTypes.FETCH_GAMES.success:
				draft.local.loading.fetchGamesLoading = false;
				draft.data.gamesList = action.data;
				break;
			case ActionTypes.FETCH_GAMES.failure:
				draft.local.loading.fetchGamesLoading = false;
				draft.local.errors.fetchGamesLoading = action.e.response.data.error;
				break;
		}
	});

export default gamesReducer;
