import styled from 'styled-components';

export const Background = styled.div`
  /* height: 100%; */
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
`;
export const Shape = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;

  &:first-child {
    background: linear-gradient(#4b36dd, #8e81e6);
    left: -40px;
    top: 80px;
  }
  &:last-child {
    background: linear-gradient(to right, #29fd53, #8ef3a2);
    right: -40px;
    bottom: 80px;
  }
`;
