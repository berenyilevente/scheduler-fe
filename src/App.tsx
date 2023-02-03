import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from './components';
import { AppState, store } from './redux/store';
import PublicRouter from './router/PublicRouter';
import { RootRouter } from './router/RootRouter';
import { PublicRouteUrl } from '@/utils';
import { useAppDispatch } from './redux/hooks/useAppDispatch';
import { logoutAction } from './redux/state/auth-state/authActions';
import { useNavigate } from 'react-router-dom';

function App() {
  const { accessToken } = useSelector((state: AppState) => state.auth);
  const { error } = useSelector((state: AppState) => state.bookingLayouts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  //TODO handle token expiry better
  useEffect(() => {
    if (error?.includes('401')) {
      dispatch(logoutAction());
      navigate(PublicRouteUrl.Login);
    }
  }, [error]);

  return (
    <Navigation children={<RootRouter />} isAuthenticated={!!accessToken} />
  );
}

export default App;
