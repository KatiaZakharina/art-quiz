import { CategoryArray, Languages, MainState, Themes, TypeScore } from './types';
import categories from 'model/categories.json';

export const QUESTIONS_NUM = 10;
export const ANSWERS_NUM = 4;

export const imageTypeOffset = { artists: 0, pictures: 120 };
export const categoriesNumber = { artists: 12, pictures: 12 };

export const defaultSettings = {
  theme: Themes.Dark,
  hasTimer: true,
  volume: 80,
  language: Languages.RU,
};

export const artistsCategories = categories.artists;
export const picturesCategories = categories.pictures;

export const defaultCategoriesScore = { value: 0, results: Array(QUESTIONS_NUM).fill(false) };

function getDefaultCategoriesScore(categories: CategoryArray) {
  return Object.fromEntries(
    categories.map((category, idx) => [category, { index: idx, score: defaultCategoriesScore }])
  ) as TypeScore;
}

const defaultScore = {
  artists: getDefaultCategoriesScore(artistsCategories),
  pictures: getDefaultCategoriesScore(picturesCategories),
};

export const defaultModals = {
  answer: false,
  finalResult: false,
  quit: false,
};

export const defaultState: MainState = {
  settings: defaultSettings,
  score: defaultScore,
  currentQuiz: null,
  modalsIsVisible: defaultModals,
};
