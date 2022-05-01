import './styles.scss';

import PropTypes from 'prop-types';

const ProfileContent = ({ children }) => (
  <section className='profile-content'>{children}</section>
);

ProfileContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileContent;
