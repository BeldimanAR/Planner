import styled, { css } from 'styled-components';
import { COLORS } from 'constants/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  min-width: 200px;
  width: 100%;
  max-width: 350px;
  min-height: 280px;
  height: 100%;
  max-height: 500px;
  background-color: ${COLORS.backgroundColor2};
  border-radius: 20px;
  box-shadow: 5px 5px 10px lightgrey;
`;
export const LeftContainer = styled.div`
  width: 70%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;
export const RightContainer = styled.div`
  width: 10%;
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
export const LeftUpDetails = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const LeftDownDetails = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
export const IconContainer = styled.span`
  margin: auto;
  position: relative;
  bottom: 32%;
`;
export const TitleContainer = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${COLORS.fontColor};
  position: relative;
  top: 10%;
`;
export const DescriptionContainer = styled.span`
  font-weight: 500;
  color: ${COLORS.fontColor};
`;
export const StartingDateContainer = styled.span`
  font-weight: 700;
  font-size: 0.9rem;
  color: grey;
`;
export const DeadlineDateContainer = styled.span`
  font-weight: 700;
  color: darkred;
`;
