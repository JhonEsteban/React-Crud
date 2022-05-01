import './styles.scss';

import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
