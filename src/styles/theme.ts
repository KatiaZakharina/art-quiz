import { Themes } from 'store/quiz/types';

export type ThemeType = {
  name: Themes;
  colors: {
    main: string;
    inverse_main: string;
    secondary: string;
  };
  background: string;
};

export type Colors = keyof ThemeType['colors'];

export const darkTheme: ThemeType = {
  name: Themes.Dark,
  colors: {
    main: '#010101',
    inverse_main: '#FFF',
    secondary: '#FFBCA2',
  },
  background: 'bg_dark.jpg',
};

export const lightTheme: ThemeType = {
  name: Themes.Light,
  colors: {
    main: '#FFF',
    inverse_main: '#010101',
    secondary: '#8D86C9',
  },
  background: 'bg_light.jpg',
};
