import { NavLink, Icon } from '@/components';
import { RouteUrl } from '@/utils';
import React from 'react';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  return (
    <div className="flex justify-between pr-4 bg-white py-2 top-0 left-0 right-0 border-b border-slate-300 h-max">
      <NavLink iconType="siteLogo" linkTo={RouteUrl.Calendar}></NavLink>
      <div className="flex gap-x-1 items-center">
        <p>Username</p>
        <Icon iconType="arrowDown"></Icon>
      </div>
    </div>
  );
};
