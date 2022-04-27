import { useDispatch } from 'react-redux';

import { logOutUser } from '../../redux/auth/middlewares';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  return (
    <button
      onClick={handleLogout}
      type='button'
      className='btn-logout'
      title='Salir'
    >
      <i className='fas fa-sign-out-alt'></i>
    </button>
  );
};

export default LogoutButton;
