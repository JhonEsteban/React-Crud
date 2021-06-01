import PropTypes from 'prop-types';

const LoginForm = ({ handleSubmit, handleInputChange, userName }) => (
  <form onSubmit={handleSubmit} className='login-form'>
    <h1 className='login-form__title'>Iniciar Sesión</h1>

    <input
      className='login-form__input'
      onChange={handleInputChange}
      value={userName}
      type='text'
      placeholder='Escribe tu nombre'
    />

    <button className='login-form__button'>Entrar</button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default LoginForm;
