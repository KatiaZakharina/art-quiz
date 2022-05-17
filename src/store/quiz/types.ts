import { artistsCategories, defaultModals, picturesCategories } from './constants';

export const enum Themes {
  Light = 'light',
  Dark = 'dark',
}

export type Settings = {
  theme: Themes;
  hasTimer: boolean;
  answerTime: number;
  volume: number;
};
export type QuizType = 'artists' | 'pictures';

type ArtistsCategories = typeof artistsCategories;
type PicturesCategories = typeof picturesCategories;

export type CategoryArray = ArtistsCategories | PicturesCategories;
export type Category = typeof artistsCategories[number] | typeof picturesCategories[number];

type CurrentQuiz = {
  type: QuizType;
  category: Category;
  question: number;
};

export type CategoryScore = { value: number; results: boolean[] };

export type TypeScore = { [key in Category]: { index: number; score: CategoryScore } };

export type ModalType = keyof typeof defaultModals;

export type MainState = {
  currentQuiz: CurrentQuiz | null;
  settings: Settings;
  score: { [type in QuizType]: TypeScore };
  modalsIsVisible: { [key in ModalType]: boolean };
};

//reducers props

export type CategoryScoreProps = { type: QuizType; category: Category; score: number };
export type QuizProps = { type: QuizType; category: Category };
export type modalVisibility = { type: ModalType; visible: boolean };
