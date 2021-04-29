import React from 'react';
import { Link } from 'react-router-dom';

import { useAvatar } from '../hooks/useAvatar';

const UpdateUserAvatar = () => {
  const {
    userAvatar,
    inputFileRef,
    handleFileChange,
    handleUpdateUser,
  } = useAvatar();

  return (
    <div className='wrapper'>
      <h1>Update User Avatar</h1>

      <Link to='/home'>Return</Link>

      <form onSubmit={handleUpdateUser}>
        <label>
          <p>Add Your Avatar</p>
          <input onChange={handleFileChange} ref={inputFileRef} type='file' />
        </label>

        {userAvatar && <img src={userAvatar} alt='user-avatar' width='70' />}

        <button>Update Avatar</button>
      </form>
    </div>
  );
};

export default UpdateUserAvatar;
