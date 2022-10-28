import styled, { css } from 'styled-components';
import { COLORS } from 'constants/variables';

export const SideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 40px;
  background-color: ${COLORS.backgroundColor2};
`;

export const PageNameContainer = styled.h1(
  (props) => css`
    ${!props.toggleMinimize &&
    css`
      padding-top: 15%;
      font-size: 29px;
      text-align: center;
      transition: 1s;
    `}
    ${props.toggleMinimize &&
    css`
      margin-top: 20%;
      font-size: 15px;
      text-align: center;
      transition: 1s;
    `}
  `
);

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  align-items: left;
  gap: 5px;
`;
export const MenuTitle = styled.h3(
  (props) => css`
    ${!props.toggleMinimize &&
    css`
      font-size: medium;
      padding-left: 15%;
      color: #f7786b;
      transition: ease-in;
    `}

    ${props.toggleMinimize &&
    css`
      font-size: medium;
      text-align: center;
      color: #f7786b;
      transition: ease-in;
    `}
  `
);

export const LogOutBtn = styled.button(
  (props) => css`
    ${!props.toggleMinimize &&
    css`
      background-color: ${props.isSelected ? 'pink' : 'transparent'};
      border: transparent;
      padding: 5% 0;
      padding-left: 5%;
      margin: 0 15%;
      margin-top: 230%;
      border-radius: 5px;
      display: flex;
      gap: 10px;
      align-items: center;
      cursor: pointer;
      color: grey;
      transition: 1s;
    `}

    ${props.toggleMinimize &&
    css`
      background-color: ${props.isSelected ? 'pink' : 'transparent'};
      border: transparent;
      padding: 10%;
      border-radius: 5px;
      text-align: center;
      cursor: pointer;
      color: grey;
      transition: 1s;
    `}

    &:hover {
      text-decoration: underline;
      transition: 0.5s;
    }
  `
);
