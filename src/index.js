import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RoutinesProvider } from "./RoutinesContext";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <RoutinesProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RoutinesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
