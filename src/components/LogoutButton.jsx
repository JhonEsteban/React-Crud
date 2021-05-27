import PropTypes from 'prop-types';

const LogoutButton = ({ handleLogout }) => (
  <button
    onClick={handleLogout}
    type='button'
    className='btn-logout'
    title='Salir'
  >
    <i className='fas fa-sign-out-alt'></i>
  </button>
);

LogoutButton.propTypes = {
  handleLogout: PropTypes.func.isRequired,
};

export default LogoutButton;
