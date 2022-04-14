import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Login, Register, Reset } from 'pages/index';

export const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
      </Routes>
    </Wrapper>
  );
};
