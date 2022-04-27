import PropTypes from 'prop-types';

const UserProfile = ({ user }) => (
  <section className='profile'>
    <div className='profile__update'>
      <span className=' icon fas fa-pencil-alt' title='Editar Avatar'></span>
    </div>

    <figure className='avatar'>
      <img
        className='avatar__image'
        src={user.image}
        alt='default avatar'
        width='60'
      />
    </figure>
  </section>
);

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;
