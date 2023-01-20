import {
  getInputsEndpoint,
  postInputEndpoint,
  deleteInputEndpoint,
} from './endpoints/endpoints';

class Client {
  getInputs = getInputsEndpoint;
  postInput = postInputEndpoint;
  deleteInput = deleteInputEndpoint;
}

export default new Client();
