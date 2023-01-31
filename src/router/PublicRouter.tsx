import { User, Login, Register } from '@/pages';
import { PublicRouteUrl } from '@/utils';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
export interface PublicRoutesProps {}
const PublicRoutes: React.FC<PublicRoutesProps> = () => {
  return (
    <Routes>
      <Route path={PublicRouteUrl.User} element={<User />} />
      <Route path={PublicRouteUrl.Login} element={<Login />} />
      <Route path={PublicRouteUrl.Register} element={<Register />} />
    </Routes>
  );
};
export default PublicRoutes;
