/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import theme from 'styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/global-style';
import GlobalFonts from 'styles/styleOptions/fonts/fonts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalFonts />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
