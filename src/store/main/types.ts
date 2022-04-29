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

export type MainState = {
  gameStarted: boolean;
  settings: Settings;
  categoriesScore: { [key in QuizType]: { [k: string]: number } };
};
