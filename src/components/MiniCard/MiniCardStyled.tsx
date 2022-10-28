import styled, { css } from 'styled-components';
import { COLORS } from 'constants/variables';
export const MiniCardContainer = styled.div(
  (props) => css`
    display: flex;
    flex-direction: column;

    min-width: 250px;
    width: 100%;
    max-width: 310px;
    min-height: 70px;
    height: 100%;
    max-height: 100px;
    background-color: ${COLORS.backgroundColor2};
    border-radius: 10px;
    box-shadow: 5px 5px 10px lightgrey;
    border-bottom: 4px solid;
    border-bottom-color: ${props.color};
  `
);

export const UpperContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-weight: bold;
`;
export const IconContainer = styled.span(
  (props) => css`
    color: ${props.color};
  `
);

export const NumberMiniCard = styled.span`
  color: ${COLORS.fontColor};
  font-size: 1.2rem;
  font-weight: 900;
`;
export const NameMiniCard = styled.span`
  color: ${COLORS.fontColor};
  font-weight: 700;
`;
export const BottomContainer = styled.span`
  color: ${COLORS.fontColor};
`;
