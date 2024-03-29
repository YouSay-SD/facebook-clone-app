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
        font-family: 'Segoe UI Historic';
        src: url('./fonts/Segoe-ui-historic-regular.ttf') format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'Segoe UI';
        src: url('./fonts/Segoe-ui-semi-bold.ttf') format('truetype');
        font-weight: 600;
      }

      @font-face {
        font-family: 'Segoe UI';
        src: url('./fonts/Segoe-ui-medium.ttf') format('truetype');
        font-weight: 500;
      }

      @font-face {
        font-family: 'Segoe UI';
        src: url('./fonts/Segoe-ui-regular.ttf') format('truetype');
        font-weight: 400;
      }

      @font-face {
        font-family: 'SFProDisplay';
        src: url('./fonts/SFProDisplay-Regular.ttf') format('truetype');
      }

      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial,
          sans-serif;
      }

      body {
        background-color: #f0f2f5;
        color: #1c1e21;
      }

      img {
        max-width: 100%;
        vertical-align: top;
      }

      a {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyle;
