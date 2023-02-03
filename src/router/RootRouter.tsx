import { Routes, Route } from 'react-router-dom';
import {
  Dashboard,
  BookingLayouts,
  Admin,
  Login,
  Register,
  User,
} from '@/pages';
import { PrivateRouteUrl, PublicRouteUrl } from '@/utils';
import { CreateBookingLayout } from '@/pages/admin/booking-layouts/pages/create-booking-layout/CreateBookingLayout';
import EditBookingLayout from '@/pages/admin/booking-layouts/pages/edit-booking-layout/EditBookingLayout';
import BookingPage from '@/pages/user/BookingPage';

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
      <Route path={PublicRouteUrl.User} element={<User />} />
      <Route path={PublicRouteUrl.NewBooking} element={<BookingPage />} />
      <Route path={PublicRouteUrl.Home} element={<Login />} />
      <Route path={PublicRouteUrl.Login} element={<Login />} />
      <Route path={PublicRouteUrl.Register} element={<Register />} />
    </Routes>
  );
};
