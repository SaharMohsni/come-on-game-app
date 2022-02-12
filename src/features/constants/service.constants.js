/**
 *
 * Services constants : URL
 *
 */

const URL = {
	baseApiUrl: () => 'http://localhost:3001',
	auth: {
		loginUser: '/login',
		logoutUser: '/logout'
	},
	games: {
		fetchGames: () => `/games`
	}
};
export default URL;
