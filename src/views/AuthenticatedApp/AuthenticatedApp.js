import React from 'react';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'views/ProtectedRoute';
import Portfolio from 'components/templates/Portfolio/Portfolio';
import Search from 'components/templates/Search/Search';

export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </MainTemplate>
  );
};
