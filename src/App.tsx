import React from 'react';
import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './styles/global-style';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
