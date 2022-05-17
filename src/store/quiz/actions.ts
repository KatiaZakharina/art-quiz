import { createAction } from '@reduxjs/toolkit';

import { Category, CategoryScoreProps, modalVisibility, QuizType, Settings } from './types';

export const START_QUIZ = 'START_QUIZ';
export const LEAVE_QUIZ = 'LEAVE_QUIZ';
export const END_QUIZ = 'END_QUIZ';
export const NEXT_QUIZ = 'NEXT_QUIZ';
export const PLAY_AGAIN = 'PLAY_AGAIN';

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const NEXT_QUESTION = 'NEXT_QUESTION';

export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';

export const SET_SETTINGS = 'SWT_SETTINGS';
export const SET_CATEGORY_SCORE = 'SET_CATEGORIES_SCORE';

// actions

export const startQuiz = createAction<{ type: QuizType; category: Category }, typeof START_QUIZ>(
  START_QUIZ
);
export const leaveQuiz = createAction<void, typeof LEAVE_QUIZ>(LEAVE_QUIZ);
export const endQuiz = createAction<void, typeof END_QUIZ>(END_QUIZ);
export const playAgain = createAction<void, typeof PLAY_AGAIN>(PLAY_AGAIN);
export const nextQuiz = createAction<void, typeof NEXT_QUIZ>(NEXT_QUIZ);

export const answerQuestion = createAction<boolean, typeof ANSWER_QUESTION>(ANSWER_QUESTION);
export const getNextQuestion = createAction<void, typeof NEXT_QUESTION>(NEXT_QUESTION);

export const setModalVisibility = createAction<modalVisibility, typeof SET_MODAL_VISIBILITY>(
  SET_MODAL_VISIBILITY
);

export const setSettings = createAction<Settings, typeof SET_SETTINGS>(SET_SETTINGS);

export const setCategoryScore = createAction<CategoryScoreProps, typeof SET_CATEGORY_SCORE>(
  SET_CATEGORY_SCORE
);
