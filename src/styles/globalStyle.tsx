import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      // Font Family
      @font-face {
        font-family: 'Segoe UI Historic';
        src: url('./fonts/Segoe-ui-historic.ttf') format('truetype');
      }

      @font-face {
        font-family: 'SFProDisplay';
        src: url('./fonts/SFProDisplay-Regular.ttf') format('truetype');
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial,
          sans-serif;
        background-color: #f0f2f5;
        color: #1c1e21;
      }

      img {
        max-width: 100%;
        vertical-align: top;
      }
    `}
  />
);

export default GlobalStyle;
