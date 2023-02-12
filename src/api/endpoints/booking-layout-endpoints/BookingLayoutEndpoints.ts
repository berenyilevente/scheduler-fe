import {
  GetBookingLayoutArgs,
  PostBookingLayoutArgs,
  PatchBookingLayoutArgs,
} from '@/utils';
import { ApiUrl } from '../..//utils/constants/apiUrls';
import { axiosInstance } from '../../utils/functions/axiosInstance';

export const getBookingLayoutEndpoint = async (): Promise<
  GetBookingLayoutArgs[]
> => {
  const response = await axiosInstance.get(ApiUrl.GetBookingLayout);
  return response.data;
};

export const getBookingLayoutByIdEndpoint = async (
  id: string
): Promise<GetBookingLayoutArgs> => {
  const response = await axiosInstance.get(
    `${ApiUrl.GetBookingLayoutById}/${id}`
  );
  return response.data;
};

export const postBookingLayoutEndpoint = async (
  userId: string,
  bookingLayout: PostBookingLayoutArgs
): Promise<void> => {
  await axiosInstance.post(ApiUrl.PostBookingLayout, { userId, bookingLayout });
};

export const patchBookingLayoutEndpoint = async (
  id: string,
  bookingLayout: PatchBookingLayoutArgs
): Promise<void> => {
  await axiosInstance.patch(
    `${ApiUrl.PatchBookingLayout}/${id}`,
    bookingLayout
  );
};

export const deleteInputFromBookingLayoutEndpoint = async (
  bookingLayoutId: string,
  inputId: string
): Promise<void> => {
  await axiosInstance.post(ApiUrl.DeleteInputFromBookingLayout, {
    bookingLayoutId,
    inputId,
  });
};

export const deleteBookingLayoutEndpoint = async (
  id: string
): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.DeleteBookingLayout}/${id}`);
};
