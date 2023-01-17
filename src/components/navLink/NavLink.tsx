import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components';
import * as iconMap from '../icon/icon-types';

export interface NavLinkProps {
  linkTo: string;
  name?: string;
  iconType?: keyof typeof iconMap;
}
export const NavLink: React.FC<NavLinkProps> = ({ linkTo, name, iconType }) => {
  return (
    <Link
      to={linkTo}
      className="w-full flex justify-start gap-x-4 items-center py-2 px-4"
    >
      {iconType && <Icon iconType={iconType} />}
      <div className="hover:underline">{name}</div>
    </Link>
  );
};
