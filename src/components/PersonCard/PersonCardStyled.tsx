import styled from 'styled-components';
import { COLORS } from 'constants/variables';

export const PersonCardContainer = styled.div`
  display: flex;
  min-width: 250px;
  width: 100%;
  max-width: 390px;
  min-height: 40px;
  height: 100%;
  max-height: 150px;
  background-color: ${COLORS.backgroundColor2};
  border-radius: 4px;
  border-bottom: 2px solid;
  border-bottom-color: #e0e0e0;
`;
export const PersonCardIcon = styled.div`
  padding-top: 2%;
  width: 100%;
  max-width: 50px;
`;
export const PersonCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;
export const PersonCardFirstDetails = styled.div`
  padding-top: 2%;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const PersonCardName = styled.div`
  text-align: left;
  font-weight: bold;
`;

export const PersonCardLabel = styled.div`
  height: 30%;
  width: 100%;
  text-align: start;
`;

export const DateContainer = styled.div`
  font-size: x-small;
  font-weight: bold;

  margin-right: 35%;
  text-align: center;
  color: red;
  background-color: ${COLORS.backgroundColor};
  position: relative;
  bottom: 8px;
  opacity: 0.4;
`;
