import { NavLink, Icon, Button } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { logoutAction } from '@/redux/state/auth-state/authActions';
import { PrivateRouteUrl, PublicRouteUrl } from '@/utils';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function onLogout(): void {
    navigate(PublicRouteUrl.Login);
    dispatch(logoutAction());
  }

  return (
    <div className="flex justify-between pr-4 bg-white py-2 top-0 left-0 right-0 border-b border-slate-300 h-max">
      <NavLink iconType="siteLogo" linkTo={PrivateRouteUrl.Dashboard} />
      <div className="flex gap-x-1 items-center">
        <p>Username</p>
        <Icon iconType="arrowDown" />
        <Button variant="text" iconType="logout" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};
