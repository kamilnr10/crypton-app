import React from 'react';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};
