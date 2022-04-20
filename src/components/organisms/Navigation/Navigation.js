import React, { useState, useEffect, useRef } from 'react';
import { BarChartOutline } from 'react-ionicons';
import { StarOutline } from 'react-ionicons';
import { SearchOutline } from 'react-ionicons';
import { CompassOutline } from 'react-ionicons';
import { EllipsisHorizontalOutline } from 'react-ionicons';
import { NavLink } from 'react-router-dom';
import { NavWrapper } from './Navigation.styles';
import { Indicator } from 'components/atoms/Indicator/Indicator';

export const Navigation = () => {
  const [navItemWidth, setItemWidth] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    console.log('width', ref.current.offsetWidth);
    setItemWidth(ref.current.offsetWidth);
  }, []);

  return (
    <NavWrapper>
      <ul navItemWidth={navItemWidth}>
        <NavLink to="dashboard" ref={ref}>
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
        <Indicator navItemWidth={navItemWidth} />
      </ul>
    </NavWrapper>
  );
};
