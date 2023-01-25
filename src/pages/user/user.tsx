import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { setPublicRouteAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import React, { useEffect } from 'react';

export interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  function handleBeforeUnload() {
    dispatch(setPublicRouteAction(false));
  }
  return (
    <div>
      <h1>User page content</h1>
    </div>
  );
};
