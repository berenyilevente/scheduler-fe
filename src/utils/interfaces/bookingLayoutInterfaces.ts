import { GetInputArgs, PostInputArgs } from './input-interfaces';

export interface GetBookingLayoutArgs {
  _id: string;
  inputs: GetInputArgs[];
  name: string;
}

export interface PostBookingLayoutArgs {
  inputs: PostInputArgs[];
  name: string;
}
