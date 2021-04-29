import React, { useContext } from 'react';
import TodoAppContext from '../context/TodoAppContext';

const TodoForm = ({ name, description, handleInputChange, handleSubmit }) => {
  const { todoUpdate } = useContext(TodoAppContext);

  return (
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

      <button>{todoUpdate ? 'Update Todo' : 'Save Todo'}</button>
    </form>
  );
};

export default TodoForm;
