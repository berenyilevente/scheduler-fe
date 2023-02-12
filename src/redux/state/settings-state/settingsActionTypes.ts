export const GET_WORKING_HOURS_REQUEST = 'GET_WORKING_HOURS_REQUEST';
export const GET_WORKING_HOURS_SUCCESS = 'GET_WORKING_HOURS_SUCCESS';
export const GET_WORKING_HOURS_FAILURE = 'GET_WORKING_HOURS_FAILURE';
export interface GetWorkingHoursRequest {
  type: typeof GET_WORKING_HOURS_REQUEST;
}
export interface GetWorkingHoursSuccess {
  type: typeof GET_WORKING_HOURS_SUCCESS;
  payload: string[];
}
export interface GetWorkingHoursFailure {
  type: typeof GET_WORKING_HOURS_FAILURE;
  error: string;
}

export const POST_WORKING_HOURS_REQUEST = 'POST_WORKING_HOURS_REQUEST';
export const POST_WORKING_HOURS_SUCCESS = 'POST_WORKING_HOURS_SUCCESS';
export const POST_WORKING_HOURS_FAILURE = 'POST_WORKING_HOURS_FAILURE';
export interface PostWorkingHoursRequest {
  type: typeof POST_WORKING_HOURS_REQUEST;
}
export interface PostWorkingHoursSuccess {
  type: typeof POST_WORKING_HOURS_SUCCESS;
}
export interface PostWorkingHoursFailure {
  type: typeof POST_WORKING_HOURS_FAILURE;
  error: string;
}

export type SettingsActionTypes =
  | GetWorkingHoursRequest
  | GetWorkingHoursFailure
  | GetWorkingHoursSuccess
  | PostWorkingHoursRequest
  | PostWorkingHoursFailure
  | PostWorkingHoursSuccess;
