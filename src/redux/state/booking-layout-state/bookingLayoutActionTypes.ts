import { GetBookingLayoutArgs, PostBookingLayoutArgs } from '@/utils';

export const GET_BOOKING_LAYOUT_REQUEST = 'GET_BOOKING_LAYOUT_REQUEST';
export const GET_BOOKING_LAYOUT_SUCCESS = 'GET_BOOKING_LAYOUT_SUCCESS';
export const GET_BOOKING_LAYOUT_FAILURE = 'GET_BOOKING_LAYOUT_FAILURE';
export interface GetBookingLayoutRequest {
  type: typeof GET_BOOKING_LAYOUT_REQUEST;
}
export interface GetBookingLayoutSuccess {
  type: typeof GET_BOOKING_LAYOUT_SUCCESS;
  payload: GetBookingLayoutArgs[];
}
export interface GetBookingLayoutFailure {
  type: typeof GET_BOOKING_LAYOUT_FAILURE;
  error: string;
}

export const GET_BOOKING_LAYOUT_BY_ID_REQUEST =
  'GET_BOOKING_LAYOUT_BY_ID_REQUEST';
export const GET_BOOKING_LAYOUT_BY_ID_SUCCESS =
  'GET_BOOKING_LAYOUT_BY_ID_SUCCESS';
export const GET_BOOKING_LAYOUT_BY_ID_FAILURE =
  'GET_BOOKING_LAYOUT_BY_ID_FAILURE';
export interface GetBookingLayoutByIdRequest {
  type: typeof GET_BOOKING_LAYOUT_BY_ID_REQUEST;
}
export interface GetBookingLayoutByIdSuccess {
  type: typeof GET_BOOKING_LAYOUT_BY_ID_SUCCESS;
  payload: GetBookingLayoutArgs;
}
export interface GetBookingLayoutByIdFailure {
  type: typeof GET_BOOKING_LAYOUT_BY_ID_FAILURE;
  error: string;
}

export const POST_BOOKING_LAYOUT_REQUEST = 'POST_BOOKING_LAYOUT_REQUEST';
export const POST_BOOKING_LAYOUT_SUCCESS = 'POST_BOOKING_LAYOUT_SUCCESS';
export const POST_BOOKING_LAYOUT_FAILURE = 'POST_BOOKING_LAYOUT_FAILURE';
export interface PostBookingLayoutRequest {
  type: typeof POST_BOOKING_LAYOUT_REQUEST;
}
export interface PostBookingLayoutSuccess {
  type: typeof POST_BOOKING_LAYOUT_SUCCESS;
  payload: PostBookingLayoutArgs;
}
export interface PostBookingLayoutFailure {
  type: typeof POST_BOOKING_LAYOUT_FAILURE;
  error: string;
}

export type BookingLayoutActionTypes =
  | GetBookingLayoutRequest
  | GetBookingLayoutFailure
  | GetBookingLayoutSuccess
  | GetBookingLayoutByIdRequest
  | GetBookingLayoutByIdFailure
  | GetBookingLayoutByIdSuccess
  | PostBookingLayoutRequest
  | PostBookingLayoutFailure
  | PostBookingLayoutSuccess;
