export enum PrivateRouteUrl {
  Home = '/',
  Dashboard = '/admin/dashboard',
  Calendar = '/admin/calendar',
  Admin = '/admin',
  BookingLayouts = '/admin/booking-layouts',
  InputSettings = '/admin/input-settings',
  User = '/admin/appointment/:id',
  CreateBookingLayout = '/admin/create-booking-layout',
  EditBookingLayout = '/admin/edit-booking-layout/:id',
  BookingLayoutById = '/admin/booking-layout/:id',
}
export enum PublicRouteUrl {
  Home = '/',
  Login = '/login',
  User = '/user',
  Register = '/register',
  NewBooking = '/new-booking/:id',
}
