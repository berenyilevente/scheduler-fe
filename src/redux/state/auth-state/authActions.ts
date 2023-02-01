import client from '@/api/client';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
  GET_USER_REQUEST,
  GET_USER_FAILURE,
  GET_USER_SUCCESS,
} from './authActionTypes';
import { Dispatch } from 'redux';
import { LoginArgs, RegisterArgs, UserArgs } from '@/utils';
import { persistor } from '@/redux/store';

export const loginAction =
  (loginData: LoginArgs) => async (dispatch: Dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    try {
      const res = await client.login(loginData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: LOGIN_FAILURE,
        error: error.message,
      });
    }
  };

export const registerAction =
  (registerData: RegisterArgs) => async (dispatch: Dispatch) => {
    dispatch({
      type: REGISTER_REQUEST,
    });
    try {
      const res = await client.register(registerData);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: REGISTER_FAILURE,
        error: error.message,
      });
    }
  };

export const logoutAction = () => async (dispatch: Dispatch) => {
  await persistor.flush();
  await persistor.purge();
  dispatch({
    type: LOGOUT,
  });
};

export const getUserAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  try {
    const res = await client.getUser(id);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_USER_FAILURE,
      error: error.message,
    });
  }
};
