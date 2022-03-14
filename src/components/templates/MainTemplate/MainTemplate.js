import React from 'react';
import styled from 'styled-components';
import { NavigationTop } from 'components/organisms/Navigation/Navigation';
import { BarChartOutline } from 'react-ionicons';
import { StarOutline } from 'react-ionicons';
import { SearchOutline } from 'react-ionicons';
import { CompassOutline } from 'react-ionicons';
import { EllipsisHorizontalOutline } from 'react-ionicons';
import { NavLink } from 'react-router-dom';

const Indicator = styled.div`
  position: absolute;
  top: -50%;
  left: 7px;
  width: 50px;
  height: 50px;
  background-color: #29fd53;
  border-radius: 50%;
  border: 6px solid #232328;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -13px;
    width: 8px;
    height: 10px;
    background-color: transparent;
    border-top-right-radius: 9px;
    box-shadow: 2px -5px 0px 2px #232328;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -13px;
    width: 8px;
    height: 10px;
    background-color: transparent;
    border-top-left-radius: 9px;
    box-shadow: -2px -5px 0px 2px #232328;
  }
`;

const NavWrapper = styled.nav`
  width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;

  ul {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    a {
      width: 100%;
      height: 100%;
      position: relative;
      font-size: 12px;

      div span:last-child {
        position: absolute;
        letter-spacing: 0.05em;
        transform: translateY(15px);
        transition: 0.5s;
        opacity: 0;
      }

      div {
        width: 100%;
        height: 100%;
        padding: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        font-weight: 500;

        span {
          position: relative;
          z-index: 100;

          svg {
            width: 24px;
            height: 24px;
            position: relative;
            display: block;
          }
        }

        span:first-child {
          color: blue;
          position: absolute;
          letter-spacing: 0.05em;
          transition: 0.5s;
        }
      }
    }

    a.active {
      div span:first-child {
        transform: translateY(-100%);
      }

      div span:last-child {
        transform: translateY(10px);
        opacity: 1;
      }
    }

    a:nth-child(1).active ~ ${Indicator} {
      transform: translateX(calc(64px * 0));
    }
    a:nth-child(2).active ~ ${Indicator} {
      transform: translateX(calc(64px * 1));
    }
    a:nth-child(3).active ~ ${Indicator} {
      transform: translateX(calc(64px * 2));
    }
    a:nth-child(4).active ~ ${Indicator} {
      transform: translateX(calc(64px * 3));
    }
    a:nth-child(5).active ~ ${Indicator} {
      transform: translateX(calc(64px * 4));
    }
  }
`;

const NavigationBottom = () => {
  return (
    <NavWrapper>
      <ul>
        <NavLink to="dashboard">
          <div>
            <BarChartOutline />
            <span className="text">Market</span>
          </div>
        </NavLink>
        <NavLink to="portfolio">
          <div>
            <StarOutline />
            <span className="text">Portfolio</span>
          </div>
        </NavLink>
        <NavLink to="search">
          <div>
            <SearchOutline />
            <span className="text">Search</span>
          </div>
        </NavLink>
        <NavLink to="explore">
          <div>
            <CompassOutline />
            <span className="text">Explore</span>
          </div>
        </NavLink>
        <NavLink to="more">
          <div>
            <EllipsisHorizontalOutline />
            <span className="text">More</span>
          </div>
        </NavLink>
        <Indicator />
      </ul>
    </NavWrapper>
  );
};

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
