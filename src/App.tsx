import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/globalStyle';
import theme from './theme/theme';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';

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
