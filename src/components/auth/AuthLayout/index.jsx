import './styles.scss';

const AuthLayout = ({ children, description }) => {
  return (
    <section className='login'>
      <div className='wrapper'>
        <section className='login__container'>
          <section className='auth-container'>
            <h1 className='auth-container__title'>Task App</h1>
            <p className='auth-container__description'>{description}</p>
            {children}
          </section>

          <section className='hero'></section>
        </section>
      </div>
    </section>
  );
};

export default AuthLayout;
