import { GetInputArgs, CreateInputArgs } from '@/utils';

export const GET_INPUTS_REQUEST = 'GET_INPUTS_REQUEST';
export const GET_INPUTS_SUCCESS = 'GET_INPUTS_SUCCESS';
export const GET_INPUTS_FAILURE = 'GET_INPUTS_FAILURE';
export interface GetInputsRequest {
  type: typeof GET_INPUTS_REQUEST;
}
export interface GetInputsSuccess {
  type: typeof GET_INPUTS_SUCCESS;
  payload: GetInputArgs[];
}
export interface GetInputsFailure {
  type: typeof GET_INPUTS_FAILURE;
  error: string;
}

export const POST_INPUT_REQUEST = 'POST_INPUT_REQUEST';
export const POST_INPUT_SUCCESS = 'POST_INPUT_SUCCESS';
export const POST_INPUT_FAILURE = 'POST_INPUT_FAILURE';
export interface PostInputRequest {
  type: typeof POST_INPUT_REQUEST;
}
export interface PostInputSuccess {
  type: typeof POST_INPUT_SUCCESS;
  payload: CreateInputArgs;
}
export interface PostInputFailure {
  type: typeof POST_INPUT_FAILURE;
  error: string;
}

export const DELETE_INPUT_REQUEST = 'DELETE_INPUT_REQUEST';
export const DELETE_INPUT_SUCCESS = 'DELETE_INPUT_SUCCESS';
export const DELETE_INPUT_FAILURE = 'DELETE_INPUT_FAILURE';
export interface DeleteInputRequest {
  type: typeof DELETE_INPUT_REQUEST;
}
export interface DeleteInputSuccess {
  type: typeof DELETE_INPUT_SUCCESS;
}
export interface DeleteInputFailure {
  type: typeof DELETE_INPUT_FAILURE;
  error: string;
}

export type InputActionTypes =
  | GetInputsRequest
  | GetInputsFailure
  | GetInputsSuccess
  | PostInputRequest
  | PostInputFailure
  | PostInputSuccess
  | DeleteInputRequest
  | DeleteInputFailure
  | DeleteInputSuccess;
