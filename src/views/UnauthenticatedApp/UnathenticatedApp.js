import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { Login } from 'components/organisms/Login/Login';
import { Register } from 'components/organisms/Register/Register';
import { Reset } from 'components/organisms/Reset/Reset';

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
