import React, { useContext } from 'react';

import '../assets/styles/components/TodoList.scss';

import TodoAppContext from '../context/TodoAppContext';

import TodoCard from './TodoCard';

const TodoList = () => {
  const { todos } = useContext(TodoAppContext);

  return (
    <div className='todo-list'>
      <h1>TodoList</h1>

      {todos.length === 0 && <p>No hay todos agregados!</p>}

      <section className='todo-list__container'>
        {todos.map((todo) => (
          <TodoCard key={todo.id} {...todo} />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
