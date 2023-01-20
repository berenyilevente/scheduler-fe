import {
  GET_INPUTS_REQUEST,
  GET_INPUTS_SUCCESS,
  GET_INPUTS_FAILURE,
  POST_INPUT_REQUEST,
  POST_INPUT_SUCCESS,
  POST_INPUT_FAILURE,
  DELETE_INPUT_FAILURE,
  DELETE_INPUT_REQUEST,
  DELETE_INPUT_SUCCESS,
} from './inputActionTypes';
import client from '@/api/client';
import { Dispatch } from 'redux';
import { CreateInputArgs } from '@/utils';

export const getInputAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_INPUTS_REQUEST,
  });
  try {
    const res = await client.getInputs();
    dispatch({
      type: GET_INPUTS_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_INPUTS_FAILURE,
      error: error.message,
    });
  }
};

export const postInputAction =
  (inputField: CreateInputArgs) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_INPUT_REQUEST,
    });
    try {
      const res = await client.postInput(inputField);
      dispatch({
        type: POST_INPUT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_INPUT_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteInputAction = (id: string) => async (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_INPUT_REQUEST,
  });
  try {
    await client.deleteInput(id);
    dispatch({
      type: DELETE_INPUT_SUCCESS,
    });
  } catch (error: any) {
    dispatch({
      type: DELETE_INPUT_FAILURE,
      error: error.message,
    });
  }
};
