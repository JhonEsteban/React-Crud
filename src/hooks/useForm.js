import { useState } from 'react';

const initialState = {
  name: '',
  description: '',
};

export const useForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { name, description } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const resetForm = () => {
    setFormValues(initialState);
  };

  return {
    name,
    description,
    handleInputChange,
    formValues,
    setFormValues,
    resetForm,
  };
};
