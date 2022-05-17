import { combineReducers } from '@reduxjs/toolkit';

import { quizReducer } from 'store/quiz/reducer';

export const rootReducer = combineReducers({
  quiz: quizReducer,
});
