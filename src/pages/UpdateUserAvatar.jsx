import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/pages/UpdateUserAvatar.scss';

import defaultAvatar from '../assets/images/default-avatar.png';

import { useAvatar } from '../hooks/useAvatar';

const UpdateUserAvatar = () => {
  const { userAvatar, inputFileRef, handleFileChange, handleUpdateUser } =
    useAvatar();

  return (
    <div className='wrapper animate__animated animate__fadeIn'>
      <h1>Actualizar Avatar</h1>

      <Link to='/home'>Regresar</Link>

      <form onSubmit={handleUpdateUser} className='update-form'>
        <label className='update-form__label'>
          <input onChange={handleFileChange} ref={inputFileRef} type='file' />
        </label>

        <img
          src={userAvatar || defaultAvatar}
          alt='avatar'
          width='70'
          className='preview-image'
        />

        <button type='submit' className='update-form__btn'>
          <span>Actualizar</span>
          <i className='fas fa-images'></i>
        </button>
      </form>
    </div>
  );
};

export default UpdateUserAvatar;
