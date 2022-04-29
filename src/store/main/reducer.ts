import { createReducer } from '@reduxjs/toolkit';

import { SET_CATEGORY_SCORE, SET_SETTINGS, START_QUIZ } from './actions';
import { defaultState } from './constants';
import { QuizType } from './types';

export const mainReducer = createReducer(defaultState, {
  [START_QUIZ]: (state) => {
    state.gameStarted = true;
  },
  [SET_SETTINGS]: (state, { payload }) => {
    state.settings = payload;
  },
  [SET_CATEGORY_SCORE]: (state, { payload: { type, category, score } }) => {
    state.categoriesScore[type as QuizType][category] = score;
  },
});
