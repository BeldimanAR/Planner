import styled from 'styled-components';
import { COLORS } from 'constants/variables';
export const LoginPageContainer = styled.div`
  background-color: ${COLORS.backgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s ease-in-out;
`;
export const LoginMiddleContainer = styled.div`
  background-color: #455d7a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  text-align: center;
  border-radius: 7px;
  box-shadow: 1px 1px 2px grey;
  min-width: 250px;
  width: 100%;
  max-width: 300px;
  padding: 20px;
`;

export const LoginTitle = styled.h1`
  color: #ececec;
  font-weight: bold;

  font-size: clamp(15px, 1.5vw, 30px);
`;

export const LoginInput = styled.input`
  background-color: #ececec;
  border-radius: 5px;

  width: 100%;

  text-align: center;
  border: transparent;
  height: 35px;

  &:focus {
    outline: none;
    box-shadow: 5px 5px 10px #233142;
  }

  &:valid {
    background-color: #e4f1fe;
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginButton = styled.button`
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
`;
export const RegisterButton = styled.button`
  background-color: ${COLORS.backgroundColor};
  color: black;
  margin: auto;
  font-weight: bold;
  border: transparent;
  border-radius: 7px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const failedLogin = styled.span`
  color: red;
`;
