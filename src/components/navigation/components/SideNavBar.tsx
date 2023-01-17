import React from 'react';
import { NavLink } from '@/components';
import { RouteUrl } from '@/utils';

export interface SideNavBarProps {}

export const SideNavBar: React.FC<SideNavBarProps> = () => {
  return (
    <div className="flex flex-col gap-4 bg-white h-full w-min pr-12 pt-2 shadow-lg">
      <NavLink linkTo={RouteUrl.Calendar} name="Calendar" iconType="calendar" />
      <NavLink linkTo={RouteUrl.Settings} name="Settings" iconType="settings" />
      <NavLink linkTo={RouteUrl.Admin} name="Admin" iconType="admin" />
    </div>
  );
};
