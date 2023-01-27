import React from 'react';
import { SideNavBar, TopNavBar } from '@/components';
import PublicRoutes from '@/router/PublicRouter';

export interface NavigationProps {
  children: JSX.Element | JSX.Element[];
}

export const Navigation: React.FC<NavigationProps> = ({ children }) => {
  const publicRoute = false;
  return publicRoute === false ? (
    <div className="absolute top-0 left-0 right-0">
      <div className="grid col-span-2 gap-x-0">
        <TopNavBar />
      </div>
      <div className="flex h-screen">
        <SideNavBar />
        <div className="m-8 w-full">{children}</div>
      </div>
    </div>
  ) : (
    <PublicRoutes />
  );
};
