import { useState } from 'react';

const initialState = {
  state: false,
  message: '',
};

const useCustomFormError = () => {
  const [customError, setCustomError] = useState(initialState);

  const setNewError = (newError) => {
    setCustomError(newError);
  };

  const resetError = () => {
    setCustomError(initialState);
  };

  return {
    customError,
    setNewError,
    resetError,
  };
};

export default useCustomFormError;
