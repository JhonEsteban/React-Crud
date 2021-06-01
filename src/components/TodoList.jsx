import React, { useContext } from 'react';

import '../assets/styles/components/TodoList.scss';

import TodoAppContext from '../context/TodoAppContext';

import EmptyTodoList from './EmptyTodoList';

import TodoCard from './TodoCard';

const TodoList = () => {
  const { todos } = useContext(TodoAppContext);

  return (
    <section className='todo-list'>
      <h1 className='todo-list__title'>Lista de tareas</h1>

      {todos.length === 0 && <EmptyTodoList />}

      <section className='todo-list__container'>
        {todos.map((todo) => (
          <TodoCard key={todo.id} todo={todo} />
        ))}
      </section>
    </section>
  );
};

export default TodoList;
