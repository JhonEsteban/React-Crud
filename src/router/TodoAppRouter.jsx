import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import TodoAppContext from '../context/TodoAppContext';

import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';

import Login from '../pages/Login';
import HomeRoutes from './HomeRoutes';

const TodoAppRouter = () => {
  const { user } = useContext(TodoAppContext);
  const { isLogged } = user;

  return (
    <Router>
      <Switch>
        <PublicRoutes
          exact
          path='/login'
          isLogged={isLogged}
          component={Login}
        />

        <PrivateRoutes path='/' isLogged={isLogged} component={HomeRoutes} />
      </Switch>
    </Router>
  );
};

export default TodoAppRouter;
