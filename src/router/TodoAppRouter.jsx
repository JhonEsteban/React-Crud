import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import TodoHome from '../pages/TodoHome';
import TodoAppList from '../pages/TodoAppList';
import AddTodo from '../pages/AddTodo';
import UpdateTodo from '../pages/UpdateTodo';

const TodoAppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/todoHome' component={TodoHome} />
          <Route exact path='/todoAppList' component={TodoAppList} />
          <Route exact path='/addTodo' component={AddTodo} />
          <Route exact path='/updateTodo/:todoId' component={UpdateTodo} />
          <Redirect to='/todoHome' />
        </Switch>
      </div>
    </Router>
  );
};

export default TodoAppRouter;
