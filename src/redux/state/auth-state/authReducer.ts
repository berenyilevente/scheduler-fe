import {
  AuthActionTypes,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './authActionTypes';
export interface IDefaultAuthState {
  isLoading: boolean;
  error: string | null;
  accessToken: string;
  refreshToken: string;
  apiKey: string;
  isAuthenticated: boolean;
  userId: string;
}
const defaultAuthState: IDefaultAuthState = {
  isLoading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  apiKey: '',
  isAuthenticated: false,
  userId: '',
};
const AuthReducer = (
  state = defaultAuthState,
  action: AuthActionTypes
): IDefaultAuthState => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        userId: action.payload.user._id,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        accessToken: '',
        refreshToken: '',
        error: action.error,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case LOGOUT:
      return {
        ...state,
        accessToken: '',
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apiKey: action.payload.apiKey,
        error: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
export default AuthReducer;
