import React from 'react';

import { Link } from 'react-router-dom';

import { useForm } from '../hooks/useForm';

const TodoForm = () => {
  const { name, description, handleInputChange, handleSubmit } = useForm();

  return (
    <div>
      <Link to='/home'>Return</Link>

      <form onSubmit={handleSubmit}>
        <p>
          <input
            onChange={handleInputChange}
            value={name}
            name='name'
            type='text'
            placeholder='Name'
          />
        </p>
        <p>
          <textarea
            onChange={handleInputChange}
            value={description}
            name='description'
            placeholder='Description'
          ></textarea>
        </p>

        <button>Save Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
