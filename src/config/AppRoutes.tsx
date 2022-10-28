// STYLES
// import * as styled from "./LayoutStyled";

// LIBRARIES
import { Route, Routes, Navigate } from 'react-router-dom';

// import { IProps } from "./LayoutModel";

// REDUX
import { loginCheck } from 'slice/LoginCheckSlice/LoginCheckSlice';
import { useSelector } from 'react-redux';
// COMPONENTS
import Layout from 'components/Layout/Layout';
import LoginPage from 'view/LoginPage/LoginPage';
import HomePage from 'view/HomePage/HomePage';
import RegisterPage from 'view/RegisterPage/RegisterPage';
import ProjectsPage from 'view/ProjectsPage/ProjectsPage';
import PersonsPage from 'view/PersonsPage/PersonsPage';

const AppRoutes = () => {
  // PROPS

  // CONSTANTS USING LIBRARIES

  // CONSTANTS USING HOOKS

  // GENERAL CONSTANTS

  const loginStatus = useSelector(loginCheck);
  // USE EFFECT FUNCTION

  // REQUEST API FUNCTIONS

  // HANDLERS FUNCTIONS

  return (
    <Routes>
      <Route
        path="/login"
        element={
          loginStatus ? (
            <Navigate to="/dashboard" replace={true} />
          ) : (
            <Layout showHeader={false} showSide={false}>
              <LoginPage />
            </Layout>
          )
        }
      />
      <Route
        path="/register"
        element={
          loginStatus ? (
            <Navigate to="/dashboard" replace={true} />
          ) : (
            <Layout showHeader={false} showSide={false}>
              <RegisterPage />
            </Layout>
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          !loginStatus ? (
            <Navigate to="/login" replace={true} />
          ) : (
            <Layout>
              <HomePage />
            </Layout>
          )
        }
      />
      <Route
        path="/projects"
        element={
          !loginStatus ? (
            <Navigate to="/login" replace={true} />
          ) : (
            <Layout>
              <ProjectsPage />
            </Layout>
          )
        }
      />
      <Route
        path="/persons"
        element={
          !loginStatus ? (
            <Navigate to="/login" replace={true} />
          ) : (
            <Layout>
              <PersonsPage />
            </Layout>
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
