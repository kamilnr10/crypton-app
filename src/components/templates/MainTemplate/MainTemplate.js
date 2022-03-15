import React from 'react';
import { Header } from 'components/organisms/Header/Header';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { MainTemplateWrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
  return (
    <MainTemplateWrapper>
      <Header />
      {children}
      <Navigation />
    </MainTemplateWrapper>
  );
};
