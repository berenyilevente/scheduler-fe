import { s } from '@fullcalendar/core/internal-common';
import {
  SettingsActionTypes,
  GET_WORKING_HOURS_FAILURE,
  GET_WORKING_HOURS_REQUEST,
  GET_WORKING_HOURS_SUCCESS,
} from './settingsActionTypes';
import {
  POST_WORKING_HOURS_REQUEST,
  POST_WORKING_HOURS_SUCCESS,
  POST_WORKING_HOURS_FAILURE,
} from './settingsActionTypes';
export interface IDefaultSettingsState {
  isLoading: boolean;
  workingHours: string[];
  error: string | null;
}
const defaultSettingsState: IDefaultSettingsState = {
  isLoading: false,
  workingHours: [],
  error: null,
};
const SettingsReducer = (
  state = defaultSettingsState,
  action: SettingsActionTypes
): IDefaultSettingsState => {
  switch (action.type) {
    case GET_WORKING_HOURS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case GET_WORKING_HOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        workingHours: action.payload,
        error: null,
      };
    case GET_WORKING_HOURS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    case POST_WORKING_HOURS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case POST_WORKING_HOURS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case POST_WORKING_HOURS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export default SettingsReducer;
