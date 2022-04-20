import styled from 'styled-components';

export const Indicator = styled.div`
  position: absolute;
  top: -50%;
  left: calc((${({ navItemWidth }) => navItemWidth}px / 2 - 25px));
  width: 50px;
  height: 50px;
  background-color: #29fd53;
  border-radius: 50%;
  border: 6px solid #0c0a11;
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
    box-shadow: 2px -5px 0px 2px #0c0a11;
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
    box-shadow: -2px -5px 0px 2px #0c0a11;
  }
`;
