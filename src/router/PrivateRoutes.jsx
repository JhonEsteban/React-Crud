import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import TodoAppContext from '../context/TodoAppContext';

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(TodoAppContext);

  return user.isLogged ? children : <Navigate to='/login' />;
};

export default PrivateRoutes;
