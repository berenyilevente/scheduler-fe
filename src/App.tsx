import { Routes, Route } from 'react-router-dom';
import { Dashboard, BookingLayouts, Admin } from '@/pages';
import { RouteUrl } from '@/utils';
import InputSettingsPage from './pages/admin/booking-layouts/pages/input-settings/InputSettings';

function App() {
  return (
    <div>
      <Routes>
        <Route path={RouteUrl.Dashboard} element={<Dashboard />} />
        <Route path={RouteUrl.BookingLayouts} element={<BookingLayouts />} />
        <Route path={RouteUrl.Admin} element={<Admin />} />
        <Route
          path={`${RouteUrl.BookingLayouts}/${RouteUrl.InputSettings}`}
          element={<InputSettingsPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
