import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/global-style';
import theme from './theme/theme';
import { AppRouter } from './routers/app-router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
