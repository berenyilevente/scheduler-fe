import { NavLink, Button } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { logoutAction } from '@/redux/state/auth-state/authActions';
import { PrivateRouteUrl, PublicRouteUrl } from '@/utils';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface TopNavBarProps {}

export const TopNavBar: React.FC<TopNavBarProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  function onOpen(): void {
    setIsOpen(!isOpen);
  }

  function onLogout(): void {
    navigate(PublicRouteUrl.Login);
    dispatch(logoutAction());
  }

  return (
    <div className="flex justify-between pr-4 bg-white py-2 top-0 left-0 right-0 border-b border-slate-300 h-max">
      <div>
        <NavLink iconType="siteLogo" linkTo={PrivateRouteUrl.Dashboard} />
      </div>
      <div className="flex gap-x-1 items-center relative">
        <Button
          variant="text"
          iconType="arrowDown"
          iconPosition="right"
          onClick={onOpen}
        >
          User
        </Button>
        {isOpen && (
          <div className="absolute right-1 top-10 w-min rounded-md shadow-lg z-50 bg-white p-1">
            <div>
              <Button variant="text" iconType="logout" onClick={onLogout}>
                Logout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
