import styled, { css } from 'styled-components';
import { COLORS } from 'constants/variables';

export const LayoutContainer = styled.div`
  background: ${COLORS.backgroundColor};
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const LayoutSide = styled.div(
  (props) => css`
    ${props.toggleMinimize === false &&
    css`
      background: ${COLORS.backgroundColor2};
      min-width: 50px;

      width: 100%;
      max-width: 200px;
      transition: 0.5s;
    `}
    ${props.toggleMinimize === true &&
    css`
      background: ${COLORS.backgroundColor2};
      min-width: 25px;
      width: 50%;

      max-width: 115px;
      transition: 0.5s;
    `}
  `
);

export const BigContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LayoutHeader = styled.div`
  width: 100%;
  height: 70px;
  background: yellow;
  display: flex;
  justify-content: space-between;
`;

export const LayoutMiddleContainer = styled.div`
  height: 100vh;
  background-color: ${COLORS.backgroundColor};
  overflow: auto;
`;
