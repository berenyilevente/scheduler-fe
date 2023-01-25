import { User } from '@/pages';
import { PublicRouteUrl } from '@/utils';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
export interface PublicRoutesProps {}
const PublicRoutes: React.FC<PublicRoutesProps> = () => {
  return (
    <Routes>
      <Route path={PublicRouteUrl.User} element={<User />} />
    </Routes>
  );
};
export default PublicRoutes;
