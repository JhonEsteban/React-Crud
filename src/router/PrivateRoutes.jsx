import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? children : <Navigate to='/auth/login' />;
};

export default PrivateRoutes;
