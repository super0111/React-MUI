import React from "react";
import { PersistGate } from 'redux-persist/integration/react';
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { default as store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, StyledEngineProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles/Dashboard.css";

import { theme } from './themes';

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App root={root} />
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </>
);

reportWebVitals(console.log);