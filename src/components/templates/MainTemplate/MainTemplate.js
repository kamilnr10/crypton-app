import React, { useState, useEffect } from 'react';
import { Header } from 'components/organisms/Header/Header';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { MainTemplateWrapper } from './MainTemplate.styles';

export const MainTemplate = ({ children }) => {
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);

  useEffect(() => {
    console.log(window.innerHeight);
    setInnerHeight(window.innerHeight * 0.01);
  }, [innerHeight]);

  return (
    <MainTemplateWrapper innerHeight={innerHeight}>
      <Header />
      {children}
      <Navigation />
    </MainTemplateWrapper>
  );
};
