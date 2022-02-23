import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from 'views/Login';
import Register from 'views/Register';
import Reset from 'views/Reset';
import Dashboard from 'views/Dashboard';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

const Game = () => {
  const [player1, serPlayer1] = useState('');
  return <p>Home</p>;
};

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
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            {/* <Route exact path="/dashboard/game" element={<Game />} /> */}
          </Routes>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
}
export default App;
