import { useEffect, useState } from 'react';

const initialUser = {
  name: '',
  avatar: '',
  isLogged: false,
};

const initialState = () => {
  return JSON.parse(localStorage.getItem('user')) || initialUser;
};

export const useUserSession = () => {
  const [user, setUser] = useState(initialState);

  const resetUser = () => {
    setUser(initialUser);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return {
    user,
    setUser,
    resetUser,
  };
};
