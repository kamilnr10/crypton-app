import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  ul {
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
  }
`;

export const NavigationTop = () => {
  return (
    <NavWrapper>
      <ul>
        <li>Home</li>
        <li>Profile</li>
      </ul>
    </NavWrapper>
  );
};
