import React, { useState } from 'react';

// STYLES
import * as styled from './LoginPageStyled';

// LIBRARIES
import { useNavigate } from 'react-router-dom';
// MISC

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { userDetails, deleteData } from 'slice/UserDataSlice/userSlice';
import { handleToogleLoginCheck } from 'slice/LoginCheckSlice/LoginCheckSlice';
// COMPONENTS
import InputAtom from 'components/Atoms/InputAtom/InputCard';
import ButtonAtom from 'components/Atoms/ButtonAtom/ButtonAtom';
const LoginPage = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES
  const dispatch = useDispatch();
  // CONSTANTS USING HOOKS
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [statusLogin, setStatusLogin] = useState(true);
  // GENERAL CONSTANTS
  const userDetailsData = useSelector(userDetails);
  const navigate = useNavigate();
  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS
  const handleLoginData = (event) => {
    const { name, value } = event.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (
      loginData.email === userDetailsData.email &&
      loginData.password === userDetailsData.password
    ) {
      setStatusLogin(true);
      dispatch(handleToogleLoginCheck());
      navigate('/dashboard');
    } else {
      setStatusLogin(false);
    }

    console.log(statusLogin);
  };
  const handleSubmitRegister = (event) => {
    event.preventDefault();
    dispatch(deleteData());
    navigate('/register');
  };

  return (
    <styled.LoginPageContainer>
      <styled.LoginMiddleContainer>
        <styled.LoginTitle>LOG IN</styled.LoginTitle>
        {!statusLogin && <styled.failedLogin>Login Failed</styled.failedLogin>}
        <styled.LoginForm>
          <InputAtom
            type="text"
            name="email"
            value={loginData.email}
            onChange={handleLoginData}
            placeholder="Enter Email"
          />
          <InputAtom
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleLoginData}
            value={loginData.password}
          />
          <ButtonAtom
            type="submit"
            styles="login"
            buttonText="Log In"
            onClick={handleSubmitLogin}
          ></ButtonAtom>
          <styled.LoginButtonContainer>
            <styled.RegisterButton type="submit" onClick={handleSubmitRegister}>
              Register Account
            </styled.RegisterButton>
          </styled.LoginButtonContainer>
        </styled.LoginForm>
      </styled.LoginMiddleContainer>
    </styled.LoginPageContainer>
  );
};

export default LoginPage;
