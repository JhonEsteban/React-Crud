import { useContext, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import TodoAppContext from '../context/TodoAppContext';

import { useAlerts } from './useAlerts';

export const useAvatar = () => {
  const history = useHistory();

  const [userAvatar, setUserAvatar] = useState('');
  const inputFileRef = useRef(null);

  const { user, setUser } = useContext(TodoAppContext);
  const { alertSuccess } = useAlerts();

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

    userAvatar && alertSuccess('Avatar Actualizado', 600);
    history.goBack();
  };

  return {
    userAvatar,
    inputFileRef,
    handleFileChange,
    handleUpdateUser,
  };
};
