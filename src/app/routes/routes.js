import Authentication from "../../pages/authentication/Authentication"
import GamesList from "../../pages/gamesList/GamesList"
export default {
    LOGIN_OR_REGISTER: {
      path: '/',
      component: Authentication,
    },
    GAMES_LIST :{
        path: '/games-list',
      component: GamesList,
    }
  }