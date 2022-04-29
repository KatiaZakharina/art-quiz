import { createAction } from '@reduxjs/toolkit';

import { QuizType, Settings } from './types';

export const START_QUIZ = 'START_QUIZ';
export const SET_SETTINGS = 'SWT_SETTINGS';
export const SET_CATEGORY_SCORE = 'SET_CATEGORIES_SCORE';

export const startQuiz = createAction<void, typeof START_QUIZ>(START_QUIZ);
export const setSettings = createAction<Settings, typeof SET_SETTINGS>(SET_SETTINGS);

export const setCategoryScore = createAction<
  { type: QuizType; category: string; score: number },
  typeof SET_CATEGORY_SCORE
>(SET_CATEGORY_SCORE);
