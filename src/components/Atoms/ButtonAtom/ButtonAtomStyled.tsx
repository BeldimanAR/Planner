import styled, { css } from 'styled-components';
import { IStyle } from './ButtonAtomModel';
import { COLORS } from 'constants/variables';

export const SideMenuButtonContainer = styled.button<IStyle>(
  (props) => css`
    ${!props.toggleMinimize &&
    css`
      background-color: ${props.isSelected ? 'pink' : 'transparent'};
      border: transparent;
      padding: 5% 0;
      padding-left: 5%;
      margin: 0 15%;
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
      padding: 100% 0;
      padding-left: 23%;
      margin: 0 15%;
      border-radius: 5px;
      display: flex;
      text-align: center;
      cursor: pointer;
      color: grey;
      transition: 1s;
    `}

    &:hover {
      background-color: pink;
      transition: 0.5s;
    }

    &:active {
      background-color: pink;
      transition: 0.5s;
    }

    ${props.styles === 'login' &&
    css`
      background-color: #f95959;
      color: ${COLORS.backgroundColor};
      font-weight: bold;
      border: transparent;
      border-radius: 7px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:active {
        background-color: #f95959;
        box-shadow: 5px 5px 10px #233142;
        transform: translateY(4px);
      }
      &:hover {
        text-decoration: underline;
      }
    `}
  `
);
