import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
    background-color: #f9f9f9;
    color: #333;
    -webkit-tap-highlight-color: transparent;
  }

  button {
    all: unset;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
