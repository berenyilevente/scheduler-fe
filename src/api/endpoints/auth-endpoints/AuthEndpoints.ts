import {
  GetBookingLayoutArgs,
  LoginArgs,
  LoginResponse,
  RegisterArgs,
} from '@/utils';
import { ApiUrl } from '../..//utils/constants/apiUrls';
import { axiosInstance } from '../../utils/functions/axiosInstance';

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

export const getRefreshTokenEndpoint = async (refreshToken: string) => {
  const response = await axiosInstance.post(ApiUrl.RefreshToken, {
    refreshToken,
  });
  return response.data;
};
