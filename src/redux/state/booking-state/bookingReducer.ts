import { GetInputArgs } from '@/utils';
import { BookingResponse } from '@/utils/interfaces/booking-interfaces';
import {
  BookingActionTypes,
  DELETE_BOOKING_FAILURE,
  DELETE_BOOKING_REQUEST,
  DELETE_BOOKING_SUCCESS,
  GET_BOOKING_BY_ID_FAILURE,
  GET_BOOKING_BY_ID_REQUEST,
  GET_BOOKING_BY_ID_SUCCESS,
  GET_BOOKING_FAILURE,
  GET_BOOKING_REQUEST,
  GET_BOOKING_SUCCESS,
  POST_BOOKING_FAILURE,
  POST_BOOKING_REQUEST,
  POST_BOOKING_SUCCESS,
} from './bookingActionTypes';

export interface IDefaultBookingState {
  isLoading: boolean;
  error: string | null;
  bookings: BookingResponse[];
  bookingInputs: GetInputArgs[];
  booking: BookingResponse | null;
  deleteBookingSuccess: boolean;
}
const defaultBookingState: IDefaultBookingState = {
  isLoading: false,
  error: null,
  bookings: [],
  bookingInputs: [],
  booking: null,
  deleteBookingSuccess: false,
};

const BookingReducer = (
  state = defaultBookingState,
  action: BookingActionTypes
): IDefaultBookingState => {
  switch (action.type) {
    case GET_BOOKING_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookings: action.payload,
        error: null,
      };
    case GET_BOOKING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_BOOKING_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_BOOKING_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        booking: action.payload,
        error: null,
      };
    case GET_BOOKING_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case POST_BOOKING_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case POST_BOOKING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case DELETE_BOOKING_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
        deleteBookingSuccess: false,
      };
    case DELETE_BOOKING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        deleteBookingSuccess: true,
      };
    case DELETE_BOOKING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        deleteBookingSuccess: false,
      };
    default:
      return state;
  }
};
export default BookingReducer;
