import { useSelector } from 'react-redux';
import { Navigation } from './components';
import { AppState } from './redux/store';
import { RootRouter } from './router/RootRouter';

function App() {
  const { accessToken } = useSelector((state: AppState) => state.auth);

  return (
    <Navigation children={<RootRouter />} isAuthenticated={!!accessToken} />
  );
}

export default App;
