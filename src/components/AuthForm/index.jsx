import PropTypes from 'prop-types';

const AuthForm = ({ handleSubmit, handleInputChange, userName }) => (
  <form onSubmit={handleSubmit} className='login-form'>
    <h1 className='login-form__title'>Task App</h1>

    <input
      className='login-form__input'
      onChange={handleInputChange}
      value={userName}
      type='text'
      placeholder='Nombre'
    />

    <input
      className='login-form__input'
      type='text'
      placeholder='Correo electronico'
    />
    <input
      className='login-form__input'
      type='password'
      placeholder='Contraseña'
    />

    <button className='login-form__button'>Entrar</button>
  </form>
);

AuthForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
};

export default AuthForm;
