import React from 'react';
import styled from 'styled-components';
import { NavigationTop } from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import { ReactComponent as StarIcon } from 'assets/icons/star.svg';
import { ReactComponent as MarketIcon } from 'assets/icons/market-research.svg';
import { ReactComponent as FinderIcon } from 'assets/icons/finder.svg';
import { ReactComponent as CompassIcon } from 'assets/icons/compass.svg';
import { ReactComponent as MoreIcon } from 'assets/icons/more-horiz.svg';

const NavigationBottom = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <MarketIcon />
          Market
        </li>
        <li>
          <StarIcon />
          Portfolio
        </li>
        <li>
          <FinderIcon />
          Search
        </li>
        <li>
          <CompassIcon />
          Explore
        </li>
        <li>
          <MoreIcon />
          More
        </li>
      </ul>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 12px;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const MainTemplateWrapper = styled.div`
  height: 100vh;
  max-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;

export const MainTemplate = ({ children }) => {
  return (
    <MainTemplateWrapper>
      <NavigationTop />
      {children}
      <NavigationBottom />
    </MainTemplateWrapper>
  );
};
