/**
 *
 * Root reducer
 *
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../utils/history';
import profileReducer from './profile.reducer';

const createReducer = (injectedReducers = {}) => {
	const rootReducer = combineReducers({
      profile: profileReducer,
		router: connectRouter(history),
		...injectedReducers
	});

	return rootReducer;
};
export default createReducer;
