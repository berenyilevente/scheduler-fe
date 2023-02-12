import { BookingResponse } from '@/utils/interfaces/booking-interfaces';

export const GET_BOOKING_REQUEST = 'GET_BOOKING_REQUEST';
export const GET_BOOKING_SUCCESS = 'GET_BOOKING_SUCCESS';
export const GET_BOOKING_FAILURE = 'GET_BOOKING_FAILURE';
export interface GetBookingRequest {
  type: typeof GET_BOOKING_REQUEST;
}
export interface GetBookingSuccess {
  type: typeof GET_BOOKING_SUCCESS;
  payload: BookingResponse[];
}
export interface GetBookingFailure {
  type: typeof GET_BOOKING_FAILURE;
  error: string;
}

export const GET_BOOKING_BY_ID_REQUEST = 'GET_BOOKING_BY_ID_REQUEST';
export const GET_BOOKING_BY_ID_SUCCESS = 'GET_BOOKING_BY_ID_SUCCESS';
export const GET_BOOKING_BY_ID_FAILURE = 'GET_BOOKING_BY_ID_FAILURE';
export interface GetBookingByIdRequest {
  type: typeof GET_BOOKING_BY_ID_REQUEST;
}
export interface GetBookingByIdSuccess {
  type: typeof GET_BOOKING_BY_ID_SUCCESS;
  payload: BookingResponse;
}
export interface GetBookingByIdFailure {
  type: typeof GET_BOOKING_BY_ID_FAILURE;
  error: string;
}

export const POST_BOOKING_REQUEST = 'POST_BOOKING_REQUEST';
export const POST_BOOKING_SUCCESS = 'POST_BOOKING_SUCCESS';
export const POST_BOOKING_FAILURE = 'POST_BOOKING_FAILURE';
export interface PostBookingRequest {
  type: typeof POST_BOOKING_REQUEST;
}
export interface PostBookingSuccess {
  type: typeof POST_BOOKING_SUCCESS;
}
export interface PostBookingFailure {
  type: typeof POST_BOOKING_FAILURE;
  error: string;
}

export const DELETE_BOOKING_REQUEST = 'DELETE_BOOKING_REQUEST';
export const DELETE_BOOKING_SUCCESS = 'DELETE_BOOKING_SUCCESS';
export const DELETE_BOOKING_FAILURE = 'DELETE_BOOKING_FAILURE';
export interface DeleteBookingRequest {
  type: typeof DELETE_BOOKING_REQUEST;
}
export interface DeleteBookingSuccess {
  type: typeof DELETE_BOOKING_SUCCESS;
}
export interface DeleteBookingFailure {
  type: typeof DELETE_BOOKING_FAILURE;
  error: string;
}

export type BookingActionTypes =
  | GetBookingRequest
  | GetBookingFailure
  | GetBookingSuccess
  | PostBookingRequest
  | PostBookingFailure
  | PostBookingSuccess
  | GetBookingByIdRequest
  | GetBookingByIdFailure
  | GetBookingByIdSuccess
  | DeleteBookingRequest
  | DeleteBookingFailure
  | DeleteBookingSuccess;
