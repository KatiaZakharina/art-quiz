import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from 'pages/Home/Home';
import { NoMatch } from 'pages/NoMatch/NoMatch';
import { Settings } from 'pages/Settings/Settings';

import { GlobalStyle } from 'styles/global';
import { lightTheme, darkTheme } from 'styles/theme';
import { useDarkMode } from 'styles/hooks/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'dark' ? lightTheme : darkTheme;
  console.log(theme);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
