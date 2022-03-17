import styled from 'styled-components';

export const Indicator = styled.div`
  position: absolute;
  top: -50%;
  left: 7px;
  width: 50px;
  height: 50px;
  background-color: #29fd53;
  border-radius: 50%;
  border: 6px solid #000000;
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
    box-shadow: 2px -5px 0px 2px #000000;
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
    box-shadow: -2px -5px 0px 2px #000000;
  }
`;
