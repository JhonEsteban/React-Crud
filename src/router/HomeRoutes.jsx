import { Routes, Route, Navigate } from 'react-router-dom';

import HomeLayout from '../components/app/HomeLayout';

import Tasks from '../pages/task/List';
import Create from '../pages/task/Create';
import Update from '../pages/task/Update';

import Profile from '../pages/user/Profile';
import UpdateName from '../pages/user/UpdateName';
import UpdatePassword from '../pages/user/UpdatePassword';

const HomeRoutes = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/tasks/create' element={<Create />} />
        <Route path='/tasks/:taskId/update' element={<Update />} />

        <Route path='/user/profile' element={<Profile />} />
        <Route path='/user/profile/update/name' element={<UpdateName />} />
        <Route
          path='/user/profile/update/password'
          element={<UpdatePassword />}
        />

        <Route path='*' element={<Navigate to='/tasks' />} />
      </Routes>
    </HomeLayout>
  );
};

export default HomeRoutes;
