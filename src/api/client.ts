import {
  getInputsEndpoint,
  postInputEndpoint,
  deleteInputEndpoint,
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
} from './endpoints/endpoints';

class Client {
  getInputs = getInputsEndpoint;
  postInput = postInputEndpoint;
  deleteInput = deleteInputEndpoint;
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
}

export default new Client();
