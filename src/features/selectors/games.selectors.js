/**
 * Products selectors
 */
import { createSelector } from 'reselect';

export const selectGamesList = createSelector((state) => state.games, (games) => games.data.gamesList);
export const selectCategoriesList = createSelector((state) => state.games, (games) => games.data.categoriesList);
