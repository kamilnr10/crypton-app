import React from 'react';
import Dashboard from 'pages/Dashboard/Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Route, Routes } from 'react-router-dom';
import { Portfolio, Search, Explore, More, CoinDetail } from 'pages/index';

export const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<CoinDetail />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="search" element={<Search />} />
        <Route path="explore" element={<Explore />} />
        <Route path="more" element={<More />} />
      </Routes>
    </MainTemplate>
  );
};
