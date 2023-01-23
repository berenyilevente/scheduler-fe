import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@/components';
import * as iconMap from '../icon/icon-types';

export interface NavLinkProps {
  linkTo: string;
  name?: string;
  iconType?: keyof typeof iconMap;
  className?: string;
}
export const NavLink: React.FC<NavLinkProps> = ({
  linkTo,
  name,
  iconType,
  className,
}) => {
  return (
    <Link
      to={linkTo}
      className={`w-full flex justify-start gap-x-4 items-center py-2 px-4 ${className}`}
    >
      {iconType && <Icon iconType={iconType} />}
      <div>{name}</div>
    </Link>
  );
};
