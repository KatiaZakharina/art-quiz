import { createAction } from '@reduxjs/toolkit';

export const START_QUIZ = 'START_QUIZ';

export const startQuiz = createAction<void, typeof START_QUIZ>(START_QUIZ);
