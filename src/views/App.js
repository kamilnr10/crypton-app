import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Login from 'views/Login';
import Register from 'views/Register';
import Reset from 'views/Reset';
import Dashboard from 'views/Dashboard';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { database } from 'helpers/firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth } from 'helpers/firebase';
import { useLogin } from 'helpers/firebase';
import Home from './Home';
import CreatePost from './CreatePost';
import ProtectedRoute from './ProtectedRoute';
import { UserAuthContextProvider } from 'context/UserAuthContext';

const NotFound = () => {
  return <p>Not found</p>;
};

const datab = console.log(database);

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 20px 0 20px;
  background-color: #f5f5f5;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserAuthContextProvider>
          <Wrapper>
            <Routes>
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Wrapper>
        </UserAuthContextProvider>
      </ThemeProvider>
    </Router>
  );
}
export default App;
