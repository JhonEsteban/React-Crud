import PropTypes from 'prop-types';

const Profile = ({ user, handleUpdateAvatar, defaultAvatar }) => (
  <section className='profile'>
    <div className='profile__update' onClick={handleUpdateAvatar}>
      <span className=' icon fas fa-pencil-alt' title='Editar Avatar'></span>
    </div>

    <figure className='avatar'>
      <img
        className='avatar__image'
        src={user.avatar || defaultAvatar}
        alt='default avatar'
        width='60'
      />
    </figure>
  </section>
);

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  handleUpdateAvatar: PropTypes.func.isRequired,
  defaultAvatar: PropTypes.string.isRequired,
};

export default Profile;
