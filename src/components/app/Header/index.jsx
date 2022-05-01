import './styles.scss';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetCurrentTaskAction } from '../../../redux/task/actions';
import { logOutUser } from '../../../redux/auth/middlewares';

import logo from '../../../assets/images/logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth, task } = useSelector((state) => state);

  const { user } = auth;
  const { currentTask } = task;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleIsOpeMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleGoToProfile = () => {
    currentTask && dispatch(resetCurrentTaskAction());
    navigate('/user/profile');
  };

  const handleLogout = () => {
    dispatch(logOutUser());
  };

  const handleGoBack = () => {
    currentTask && dispatch(resetCurrentTaskAction());
    navigate('/tasks');
  };

  return (
    <header className='header'>
      <section className='header__content'>
        <img
          onClick={handleGoBack}
          src={logo}
          alt='Logo de la aplicación de tareas'
          title='Aplicación de tareas'
          width='45'
          className='logo'
        />

        <img
          onClick={handleIsOpeMenu}
          className='profile'
          src={user.image}
          alt={`Imagen de perfil de ${user.name}`}
          title='Abrir menú'
        />

        <section className={`menu ${isOpenMenu ? 'active' : ''}`}>
          <div className='user'>
            <img
              src={user.image}
              className='user__image'
              alt={`Imagen de perfil de ${user.name}`}
              title={`Imagen de perfil de ${user.name}`}
            />

            <div className='user__details'>
              <span>{user.name}</span>
              <span>{user.email}</span>
            </div>
          </div>

          <div className='details'>
            <button
              onClick={handleGoToProfile}
              className='details__btn'
              type='button'
            >
              Ver mi perfil
            </button>

            <button
              onClick={handleLogout}
              className='details__btn'
              type='button'
            >
              Cerrar sesión
            </button>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
