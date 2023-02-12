import React from 'react';
import { NavLink } from '@/components';
import { PrivateRouteUrl, UserRole } from '@/utils';
import * as iconMap from '@/components/icon/icon-types';
import { useTranslation } from 'react-i18next';

interface Navigation {
  name: string;
  linkTo: string;
  iconType: keyof typeof iconMap;
}

export interface SideNavBarProps {}

export const SideNavBar: React.FC<SideNavBarProps> = () => {
  const { t } = useTranslation();

  const navLinks: Navigation[] = [
    {
      name: t('navigation.dashboard'),
      linkTo: PrivateRouteUrl.Dashboard,
      iconType: 'dashboard',
    },
    {
      name: t('navigation.calendar'),
      linkTo: PrivateRouteUrl.Calendar,
      iconType: 'calendar',
    },
    {
      name: t('navigation.bookingLayouts'),
      linkTo: PrivateRouteUrl.BookingLayouts,
      iconType: 'time',
    },
    {
      name: t('navigation.admin'),
      linkTo: PrivateRouteUrl.Admin,
      iconType: 'admin',
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-white h-full w-min pr-12 pt-2 shadow-lg whitespace-nowrap">
      {navLinks.map((navLink: Navigation, index) => (
        <NavLink
          key={index}
          name={navLink.name}
          linkTo={navLink.linkTo}
          iconType={navLink.iconType}
        />
      ))}
    </div>
  );
};
