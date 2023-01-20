import {
  getInputsEndpoint,
  postInputEndpoint,
  deleteInputEndpoint,
  getBookingLayoutEndpoint,
  postBookingLayoutEndpoint,
} from './endpoints/endpoints';

class Client {
  getInputs = getInputsEndpoint;
  postInput = postInputEndpoint;
  deleteInput = deleteInputEndpoint;
  getBookingLayout = getBookingLayoutEndpoint;
  postBookingLayout = postBookingLayoutEndpoint;
}

export default new Client();
