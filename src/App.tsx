import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global-style';
import theme from './theme/theme';
import { AppRouter } from './routers/app-router';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
