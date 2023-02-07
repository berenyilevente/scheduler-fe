import client from '@/api/client';
import { GetInputArgs } from '@/utils';
import { PostBooking } from '@/utils/interfaces/booking-interfaces';
import { Dispatch } from '@reduxjs/toolkit';
import {
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILURE,
  POST_BOOKING_FAILURE,
  POST_BOOKING_REQUEST,
  POST_BOOKING_SUCCESS,
  GET_BOOKING_BY_ID_FAILURE,
  GET_BOOKING_BY_ID_REQUEST,
  GET_BOOKING_BY_ID_SUCCESS,
} from './bookingActionTypes';

export const getBookingsAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: GET_BOOKING_REQUEST,
  });
  try {
    const res = await client.getBookings();
    dispatch({
      type: GET_BOOKING_SUCCESS,
      payload: res,
    });
  } catch (error: any) {
    dispatch({
      type: GET_BOOKING_FAILURE,
      error: error.message,
    });
  }
};

export const getBookingByIdAction =
  (id: string) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_BOOKING_BY_ID_REQUEST,
    });
    try {
      const res = await client.getBookingById(id);
      dispatch({
        type: GET_BOOKING_BY_ID_SUCCESS,
        payload: res,
      });
    } catch (error: any) {
      dispatch({
        type: GET_BOOKING_BY_ID_FAILURE,
        error: error.message,
      });
    }
  };

export const postBookingAction =
  (
    bookingId: string,
    bookingInputs: { inputType: string | null; value: string | null }[]
  ) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: POST_BOOKING_REQUEST,
    });
    try {
      await client.postBooking(bookingId, bookingInputs);
      dispatch({
        type: POST_BOOKING_SUCCESS,
      });
    } catch (error: any) {
      dispatch({
        type: POST_BOOKING_FAILURE,
        error: error.message,
      });
    }
  };
