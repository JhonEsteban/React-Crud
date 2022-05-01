import './styles.scss';

import PropTypes from 'prop-types';

const ErrorFormMessage = ({ message }) => {
  return <span className='error'> {message}</span>;
};

ErrorFormMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorFormMessage;
