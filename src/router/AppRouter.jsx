import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import HomeRoutes from './HomeRoutes';

const AppRouter = () => {
  return (
    <BrowserRouter>
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
          path='/*'
          element={
            <PrivateRoutes>
              <HomeRoutes />
            </PrivateRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
