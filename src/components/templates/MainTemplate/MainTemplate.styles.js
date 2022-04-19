import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  height: 100vh;
  height: calc(${({ innerHeight }) => innerHeight} + (100vh - 100%));
  display: grid;
  grid-template-rows: 50px 1fr 50px;
`;
