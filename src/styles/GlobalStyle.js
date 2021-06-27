import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
  }
  body {
    font-size: 62.5%;
    color: #745B9E;
  }
`;

export default GlobalStyle;
