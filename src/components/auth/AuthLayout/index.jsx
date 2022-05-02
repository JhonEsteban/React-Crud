import './styles.scss';

import PropTypes from 'prop-types';

const AuthLayout = ({ children, description }) => {
  return (
    <section className='auth'>
      <div className='auth-wrapper'>
        <section className='content'>
          <div className='form-container'>
            <h1 className='form-container__title'>Task App</h1>
            <p className='form-container__description animate__animated animate__fadeIn'>
              {description}
            </p>
            {children}
          </div>

          <div className='banner'></div>
        </section>
      </div>
    </section>
  );
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
};

export default AuthLayout;
