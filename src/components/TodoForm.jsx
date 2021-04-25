import React from 'react';

const TodoForm = () => {
  return (
    <div>
      <div>
        <h1>TodoForm</h1>
        <button>Return</button>
      </div>

      <form>
        <input type='text' placeholder='name' />
        <textarea placeholder='Description'></textarea>
        <button>Save Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
