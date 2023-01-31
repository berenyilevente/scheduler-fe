import {
  AuthActionTypes,
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
  isAuthenticated: boolean;
}
const defaultAuthState: IDefaultAuthState = {
  isLoading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
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
    default:
      return state;
  }
};
export default AuthReducer;
