import { ApiUrl } from '../..//utils/constants/apiUrls';
import {
  axiosInstance,
  axiosInstancePublic,
} from '../../utils/functions/axiosInstance';

export const getBookingsEndpoint = async () => {
  const response = await axiosInstance.get(ApiUrl.GetBookings);
  return response.data;
};

export const getBookingByIdController = async (id: string) => {
  const response = await axiosInstance.get(`${ApiUrl.GetBookingById}/${id}`);
  return response.data;
};

export const postBookingEndpoint = async (
  bookingId: string,
  inputs: { inputType: string | null; value: string | null }[],
  bookedTimes: { date: string; time: string }
): Promise<void> => {
  await axiosInstancePublic.post(ApiUrl.PostBooking, {
    bookingId,
    inputs,
    bookedTimes,
  });
};

export const deleteBookingEndpoint = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.DeleteBooking}/${id}`);
};
