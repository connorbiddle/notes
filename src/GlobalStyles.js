import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: "Raleway", "Segoe UI", sans-serif;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
`;

export default GlobalStyles;
