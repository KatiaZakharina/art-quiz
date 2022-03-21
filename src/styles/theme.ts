export type ThemeType = {
  name: string;
  colors: {
    main: string;
    inverse_main: string;
    secondary: string;
  };
  background: string;
};

export type Colors = keyof ThemeType['colors'];

export const darkTheme: ThemeType = {
  name: 'dark',
  colors: {
    main: '#010101',
    inverse_main: '#FFF',
    secondary: '#FFBCA2',
  },
  background: 'bg_dark.jpg',
};

export const lightTheme: ThemeType = {
  name: 'light',
  colors: {
    main: '#FFF',
    inverse_main: '#010101',
    secondary: '#8D86C9',
  },
  background: 'bg_light.jpg',
};
