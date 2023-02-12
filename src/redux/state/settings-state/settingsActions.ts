import client from '@/api/client';
import { Dispatch } from '@reduxjs/toolkit';
import {
  GET_WORKING_HOURS_REQUEST,
  GET_WORKING_HOURS_SUCCESS,
  GET_WORKING_HOURS_FAILURE,
  POST_WORKING_HOURS_FAILURE,
  POST_WORKING_HOURS_REQUEST,
  POST_WORKING_HOURS_SUCCESS,
} from './settingsActionTypes';

export const getWorkingHoursAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_WORKING_HOURS_REQUEST,
  });
  try {
    const res = await client.getWorkingHours();
    console.log(res);
    dispatch({
      type: GET_WORKING_HOURS_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_WORKING_HOURS_FAILURE,
      error: error.message,
    });
  }
};

export const postWorkingHoursAction =
  (workingHours: string[]) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_WORKING_HOURS_REQUEST,
    });
    try {
      await client.postWorkingHours(workingHours);
      dispatch({
        type: POST_WORKING_HOURS_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: POST_WORKING_HOURS_FAILURE,
        error: error.message,
      });
    }
  };
