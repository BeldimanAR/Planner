import styled from 'styled-components';
import { COLORS } from 'constants/variables';

export const BigContainer = styled.div`
  background-color: ${COLORS.backgroundColor2};
  min-height: 300px;
  height: 100%;
  max-height: 600px;
  min-width: 200px;
  width: 100%;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 5px 5px 10px lightgrey;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  max-width: 100%;
  height: 15%;
  text-align: start;
`;

export const TitleText = styled.span`
  font-size: x-large;
  font-weight: bold;
  position: relative;
  top: 30%;
  left: 10%;
  color: ${COLORS.fontColor};
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5%;
`;
