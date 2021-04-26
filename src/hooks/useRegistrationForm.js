import { useState } from 'react';

export const useRegistrationForm = () => {
  const [userName, setUserName] = useState('');

  const handleInputChange = ({ target }) => {
    setUserName(target.value);
  };

  const resetForm = () => {
    setUserName('');
  };

  return {
    userName,
    handleInputChange,
    resetForm,
  };
};
