import { store } from '@/redux/store';
import {
  getBookingLayoutEndpoint,
  postBookingLayoutEndpoint,
  getBookingLayoutByIdEndpoint,
  deleteInputFromBookingLayoutEndpoint,
  deleteBookingLayoutEndpoint,
  patchBookingLayoutEndpoint,
  loginEndpoint,
  registerEndpoint,
  getUserEndpoint,
  getRefreshTokenEndpoint,
  getBookingsEndpoint,
  postBookingEndpoint,
  getBookingByIdController,
  deleteBookingEndpoint,
  getWorkingHoursEndpoint,
  postWorkingHoursEndpoint,
} from './endpoints';
import { setupInterceptors } from './utils/functions/interceptors';
setupInterceptors(store);
class Client {
  deleteInputFromBookingLayout = deleteInputFromBookingLayoutEndpoint;
  getBookingLayout = getBookingLayoutEndpoint;
  getBookingLayoutById = getBookingLayoutByIdEndpoint;
  postBookingLayout = postBookingLayoutEndpoint;
  deleteBookingLayout = deleteBookingLayoutEndpoint;
  patchBookingLayout = patchBookingLayoutEndpoint;
  login = loginEndpoint;
  register = registerEndpoint;
  getUser = getUserEndpoint;
  getRefreshToken = getRefreshTokenEndpoint;
  getBookings = getBookingsEndpoint;
  getBookingById = getBookingByIdController;
  postBooking = postBookingEndpoint;
  deleteBooking = deleteBookingEndpoint;
  getWorkingHours = getWorkingHoursEndpoint;
  postWorkingHours = postWorkingHoursEndpoint;
}

export default new Client();
