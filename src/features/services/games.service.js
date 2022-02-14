import axios from 'axios';
import { requestHeader } from '../../utils/requestHeader';
import URL from '../constants/service.constants';

export const fetchGames = async () => {
	const result = await axios.get(URL.baseApiUrl() + URL.games.fetchGames(), requestHeader({}));
	return result.data;
};

export const fetchCategories = async () => {
	const result = await axios.get(URL.baseApiUrl() + URL.games.fetchCategories(), requestHeader({}));
	return result.data;
};
