import React from 'react';

import '../assets/styles/components/TodoCard.scss';

const TodoCard = ({ name, description }) => {
  return (
    <article className='todo-card'>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <button>Completar</button>
        <button>Eliminar</button>
      </div>
    </article>
  );
};

export default TodoCard;
