import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header';

import Home from '../pages/home/Home';
import CreateTodo from '../pages/createTodo/CreateTodo';
import UpdateTodo from '../pages/updateTodo/UpdateTodo';
import UpdateUserAvatar from '../pages/updateUserAvatar/UpdateUserAvatar';

const HomeRoutes = () => {
  return (
    <>
      <Header />

      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/createTodo' component={CreateTodo} />
        <Route exact path='/updateTodo/:todoId' component={UpdateTodo} />
        <Route
          exact
          path='/updateAvatar/:userId'
          component={UpdateUserAvatar}
        />
        <Redirect to='/home' />
      </Switch>
    </>
  );
};

export default HomeRoutes;
