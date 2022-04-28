import { createReducer } from '@reduxjs/toolkit';

import { MainState } from './types';
import { START_QUIZ } from './actions';

const defaultState: MainState = { gameStarted: false };

export const mainReducer = createReducer(defaultState, {
  [START_QUIZ]: (state) => {
    state.gameStarted = true;
  },
});
