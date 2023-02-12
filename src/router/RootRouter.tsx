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
import { AppState } from '@/redux/store';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { Navigation } from '@/components';
import { CalendarPage } from '@/pages';

export interface RootRouterProps {}
export const RootRouter: React.FC<RootRouterProps> = () => {
  const { accessToken } = useSelector((state: AppState) => state.auth);

  return (
    <Routes>
      <Route
        path={PublicRouteUrl.Home}
        element={
          accessToken ? (
            <PrivateRoute
              component={<Dashboard />}
              isAuthenticated={!!accessToken}
            />
          ) : (
            <PublicRoute component={<Login />} />
          )
        }
      />
      <Route
        path={PrivateRouteUrl.Dashboard}
        element={
          <PrivateRoute
            component={<Dashboard />}
            isAuthenticated={!!accessToken}
          />
        }
      />
      <Route
        path={PrivateRouteUrl.BookingLayouts}
        element={
          <PrivateRoute
            component={<BookingLayouts />}
            isAuthenticated={!!accessToken}
          />
        }
      />
      <Route
        path={PrivateRouteUrl.Admin}
        element={
          <PrivateRoute component={<Admin />} isAuthenticated={!!accessToken} />
        }
      />
      <Route
        path={`${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.CreateBookingLayout}`}
        element={
          <PrivateRoute
            component={<CreateBookingLayout />}
            isAuthenticated={!!accessToken}
          />
        }
      />
      <Route
        path={`${PrivateRouteUrl.BookingLayouts}${PrivateRouteUrl.EditBookingLayout}`}
        element={
          <PrivateRoute
            component={<EditBookingLayout />}
            isAuthenticated={!!accessToken}
          />
        }
      />
      <Route
        path={PrivateRouteUrl.BookingLayoutById}
        element={
          <PrivateRoute
            component={<BookingLayouts />}
            isAuthenticated={!!accessToken}
          />
        }
      />
      <Route
        path={PrivateRouteUrl.Calendar}
        element={
          <PrivateRoute
            component={<CalendarPage />}
            isAuthenticated={!!accessToken}
          />
        }
      />

      <Route
        path={PublicRouteUrl.User}
        element={<PublicRoute component={<User />} />}
      />
      <Route
        path={PublicRouteUrl.NewBooking}
        element={<PublicRoute component={<BookingPage />} />}
      />
      <Route
        path={PublicRouteUrl.Login}
        element={<PublicRoute component={<Login />} />}
      />
      <Route
        path={PublicRouteUrl.Register}
        element={<PublicRoute component={<Register />} />}
      />
    </Routes>
  );
};
