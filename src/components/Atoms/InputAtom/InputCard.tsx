// STYLES
import * as styled from './InputStyled';
import { IProps } from './InputModel';

// LIBRARIES

// MISC

// REDUX

// COMPONENTS

const InputAtom = (props: IProps) => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS
  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION
  // REQUEST API FUNCTIONS
  // HANDLERS FUNCTIONS

  return (
    <styled.InputContainer
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required
    />
  );
};

export default InputAtom;

// type="text"
//  name="email"
//  value={loginData.email}
//  onChange={handleLoginData}
//  placeholder="Enter Email"
