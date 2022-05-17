import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import { lightTheme, darkTheme } from 'styles/theme';
import { Themes } from 'store/quiz/types';
import { useAppSelector } from 'store/hooks';
import { Categories, Home, NoMatch, Settings, Quiz } from 'pages';

function App() {
  const theme = useAppSelector((state) => state.quiz.settings.theme);

  return (
    <ThemeProvider theme={theme === Themes.Light ? lightTheme : darkTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/artists" element={<Categories type="artists" />} />
          <Route path="/pictures" element={<Categories type="pictures" />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
