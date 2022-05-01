import './styles.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <section className='heading'>
        <p className='heading__text'>
          Aplicación creada por{' '}
          <a
            href='https://www.linkedin.com/in/jhon-esteban-herrera'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Jhon Esteban Herrera
          </a>
        </p>
        <p className='heading__author'>
          Desarrollador JavaScript Fullstack (MERN)
        </p>
      </section>

      <section className='details'>
        <p className='details__portfolio'>
          Ver{' '}
          <a
            href='https://jhon-esteban-herrera.vercel.app'
            target='_blank'
            rel='noreferrer'
            className='link'
          >
            Portafolio
          </a>
        </p>
        <p className='details__copy'>Copyright © {currentYear}</p>
      </section>
    </footer>
  );
};

export default Footer;
