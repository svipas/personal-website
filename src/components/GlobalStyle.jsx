import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #2e3440;
    color: #d8dee9;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: ${props => props.antialiasing && 'antialiased'};
  }
  `;
