import { HashRouter, Routes, Route } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import HomeRoutes from './HomeRoutes';

const AppRouter = () => {
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
