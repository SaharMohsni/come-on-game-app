import axios from 'axios';
import { requestHeader, requestHeaderWithoutToken } from '../../utils/requestHeader';
import URL from '../constants/service.constants';

export const loginUser = async (body) => {
	const result = await axios.post(URL.baseApiUrl() + URL.auth.loginUser, { ...body }, requestHeaderWithoutToken);
	return result.data;
};

export const logoutUser = async (body) => {
	const result = await axios.post(URL.baseApiUrl() + URL.auth.logoutUser, {
		...body
	});
	return result.data;
};
export const getPlayerDataFromToken = async (body) => {
	const result = await axios.post(URL.baseApiUrl() + URL.player.getConnectedPlayer, { ...body }, requestHeader({}));
	return result.data;
};
