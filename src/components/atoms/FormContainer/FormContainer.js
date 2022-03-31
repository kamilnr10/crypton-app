import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.13);
  padding: 30px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  overflow: hidden;
  z-index: 10;
`;
