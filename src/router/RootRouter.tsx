import { Routes, Route } from 'react-router-dom';
import { Dashboard, BookingLayouts, Admin } from '@/pages';
import { PrivateRouteUrl } from '@/utils';
import { CreateBookingLayout } from '@/pages/admin/booking-layouts/pages/create-booking-layout/CreateBookingLayout';
import EditBookingLayout from '@/pages/admin/booking-layouts/pages/edit-booking-layout/EditBookingLayout';

export interface RootRouterProps {}
export const RootRouter: React.FC<RootRouterProps> = () => {
  return (
    <Routes>
      <Route path={PrivateRouteUrl.Home} element={<Dashboard />} />
      <Route path={PrivateRouteUrl.Dashboard} element={<Dashboard />} />
      <Route
        path={PrivateRouteUrl.BookingLayouts}
        element={<BookingLayouts />}
      />
      <Route path={PrivateRouteUrl.Admin} element={<Admin />} />
      <Route
        path={`${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.CreateBookingLayout}`}
        element={<CreateBookingLayout />}
      />
      <Route
        path={`${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.EditBookingLayout}`}
        element={<EditBookingLayout />}
      />
      <Route
        path={PrivateRouteUrl.BookingLayoutById}
        element={<BookingLayouts />}
      />
    </Routes>
  );
};
