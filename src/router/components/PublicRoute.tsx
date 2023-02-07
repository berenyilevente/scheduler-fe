import { useAppDispatch } from '@/redux/hooks/useAppDispatch';
import { logoutAction } from '@/redux/state/auth-state/authActions';
import { AppState } from '@/redux/store';
import { FC, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';

interface PublicRouteProps {
  component: ReactElement;
}

const PublicRoute: FC<PublicRouteProps> = ({ component }) => {
  const { accessToken } = useSelector((state: AppState) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (accessToken) {
      dispatch(logoutAction());
    }
  }, [dispatch, accessToken]);

  return component;
};

export default PublicRoute;
