import { Button } from '@/components';
import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { getUserAction } from '@/redux/state/auth-state/authActions';
import { setPublicRouteAction } from '@/redux/state/booking-layout-state/bookingLayoutActions';
import { AppState } from '@/redux/store';
import { PublicRouteUrl } from '@/utils';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

export interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { apiKey, userId } = useSelector((state: AppState) => state.auth);

  useEffect(() => {
    dispatch(getUserAction(userId));
  }, []);

  function onBooking(apiKey: string): void {
    navigate(`${PublicRouteUrl.NewBooking}/${apiKey}`);
  }

  return (
    <div className="grid place-content-center mt-96">
      <Button variant="filled">
        <Link to={`${PublicRouteUrl.NewBooking}${apiKey}`} target="_blank">
          Create a booking
        </Link>
      </Button>
    </div>
  );
};
