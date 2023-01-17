import { Routes, Route } from 'react-router-dom';
import { Calendar, Settings, Admin } from '@/pages';
import { RouteUrl } from '@/utils';

function App() {
  return (
    <div>
      <Routes>
        <Route path={RouteUrl.Calendar} element={<Calendar />} />
        <Route path={RouteUrl.Settings} element={<Settings />} />
        <Route path={RouteUrl.Admin} element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
