import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RoutinesProvider } from "./RoutinesContext";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <RoutinesProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </RoutinesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
