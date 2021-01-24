import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    &::selection {
      background: #F7C878;
      color: white;
    }
  }

  body {
    background-color: rgba(0,0,0,.5);
  }

  img {
      width: 100%;
  }

  textarea,
  a,
  p,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: 'Nunito Sans', cursive, Arial, sans-serif;
      font-weight: 600;
  }

  a {
      text-decoration: none;
      cursor: pointer;
  }

  button {
    padding: 10px 20px;
    font-size: 22px;
    border-radius: 14px;
    cursor: pointer;
    background-color: ${(props) =>
      props.theme.colors.secondary};
  }
`;

export default GlobalStyle;
