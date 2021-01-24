import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      html {
        font-family: sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }
      body {
        margin: 0;
        font-family: 'Roboto', 'HelveticaNeue',
          'Helvetica Neue', sans-serif;
        background-color: black;
        color: white;
      }
    `}
  />
);

export default GlobalStyle;
