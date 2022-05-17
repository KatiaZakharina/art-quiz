import { createReducer } from '@reduxjs/toolkit';
import { changeLanguage } from 'translation/changeLanguage';

import {
  ANSWER_QUESTION,
  END_QUIZ,
  LEAVE_QUIZ,
  NEXT_QUESTION,
  NEXT_QUIZ,
  PLAY_AGAIN,
  SET_CATEGORY_SCORE,
  SET_MODAL_VISIBILITY,
  SET_SETTINGS,
  START_QUIZ,
} from './actions';

import {
  categoriesNumber,
  defaultCategoriesScore,
  defaultModals,
  defaultState,
  QUESTIONS_NUM,
} from './constants';

import { Category, CategoryScoreProps, modalVisibility, QuizProps } from './types';

export const quizReducer = createReducer(defaultState, {
  [START_QUIZ]: (state, { payload: { type, category } }: { payload: QuizProps }) => {
    state.currentQuiz = { type, category, question: 0 };
    state.modalsIsVisible = defaultModals;
    state.score[type][category].score = defaultCategoriesScore;
  },

  [LEAVE_QUIZ]: (state) => {
    state.currentQuiz = null;
  },

  [END_QUIZ]: (state) => {
    state.currentQuiz = null;
  },

  [NEXT_QUIZ]: (state) => {
    if (!state.currentQuiz) return;

    const { type, category } = state.currentQuiz;

    const categoryIndex = state.score[type][category].index;
    const nextCategory = Object.keys(state.score[type])[
      (categoryIndex + 1) % categoriesNumber[type]
    ] as Category;

    state.currentQuiz.question = 0;
    state.currentQuiz.category = nextCategory;
  },

  [PLAY_AGAIN]: (state) => {
    if (!state.currentQuiz) return;
    const { type, category } = state.currentQuiz;

    state.currentQuiz.question = 0;
    state.score[type][category].score.value = 0;
    state.score[type][category].score.results = Array(QUESTIONS_NUM).fill(false);
  },

  [ANSWER_QUESTION]: (state, { payload }: { payload: boolean }) => {
    if (!state.currentQuiz) return;

    const { type, category, question } = state.currentQuiz;
    state.score[type][category].score.value += +payload;
    state.score[type][category].score.results[question] = payload;
  },

  [NEXT_QUESTION]: (state) => {
    if (!state.currentQuiz) return;
    if (state.currentQuiz.question < QUESTIONS_NUM) state.currentQuiz.question++;
  },

  [SET_SETTINGS]: (state, { payload }) => {
    changeLanguage(payload.language);
    state.settings = payload;
  },

  [SET_CATEGORY_SCORE]: (
    state,
    { payload: { type, category, score } }: { payload: CategoryScoreProps }
  ) => {
    state.score[type][category].score.value = score;
  },

  [SET_MODAL_VISIBILITY]: (state, { payload: { type, visible } }: { payload: modalVisibility }) => {
    state.modalsIsVisible[type] = visible;
  },
});
