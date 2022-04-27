import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { getAuthStatus } from '../redux/auth/middlewares';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import AppLoader from '../components/AppLoader';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ChangePassword from '../pages/auth/ChangePassword';

import HomeRoutes from './HomeRoutes';

const AppRouter = () => {
  const dispatch = useDispatch();
  const { validateSession } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAuthStatus());
  }, [dispatch]);

  if (validateSession) {
    return <AppLoader />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route
          path='/auth/login'
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path='/auth/register'
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />

        <Route
          path='/auth/forgot-password'
          element={
            <PublicRoutes>
              <ForgotPassword />
            </PublicRoutes>
          }
        />

        <Route
          path='/auth/change-password'
          element={
            <PublicRoutes>
              <ChangePassword />
            </PublicRoutes>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoutes>
              <HomeRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
