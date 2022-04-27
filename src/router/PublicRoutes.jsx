import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? <Navigate to='/tasks' /> : children;
};

export default PublicRoutes;
