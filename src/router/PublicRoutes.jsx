import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import TodoAppContext from '../context/TodoAppContext';

const PublicRoutes = ({ children }) => {
  const { user } = useContext(TodoAppContext);

  return user.isLogged ? <Navigate to='/' /> : children;
};

export default PublicRoutes;
