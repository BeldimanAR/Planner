import styled from 'styled-components';

export const InputContainer = styled.input`
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
