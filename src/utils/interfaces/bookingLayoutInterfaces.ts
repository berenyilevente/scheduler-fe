import { GetInputArgs, PostInputArgs } from './input-interfaces';

export interface GetBookingLayoutArgs {
  inputs: GetInputArgs;
  name: string;
}

export interface PostBookingLayoutArgs {
  inputs: PostInputArgs;
  name: string;
}
