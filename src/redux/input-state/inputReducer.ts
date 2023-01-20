import { CreateInputArgs, GetInputArgs } from '@/utils';
import {
  InputActionTypes,
  GET_INPUTS_FAILURE,
  GET_INPUTS_REQUEST,
  GET_INPUTS_SUCCESS,
  POST_INPUT_FAILURE,
  POST_INPUT_REQUEST,
  POST_INPUT_SUCCESS,
  DELETE_INPUT_FAILURE,
  DELETE_INPUT_REQUEST,
  DELETE_INPUT_SUCCESS,
} from './inputActionTypes';

export interface IDefaultInputState {
  isLoading: boolean;
  inputFields: GetInputArgs[];
  inputField: CreateInputArgs | undefined;
  error: string | null;
  createInputSuccess: boolean;
  deleteInputSuccess: boolean;
}

const defaultInputState: IDefaultInputState = {
  isLoading: false,
  createInputSuccess: false,
  deleteInputSuccess: false,
  inputFields: [],
  inputField: undefined,
  error: null,
};

const InputReducer = (
  state = defaultInputState,
  action: InputActionTypes
): IDefaultInputState => {
  switch (action.type) {
    case GET_INPUTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_INPUTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        inputFields: action.payload,
        error: null,
      };
    case GET_INPUTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case POST_INPUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        createInputSuccess: false,
        error: null,
      };
    case POST_INPUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createInputSuccess: true,
        inputField: action.payload,
        error: null,
      };
    case POST_INPUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        createInputSuccess: false,
        error: action.error,
      };

    case DELETE_INPUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        deleteInputSuccess: false,
        error: null,
      };
    case DELETE_INPUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteInputSuccess: true,
        error: null,
      };
    case DELETE_INPUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteInputSuccess: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default InputReducer;
