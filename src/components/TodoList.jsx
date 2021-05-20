import React, { useContext } from 'react';

import '../assets/styles/components/TodoList.scss';

import TodoAppContext from '../context/TodoAppContext';

import TodoCard from './TodoCard';

const TodoList = () => {
  const { todos } = useContext(TodoAppContext);

  return (
    <div className='todo-list'>
      <h1>Lista de tareas</h1>

      {todos.length === 0 && <p>No hay tareas agregados!</p>}

      <section className='todo-list__container'>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
};

export default TodoList;
