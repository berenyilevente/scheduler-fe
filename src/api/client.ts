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
  getBookingLayoutUserEndpoint,
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
  getBookingLayoutUser = getBookingLayoutUserEndpoint;
}

export default new Client();
