import Authentication from '../../pages/authentication';
import GamesList from '../../pages/gamesListPage';
import Game from '../../pages/gamePage';
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
		path: '/games-list/:id',
		linkPath: (gameId) => `/games-list/${gameId}`,
		component: Game
	}
};
