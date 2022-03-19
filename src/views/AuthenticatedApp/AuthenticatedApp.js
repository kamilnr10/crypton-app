import React from 'react';
import Dashboard from 'components/templates/Dashboard/Dashboard';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Route, Routes } from 'react-router-dom';
import Portfolio from 'components/templates/Portfolio/Portfolio';
import Search from 'components/templates/Search/Search';
import Explore from 'components/templates/Explore/Explore';
import More from 'components/templates/More/More';
import { CoinDetail } from 'components/templates/CoinDetail/CoinDetail';

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
