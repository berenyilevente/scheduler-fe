import {
  PostInputArgs,
  GetInputArgs,
  GetBookingLayoutArgs,
  PostBookingLayoutArgs,
  PatchBookingLayoutArgs,
  LoginArgs,
  LoginResponse,
  RegisterArgs,
} from '@/utils';
import { ApiUrl } from '../utils/constants/apiUrls';
import { axiosInstance } from '../utils/functions/axiosInstance';

export const getInputsEndpoint = async (): Promise<GetInputArgs> => {
  const response = await axiosInstance.get(ApiUrl.GetInput);
  return response.data;
};

export const postInputEndpoint = async (
  inputField: PostInputArgs
): Promise<void> => {
  await axiosInstance.post(ApiUrl.PostInput, inputField);
};

export const deleteInputEndpoint = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.DeleteInput}/${id}`);
};

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
  bookingLayout: PostBookingLayoutArgs
): Promise<void> => {
  await axiosInstance.post(ApiUrl.PostBookingLayout, bookingLayout);
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

export const loginEndpoint = async (
  loginData: LoginArgs
): Promise<LoginResponse> => {
  const response = await axiosInstance.post(ApiUrl.Login, loginData);
  return response.data;
};

export const registerEndpoint = async (registerData: RegisterArgs) => {
  const response = await axiosInstance.post(ApiUrl.Register, registerData);
  return response.data.data;
};

export const getUserEndpoint = async (
  id: string
): Promise<GetBookingLayoutArgs> => {
  const response = await axiosInstance.get(`${ApiUrl.GetUser}/${id}`);
  return response.data;
};

export const getBookingLayoutUserEndpoint = async (
  apiKey: string,
  name: string
) => {
  console.log(apiKey, name);
  const response = await axiosInstance.get(
    `${ApiUrl.GetBookingLayoutUser}?apiKey=${apiKey}&name=${name}`
  );
  console.log(response.data);
  return response.data;
};
