import React from "react";
import { PersistGate } from 'redux-persist/integration/react'
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { default as store, persistor } from './app/store';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme, StyledEngineProvider } from "@mui/material";
import reportWebVitals from "./reportWebVitals";

import 'bootstrap/dist/css/bootstrap.min.css';

const createFontFamily = (fontFamily) => {
  return {
    h1: { fontFamily },
    h2: { fontFamily },
    h3: { fontFamily },
    h4: { fontFamily },
    h5: { fontFamily },
    h6: { fontFamily },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily },
    body1: { fontFamily },
    body2: { fontFamily },
    button: { fontFamily, textTransform: "normalize" },
    caption: { fontFamily },
    overline: { fontFamily },
  };
};

const theme = createTheme({
  typography: createFontFamily("Inter, sans-serif"),
});

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

reportWebVitals(console.log);