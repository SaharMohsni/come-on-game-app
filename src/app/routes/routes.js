import Authentication from '../../pages/authentication';
import GamesList from '../../pages/gamesList';
import Game from '../../pages/game';
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
