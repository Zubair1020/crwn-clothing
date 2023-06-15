import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "Montserrat", sans-serif;
    padding: 20px 40px;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export default GlobalStyle;
