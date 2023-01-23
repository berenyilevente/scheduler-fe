import { GetBookingLayoutArgs, PostBookingLayoutArgs } from '@/utils';
import {
  BookingLayoutActionTypes,
  GET_BOOKING_LAYOUT_BY_ID_FAILURE,
  GET_BOOKING_LAYOUT_BY_ID_REQUEST,
  GET_BOOKING_LAYOUT_BY_ID_SUCCESS,
  GET_BOOKING_LAYOUT_FAILURE,
  GET_BOOKING_LAYOUT_REQUEST,
  GET_BOOKING_LAYOUT_SUCCESS,
  POST_BOOKING_LAYOUT_FAILURE,
  POST_BOOKING_LAYOUT_REQUEST,
  POST_BOOKING_LAYOUT_SUCCESS,
} from './bookingLayoutActionTypes';

export interface IDefaultBookingLayoutState {
  isLoading: boolean;
  bookingLayouts: GetBookingLayoutArgs[];
  bookingLayout: PostBookingLayoutArgs | undefined;
  error: string | null;
  createBookingLayoutSuccess: boolean;
}
const defaultBookingLayoutState: IDefaultBookingLayoutState = {
  isLoading: false,
  error: null,
  bookingLayouts: [],
  bookingLayout: undefined,
  createBookingLayoutSuccess: false,
};
const BookingLayoutReducer = (
  state = defaultBookingLayoutState,
  action: BookingLayoutActionTypes
): IDefaultBookingLayoutState => {
  switch (action.type) {
    case GET_BOOKING_LAYOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_BOOKING_LAYOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookingLayouts: action.payload,
        error: null,
      };
    case GET_BOOKING_LAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case GET_BOOKING_LAYOUT_BY_ID_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_BOOKING_LAYOUT_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookingLayout: action.payload,
        error: null,
      };
    case GET_BOOKING_LAYOUT_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case POST_BOOKING_LAYOUT_REQUEST:
      return {
        ...state,
        createBookingLayoutSuccess: false,
        isLoading: true,
        error: null,
      };
    case POST_BOOKING_LAYOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createBookingLayoutSuccess: true,
        bookingLayout: action.payload,
        error: null,
      };
    case POST_BOOKING_LAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        createBookingLayoutSuccess: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default BookingLayoutReducer;
