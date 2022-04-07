import { Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header';

import Home from '../pages/home/Home';
import CreateTodo from '../pages/createTodo/CreateTodo';
import UpdateTodo from '../pages/updateTodo/UpdateTodo';
import UpdateUserAvatar from '../pages/updateUserAvatar/UpdateUserAvatar';

const HomeRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/createTodo' element={<CreateTodo />} />
        <Route path='/updateTodo/:todoId' element={<UpdateTodo />} />
        <Route path='/updateAvatar/:userId' element={<UpdateUserAvatar />} />

        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;
