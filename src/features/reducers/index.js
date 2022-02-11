import {combineReducers} from 'redux'
import gamesReducer from './games.reducer'


const rootReducer = combineReducers({
   contacts: gamesReducer ,
})

export default rootReducer