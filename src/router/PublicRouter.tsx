import { User, Login } from '@/pages';
import { PublicRouteUrl } from '@/utils';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
export interface PublicRoutesProps {}
const PublicRoutes: React.FC<PublicRoutesProps> = () => {
  return (
    <Routes>
      <Route path={PublicRouteUrl.User} element={<User />} />
      <Route path={PublicRouteUrl.Login} element={<Login />} />
    </Routes>
  );
};
export default PublicRoutes;
