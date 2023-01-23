import {
  PostInputArgs,
  GetInputArgs,
  GetBookingLayoutArgs,
  PostBookingLayoutArgs,
} from '@/utils';
import { getByIdHelper } from '@/utils';
import { ApiUrl } from '../utils/constants/apiUrls';
import { axiosInstance } from '../utils/functions/axiosInstance';

export const getInputsEndpoint = async (): Promise<GetInputArgs> => {
  const response = await axiosInstance.get(ApiUrl.getInput);
  return response.data;
};

export const postInputEndpoint = async (
  inputField: PostInputArgs
): Promise<void> => {
  const response = await axiosInstance.post(ApiUrl.postInput, inputField);
  return response.data.data;
};

export const deleteInputEndpoint = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.deleteInput}/${id}`);
};

export const getBookingLayoutEndpoint = async (): Promise<
  GetBookingLayoutArgs[]
> => {
  const response = await axiosInstance.get(ApiUrl.getBookingLayout);
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
  bookingLayout: PostBookingLayoutArgs
): Promise<void> => {
  const response = await axiosInstance.post(
    ApiUrl.postBookingLayout,
    bookingLayout
  );
  return response.data.data;
};

export const deleteInputFromBookingLayoutEndpoint = async (
  bookingLayoutId: string,
  inputId: string
): Promise<void> => {
  await axiosInstance.post(ApiUrl.deleteInputFromBookingLayout, {
    bookingLayoutId,
    inputId,
  });
};

export const deleteBookingLayoutEndpoint = async (
  id: string
): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.deleteBookingLayout}/${id}`);
};
