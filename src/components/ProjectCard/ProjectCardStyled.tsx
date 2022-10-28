import styled from 'styled-components';
import { COLORS } from 'constants/variables';

export const ProjectCardContainer = styled.div`
  display: flex;
  min-width: 250px;
  width: 100%;
  max-width: 390px;
  min-height: 70px;
  height: 100%;
  max-height: 70px;
  background-color: ${COLORS.backgroundColor2};
  border-radius: 4px;
`;
export const ProjectCardIcon = styled.div`
  padding-top: 1%;
  width: 100%;
  max-width: 50px;
`;
export const ProjectCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  border-bottom: 2px solid;
  border-bottom-color: #e0e0e0;
`;
export const ProjectCardFirstDetails = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
`;
export const ProjectCardName = styled.div`
  text-align: left;
  font-weight: bold;
`;
export const ProjectCardDescription = styled.div`
  text-align: left;
  color: gray;
  font-size: small;
`;
export const ProjectCardLabel = styled.div`
  height: 30%;
  width: 100%;
  text-align: start;
`;

export const DateContainer = styled.span`
  font-size: x-small;
  color: red;
  background-color: ${COLORS.backgroundColor};
  position: relative;
  bottom: 3px;
  opacity: 0.4;
`;
