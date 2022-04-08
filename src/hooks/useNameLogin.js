import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import TodoAppContext from '../context/TodoAppContext';

import { useAlerts } from './useAlerts';

export const useNameLogin = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  const { user, setUser } = useContext(TodoAppContext);
  const { alertSuccess, alertError } = useAlerts();

  const handleInputChange = ({ target }) => {
    setUserName(target.value);
  };

  const resetForm = () => {
    setUserName('');
  };

  const loginUser = () => {
    alertSuccess('Iniciando Sesión...', 600);

    setUser({
      ...user,
      name: userName.trim(),
      isLogged: true,
      userId: Date.now(),
    });

    resetForm();
    navigate('/tasks');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName.trim()) {
      alertError('Debes ingresar tu nombre');
      return;
    }

    loginUser();
  };

  return {
    userName,
    handleInputChange,
    handleSubmit,
  };
};
