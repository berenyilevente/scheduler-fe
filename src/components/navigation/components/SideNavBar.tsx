import React from 'react';
import { NavLink } from '@/components';
import { PrivateRouteUrl } from '@/utils';

export interface SideNavBarProps {}

export const SideNavBar: React.FC<SideNavBarProps> = () => {
  return (
    <div className="flex flex-col gap-4 bg-white h-full w-min pr-12 pt-2 shadow-lg whitespace-nowrap">
      <NavLink
        linkTo={PrivateRouteUrl.Dashboard}
        name="Dashboard"
        iconType="dashboard"
      />
      <NavLink
        linkTo={PrivateRouteUrl.BookingLayouts}
        name="Booking Layouts"
        iconType="time"
      />
      <NavLink linkTo={PrivateRouteUrl.Admin} name="Admin" iconType="admin" />
    </div>
  );
};
