import styled from 'styled-components';

export const MainTemplateWrapper = styled.div`
  /* min-height: -webkit-fill-available; */
  /* height: calc(${({ innerHeight }) => innerHeight} + (100vh - 100%)); */
  height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr;

  @media (min-width: 768px) {
    height: 100vh;
  }
`;
