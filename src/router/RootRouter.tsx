import { Routes, Route } from 'react-router-dom';
import { Dashboard, BookingLayouts, Admin } from '@/pages';
import { RouteUrl } from '@/utils';
import { InputSettingsPage } from '@/pages/admin/booking-layouts/pages/input-settings/InputSettings';
import { CreateBookingLayout } from '@/pages/admin/booking-layouts/pages/create-booking-layout/CreateBookingLayout';
import EditBookingLayout from '@/pages/admin/booking-layouts/pages/edit-booking-layout/EditBookingLayout';

export interface RootRouterProps {}
export const RootRouter: React.FC<RootRouterProps> = () => {
  return (
    <Routes>
      <Route path={RouteUrl.Home} element={<Dashboard />} />
      <Route path={RouteUrl.Dashboard} element={<Dashboard />} />
      <Route path={RouteUrl.BookingLayouts} element={<BookingLayouts />} />
      <Route path={RouteUrl.Admin} element={<Admin />} />
      <Route
        path={`${RouteUrl.BookingLayouts}${RouteUrl.InputSettings}`}
        element={<InputSettingsPage />}
      />
      <Route
        path={`${RouteUrl.BookingLayouts}${RouteUrl.CreateBookingLayout}`}
        element={<CreateBookingLayout />}
      />
      <Route
        path={`${RouteUrl.BookingLayouts}${RouteUrl.EditBookingLayout}`}
        element={<EditBookingLayout />}
      />
      <Route path={RouteUrl.BookingLayoutById} element={<BookingLayouts />} />
    </Routes>
  );
};
