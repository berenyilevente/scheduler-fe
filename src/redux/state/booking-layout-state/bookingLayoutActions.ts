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
  PATCH_BOOKING_LAYOUT_REQUEST,
  PATCH_BOOKING_LAYOUT_FAILURE,
  PATCH_BOOKING_LAYOUT_SUCCESS,
  SET_PUBLIC_ROUTE,
  GET_PUBLIC_ROUTE,
} from './bookingLayoutActionTypes';
import { Dispatch } from 'redux';
import { PatchBookingLayoutArgs, PostBookingLayoutArgs } from '@/utils';

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
      await client.postBookingLayout(bookingLayout);
      dispatch({
        type: POST_BOOKING_LAYOUT_SUCCESS,
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
      await client.deleteInputFromBookingLayout(bookingLayoutId, inputId);
      dispatch({
        type: DELTE_INPUT_FROM_BOOKING_LAYOUT_SUCCESS,
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
      await client.deleteBookingLayout(id);
      dispatch({
        type: DELETE_BOOKING_LAYOUT_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: DELETE_BOOKING_LAYOUT_FAILURE,
        error: error.message,
      });
    }
  };

export const patchBookingLayoutAction =
  (id: string, bookingLayout: PatchBookingLayoutArgs) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: PATCH_BOOKING_LAYOUT_REQUEST,
    });
    try {
      await client.patchBookingLayout(id, bookingLayout);
      dispatch({
        type: PATCH_BOOKING_LAYOUT_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: PATCH_BOOKING_LAYOUT_FAILURE,
        error: error.message,
      });
    }
  };

export const setPublicRouteAction =
  (publicRoute: boolean) => async (dispatch: Dispatch) => {
    dispatch({
      type: SET_PUBLIC_ROUTE,
      payload: publicRoute,
    });
  };
export const getPublicRouteAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_PUBLIC_ROUTE,
  });
};
