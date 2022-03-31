import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border-radius: 3px;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.07);
  border: none;
  letter-spacing: 0.5px;
  outline: none;
  /* box-shadow: inset 0px 6px 20px 4px rgba(209, 220, 232, 1); */

  &::placeholder {
    color: #e5e5e5;
  }
`;
