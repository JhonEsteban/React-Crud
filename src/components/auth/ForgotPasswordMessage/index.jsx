import './styles.scss';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resetForgotPasswordDataAction } from '../../../redux/auth/actions';

const ForgotPasswordMessage = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleGoBack = () => {
    dispatch(resetForgotPasswordDataAction());
    navigate('/auth/login');
  };

  return (
    <section className='forgot-password'>
      <h1 className='forgot-password__title'>¡Revisa tu correo!</h1>

      <p className='forgot-password__description'>
        Se te ha enviado un enlace a <strong>{email}</strong>. Sigue las
        instrucciones para restablecer tu contraseña.
      </p>

      <button
        onClick={handleGoBack}
        className='forgot-password__btn'
        type='button'
      >
        Regresar a inicio de sesión
      </button>
    </section>
  );
};

ForgotPasswordMessage.propTypes = {
  email: PropTypes.string.isRequired,
};
export default ForgotPasswordMessage;
