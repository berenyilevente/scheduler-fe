import { GetInputArgs } from './input-interfaces';

export interface BookingResponse {
  _id?: string;
  inputs: GetInputArgs[];
  userId: string;
  bookedTimes: { date: string; time: string };
}

export interface PostBooking {
  inputs: GetInputArgs[];
}
