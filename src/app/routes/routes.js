import Authentication from '../../pages/authentication';
import GamesList from '../../pages/gamesListPage';
import GamePage from '../../pages/gamePage';
export default {
	LOGIN_OR_REGISTER: {
		path: '/',
		component: Authentication
	},
	GAMES_LIST: {
		path: '/games-list',
		component: GamesList
	},
	GAME: {
		path: '/games-list/:name',
		linkPath: (name) => `/games-list/${name}`,
		component: GamePage
	}
};
