import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { RoutinesProvider } from "./context/RoutinesContext";
import NotificationsProvider from "./context/NotificationsContext";
import GlobalStyles from "./base/GlobalStyles";
import theme from "./base/theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <ThemeProvider theme={theme}>
        <NotificationsProvider>
          <RoutinesProvider>
            <App />
          </RoutinesProvider>
        </NotificationsProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
