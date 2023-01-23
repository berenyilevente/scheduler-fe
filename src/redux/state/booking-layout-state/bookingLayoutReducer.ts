import { GetBookingLayoutArgs, PostBookingLayoutArgs } from '@/utils';
import {
  BookingLayoutActionTypes,
  DELETE_BOOKING_LAYOUT_FAILURE,
  DELETE_BOOKING_LAYOUT_REQUEST,
  DELETE_BOOKING_LAYOUT_SUCCESS,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_FAILURE,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_REQUEST,
  DELTE_INPUT_FROM_BOOKING_LAYOUT_SUCCESS,
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
  bookingLayout: GetBookingLayoutArgs | undefined;
  error: string | null;
  createSuccess: boolean;
  deleteSuccess: boolean;
  patchSuccess: boolean;
}
const defaultBookingLayoutState: IDefaultBookingLayoutState = {
  isLoading: false,
  error: null,
  bookingLayouts: [],
  bookingLayout: undefined,
  createSuccess: false,
  deleteSuccess: false,
  patchSuccess: false,
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
        createSuccess: false,
        isLoading: true,
        error: null,
      };
    case POST_BOOKING_LAYOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        createSuccess: true,
        error: null,
      };
    case POST_BOOKING_LAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        createSuccess: false,
        error: action.error,
      };

    case DELTE_INPUT_FROM_BOOKING_LAYOUT_REQUEST:
      return {
        ...state,
        deleteSuccess: false,
        isLoading: true,
        error: null,
      };
    case DELTE_INPUT_FROM_BOOKING_LAYOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: true,
        error: null,
      };
    case DELTE_INPUT_FROM_BOOKING_LAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        error: action.error,
      };

    case DELETE_BOOKING_LAYOUT_REQUEST:
      return {
        ...state,
        deleteSuccess: false,
        isLoading: true,
        error: null,
      };
    case DELETE_BOOKING_LAYOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: true,
        error: null,
      };
    case DELETE_BOOKING_LAYOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        deleteSuccess: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default BookingLayoutReducer;
