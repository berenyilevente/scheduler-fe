import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from './components';
import { AppState, store } from './redux/store';
import PublicRouter from './router/PublicRouter';
import { RootRouter } from './router/RootRouter';
import { useIsFirstRender } from '@/utils';
import { setupInterceptors } from './api/utils/functions/interceptors';

function App() {
  const { accessToken } = useSelector((state: AppState) => state.auth);
  const isFirstRender = useIsFirstRender();
  useEffect(() => {
    if (isFirstRender) {
      setupInterceptors(store);
    }
  }, [isFirstRender]);

  return accessToken ? (
    <Navigation children={<RootRouter />} />
  ) : (
    <PublicRouter />
  );
}

export default App;
