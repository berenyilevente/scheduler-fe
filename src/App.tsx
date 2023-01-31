import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigation } from './components';
import { AppState } from './redux/store';
import PublicRouter from './router/PublicRouter';
import { RootRouter } from './router/RootRouter';

function App() {
  const { accessToken } = useSelector((state: AppState) => state.auth);

  return accessToken ? (
    <Navigation children={<RootRouter />} />
  ) : (
    <PublicRouter />
  );
}

export default App;
