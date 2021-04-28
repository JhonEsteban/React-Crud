import { useContext, useState } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import { useHistory } from 'react-router';

export const useNameLogin = () => {
  const [userName, setUserName] = useState('');
  const { user, setUser } = useContext(TodoAppContext);

  const history = useHistory();

  const handleInputChange = ({ target }) => {
    setUserName(target.value);
  };

  const resetForm = () => {
    setUserName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      return;
    }

    setUser({
      ...user,
      name: userName.trim(),
      isLogged: true,
    });

    resetForm();
    history.replace('/home');
  };

  return {
    userName,
    handleInputChange,
    handleSubmit,
  };
};
