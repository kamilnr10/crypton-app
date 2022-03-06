import React from 'react';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </MainTemplate>
  );
};
