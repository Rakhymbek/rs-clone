import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { COLOR_DARK } from './constants';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR_DARK,
    },
    secondary: {
      main: '#580ea2',
    },
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
