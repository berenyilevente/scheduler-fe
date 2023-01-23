import client from '@/api/client';
import {
  GET_BOOKING_LAYOUT_REQUEST,
  GET_BOOKING_LAYOUT_SUCCESS,
  GET_BOOKING_LAYOUT_FAILURE,
  POST_BOOKING_LAYOUT_REQUEST,
  POST_BOOKING_LAYOUT_SUCCESS,
  POST_BOOKING_LAYOUT_FAILURE,
  GET_BOOKING_LAYOUT_BY_ID_FAILURE,
  GET_BOOKING_LAYOUT_BY_ID_REQUEST,
  GET_BOOKING_LAYOUT_BY_ID_SUCCESS,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_REQUEST,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_FAILURE,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_SUCCESS,
  DELETE_BOOKING_LAYOUT_FAILURE,
  DELETE_BOOKING_LAYOUT_REQUEST,
  DELETE_BOOKING_LAYOUT_SUCCESS,
} from './bookingLayoutActionTypes';
import { Dispatch } from 'redux';
import { PostBookingLayoutArgs } from '@/utils';

export const getBookingLayoutAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_BOOKING_LAYOUT_REQUEST,
  });
  try {
    const res = await client.getBookingLayout();
    dispatch({
      type: GET_BOOKING_LAYOUT_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_BOOKING_LAYOUT_FAILURE,
      error: error.message,
    });
  }
};

export const getBookingLayoutByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_BOOKING_LAYOUT_BY_ID_REQUEST,
    });
    try {
      const res = await client.getBookingLayoutById(id);
      dispatch({
        type: GET_BOOKING_LAYOUT_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_BOOKING_LAYOUT_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postBookingLayoutAction =
  (bookingLayout: PostBookingLayoutArgs) => async (dispatch: Dispatch) => {
    dispatch({
      type: POST_BOOKING_LAYOUT_REQUEST,
    });
    try {
      const res = await client.postBookingLayout(bookingLayout);
      dispatch({
        type: POST_BOOKING_LAYOUT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: POST_BOOKING_LAYOUT_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteInputFromBookingLayoutAction =
  (bookingLayoutId: string, inputId: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELTE_INPUT_FROM_BOOKING_LAYOUT_REQUEST,
    });
    try {
      const res = await client.deleteInputFromBookingLayout(
        bookingLayoutId,
        inputId
      );
      dispatch({
        type: DELTE_INPUT_FROM_BOOKING_LAYOUT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: DELTE_INPUT_FROM_BOOKING_LAYOUT_FAILURE,
        error: error.message,
      });
    }
  };

export const deleteBookingLayoutAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_BOOKING_LAYOUT_REQUEST,
    });
    try {
      const res = await client.deleteBookingLayout(id);
      dispatch({
        type: DELETE_BOOKING_LAYOUT_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_BOOKING_LAYOUT_FAILURE,
        error: error.message,
      });
    }
  };
