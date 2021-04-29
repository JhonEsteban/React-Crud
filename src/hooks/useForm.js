import { useContext, useState } from 'react';

import TodoAppContext from '../context/TodoAppContext';

import { useHistory } from 'react-router';
import { types } from '../types';

const initialState = {
  name: '',
  description: '',
};

export const useForm = () => {
  const [formValues, setFormValues] = useState(initialState);
  const { name, description } = formValues;

  const { dispatch } = useContext(TodoAppContext);

  const history = useHistory();

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !description.trim()) {
      alert('Debes llenar los campos');
      return;
    }

    dispatch({
      type: types.addTodo,
      payload: {
        id: Date.now(),
        name,
        description,
        completed: false,
      },
    });

    history.goBack();
  };

  return {
    name,
    description,
    handleInputChange,
    handleSubmit,
  };
};
