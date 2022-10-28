import React from 'react';

// STYLES
import * as styled from './RegisterStyled';

// LIBRARIES

// MISC

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveUser, userDetails } from 'slice/UserDataSlice/userSlice';
// COMPONENTS
import InputAtom from 'components/Atoms/InputAtom/InputCard';
import ButtonAtom from 'components/Atoms/ButtonAtom/ButtonAtom';
const RegisterPage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const userDetailsData = useSelector(userDetails);
  const dispatch = useDispatch(); // <-- dispatch function
  const navigate = useNavigate();

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    dispatch(saveUser({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/login');
    console.log(window.location.pathname);
  };
  console.log(userDetailsData);
  return (
    <styled.RegisterPageContainer>
      <styled.RegisterMiddleContainer>
        <styled.RegisterTitle>REGISTER</styled.RegisterTitle>
        <styled.RegisterForm onSubmit={handleSubmit}>
          <InputAtom
            type="text"
            placeholder="Enter Email"
            name="email"
            value={userDetailsData.email}
            onChange={handleChange}
            required
          />

          <InputAtom
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userDetailsData.password}
            required
            onChange={handleChange}
          />
          <InputAtom
            type="text"
            placeholder="Enter Name"
            name="name"
            value={userDetailsData.name}
            required
            onChange={handleChange}
          ></InputAtom>
          <styled.RegisterButtonContainer>
            <ButtonAtom
              type="submit"
              styles="login"
              buttonText="Sign Up"
            ></ButtonAtom>
          </styled.RegisterButtonContainer>
        </styled.RegisterForm>
      </styled.RegisterMiddleContainer>
    </styled.RegisterPageContainer>
  );
};

export default RegisterPage;
