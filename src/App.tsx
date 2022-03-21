import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home/Home';
import { NoMatch } from './pages/NoMatch/NoMatch';

import { GlobalStyle } from './styles/global';
import { lightTheme, darkTheme } from './styles/theme';
import { useDarkMode } from './styles/useDarkMode';

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
