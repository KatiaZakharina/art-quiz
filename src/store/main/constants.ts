import { MainState, Themes } from './types';

export const QUESTIONS_NUM = 10;

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

export const imageTypeOffset = { artists: 0, pictures: 120 };
export const categoriesNumber = { artists: 12, pictures: 12 };

const defaultCategoriesScore = {
  artists: Object.fromEntries(artistsCategories.map((category) => [category, 0])),
  pictures: Object.fromEntries(picturesCategories.map((category) => [category, 0])),
};

export const defaultState: MainState = {
  gameStarted: false,
  settings: defaultSettings,
  categoriesScore: defaultCategoriesScore,
};
