import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { UserAuthContextProvider } from 'context/UserAuthContext';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserAuthContextProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </UserAuthContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
