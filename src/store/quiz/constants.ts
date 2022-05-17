import { CategoryArray, MainState, Themes, TypeScore } from './types';

export const QUESTIONS_NUM = 10;
export const ANSWERS_NUM = 4;

export const imageTypeOffset = { artists: 0, pictures: 120 };
export const categoriesNumber = { artists: 12, pictures: 12 };

export const defaultSettings = { theme: Themes.Dark, answerTime: 15, hasTimer: true, volume: 80 };

export const artistsCategories = [
  'Famous',
  'Russian',
  'Ancient',
  'European',
  'Little-known',
  'Contemporary',
  'Avant-garde',
  'Impressionism',
  'Minimalism',
  'Renaissance',
  'Expressionism',
  'Classicism',
] as const;

export const picturesCategories = [
  'Portrait',
  'Landscape',
  'Impressionism',
  'Expressionism',
  'Avant-garde',
  'Minimalism',
  'Surrealism',
  'Renaissance',
  'Nude',
  'Kitsch',
  'Still life',
  'Interior',
] as const;
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
