import {
  getInputsEndpoint,
  postInputEndpoint,
  deleteInputEndpoint,
  getBookingLayoutEndpoint,
  postBookingLayoutEndpoint,
  getBookingLayoutByIdEndpoint,
} from './endpoints/endpoints';

class Client {
  getInputs = getInputsEndpoint;
  postInput = postInputEndpoint;
  deleteInput = deleteInputEndpoint;
  getBookingLayout = getBookingLayoutEndpoint;
  getBookingLayoutById = getBookingLayoutByIdEndpoint;
  postBookingLayout = postBookingLayoutEndpoint;
}

export default new Client();