/**
 * Products selectors
 */
import { createSelector } from 'reselect';

export const selectGamesList = createSelector((state) => state.games, (games) => games.data.gamesList);
