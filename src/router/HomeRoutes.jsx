import { Routes, Route, Navigate } from 'react-router-dom';

import Header from '../components/Header';

import Tasks from '../pages/task/List';
import Create from '../pages/task/Create';
import Update from '../pages/task/Update';

import Profile from '../pages/user/Profile';
import UpdateAvatar from '../pages/user/UpdateAvatar';
import UpdateName from '../pages/user/UpdateName';
import UpdatePassword from '../pages/user/UpdatePassword';

const HomeRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/create' element={<Create />} />
        <Route path='/tasks/:todoId/update' element={<Update />} />

        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/profile/updateAvatar' element={<UpdateAvatar />} />
        <Route path='/user/profile/updateName' element={<UpdateName />} />
        <Route path='/user/profile/updatePassword' element={<UpdatePassword />} />

        <Route path='*' element={<Navigate to='/tasks' />} />
      </Routes>
    </>
  );
};

export default HomeRoutes;
