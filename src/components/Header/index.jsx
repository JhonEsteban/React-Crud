import { useSelector } from 'react-redux';
// import { useNavigate } from 'react-router';

import './styles.scss';
import UserProfile from './UserProfile';

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  // const navigate = useNavigate();

  // const handleUpdateAvatar = () => {
  //   navigate(`/user/profile`);
  // };

  return (
    <div className='wrapper'>
      <header className='header'>
        <h2 className='header__title'>{user.name}</h2>

        <UserProfile user={user} />
      </header>
    </div>
  );
};

export default Header;
