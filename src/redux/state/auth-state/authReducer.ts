import { UserArgs } from '@/utils';
import {
  AuthActionTypes,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
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
  userId: string;
  user: UserArgs;
}

const defaultAuthState: IDefaultAuthState = {
  isLoading: false,
  error: null,
  accessToken: '',
  refreshToken: '',
  isAuthenticated: false,
  user: { email: '', _id: '' },
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
        user: action.payload,
        error: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        error: null,
      };
    case REFRESH_TOKEN_FAILURE:
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
