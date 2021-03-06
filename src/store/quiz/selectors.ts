import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'store/store';
import { imageTypeOffset, QUESTIONS_NUM } from './constants';
import { ModalType } from './types';

export const selectCurrentQuiz = (state: RootState) => state.quiz.currentQuiz!;

export const selectCurrentScore = (state: RootState) => {
  const { type, category } = selectCurrentQuiz(state);
  return state.quiz.score[type][category].score;
};

export const selectCurrentCategory = (state: RootState) => {
  const { type, category } = selectCurrentQuiz(state);
  return state.quiz.score[type][category];
};

export const selectCurrentCorrectNum = createSelector(
  [selectCurrentQuiz, selectCurrentCategory],
  ({ question, type }, { index }) => index * QUESTIONS_NUM + question + imageTypeOffset[type]
);

const selectModalsVisibility = (state: RootState) => state.quiz.modalsIsVisible;
export const selectVisibleModalType = createSelector(
  [selectModalsVisibility],
  (modals) => Object.entries(modals).filter((modal) => modal[1])[0]?.[0] as ModalType
);

export const selectSettings = (state: RootState) => state.quiz.settings;
