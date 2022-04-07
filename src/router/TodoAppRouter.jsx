import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/login/Login';
import HomeRoutes from './HomeRoutes';

const TodoAppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoutes>
              <Login />
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

export default TodoAppRouter;
