import { LoginArgs, LoginResponse, RegisterArgs } from '@/utils';

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
export type AuthActionTypes =
  | LoginRequest
  | LoginFailure
  | LoginSuccess
  | RegisterRequest
  | RegisterFailure
  | RegisterSuccess
  | Logout;
