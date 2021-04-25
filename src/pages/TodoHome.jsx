import React from 'react';
import { Link } from 'react-router-dom';

const TodoHome = () => {
  return (
    <div>
      <h1>Todo Home</h1>
      <hr />
      <Link to='/todoAppList'>Enter</Link>
    </div>
  );
};

export default TodoHome;
