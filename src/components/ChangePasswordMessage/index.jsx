import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetRecoverAccount } from '../../redux/auth/actions';

import AuthLayout from '../Layouts/AuthLayout';

import './styles.scss';

const ChangePasswordMessage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    dispatch(resetRecoverAccount());
    navigate('/auth/login');
  };

  return (
    <AuthLayout description='¡Se cambió tu contraseña con éxito!'>
      <p className='change-description'>
        Ya puedes <strong>iniciar sesión</strong>. Ve y disfruta de tu cuenta
        sin problemas.
      </p>

      <button onClick={handleGoBack} className='change-btn' type='button'>
        Ir a iniciar sesión
      </button>
    </AuthLayout>
  );
};

export default ChangePasswordMessage;
