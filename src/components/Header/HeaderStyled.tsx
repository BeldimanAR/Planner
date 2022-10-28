import styled, { css } from 'styled-components';
import { COLORS } from 'constants/variables';

export const BigHeaderContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
  z-index: 109;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  margin-right: 1.5%;
`;
export const RightHeaderName = styled.h5`
  margin: auto;
`;
export const RightHeaderPicture = styled.img`
  width: 30px;
  height: 30px;
  margin: 20px 10px;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  gap: 60px;
`;
export const rotatingButton = styled.button(
  (props) => css`
    background-color: transparent;
    border: none;
    ${!props.toggleSideMenu &&
    css`
      transition: 0.5s;
    `}
    ${props.toggleSideMenu &&
    css`
      transform: rotate(180deg);
      transition: 0.5s;
    `}
  `
);

export const TitleHeader = styled.h2`
  font-size: x-large;
  font-weight: bold;
  animation-duration: 1s;
  animation-iteration-count: 1;
  text-transform: uppercase;
  color: ${COLORS.fontColor};
`;
