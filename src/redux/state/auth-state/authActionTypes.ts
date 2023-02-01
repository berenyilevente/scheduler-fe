import { LoginArgs, LoginResponse, RegisterArgs, UserArgs } from '@/utils';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export interface LoginRequest {
  type: typeof LOGIN_REQUEST;
}
export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: LoginResponse;
}
export interface LoginFailure {
  type: typeof LOGIN_FAILURE;
  error: string;
}

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export interface RegisterRequest {
  type: typeof REGISTER_REQUEST;
}
export interface RegisterSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: RegisterArgs;
}
export interface RegisterFailure {
  type: typeof REGISTER_FAILURE;
  error: string;
}

export const LOGOUT = 'LOGOUT';
export interface Logout {
  type: typeof LOGOUT;
}

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export interface GetUserRequest {
  type: typeof GET_USER_REQUEST;
}
export interface GetUserSuccess {
  type: typeof GET_USER_SUCCESS;
  payload: UserArgs;
}
export interface GetUserFailure {
  type: typeof GET_USER_FAILURE;
  error: string;
}

export type AuthActionTypes =
  | LoginRequest
  | LoginFailure
  | LoginSuccess
  | RegisterRequest
  | RegisterFailure
  | RegisterSuccess
  | Logout
  | GetUserRequest
  | GetUserFailure
  | GetUserSuccess;
