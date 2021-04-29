import React from 'react';

import '../assets/styles/pages/Home.scss';

import TodoList from '../components/TodoList';

const Home = ({ history }) => {
  const createTodo = () => {
    history.push('/createTodo');
  };

  return (
    <div className='home'>
      <div className='wrapper'>
        <div className='options'>
          <button onClick={createTodo}>Crear Todo</button>
          <button>Clear Todos</button>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Home;
