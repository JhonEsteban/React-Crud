import { useContext, useRef, useState } from 'react';

import { useHistory } from 'react-router';

import TodoAppContext from '../context/TodoAppContext';

export const useAvatar = () => {
  const [userAvatar, setUserAvatar] = useState('');
  const inputFileRef = useRef(null);

  const { user, setUser } = useContext(TodoAppContext);
  const history = useHistory();

  const handleFileChange = () => {
    const file = inputFileRef.current.files[0];
    const userAvatar = URL.createObjectURL(file);
    setUserAvatar(userAvatar);
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    setUser({
      ...user,
      avatar: userAvatar,
    });

    userAvatar && alert('Successfully updated');
    history.goBack();
  };

  return {
    userAvatar,
    inputFileRef,
    handleFileChange,
    handleUpdateUser,
  };
};
