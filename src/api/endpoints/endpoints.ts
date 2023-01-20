import { CreateInputArgs, GetInputArgs } from '@/utils';
import { getByIdHelper } from '@/utils';
import { ApiUrl } from '../utils/constants/apiUrls';
import { axiosInstance } from '../utils/functions/axiosInstance';

export const getInputsEndpoint = async (): Promise<GetInputArgs> => {
  const response = await axiosInstance.get(ApiUrl.getInput);
  return response.data;
};

export const postInputEndpoint = async (
  inputField: CreateInputArgs
): Promise<void> => {
  const response = await axiosInstance.post(ApiUrl.postInput, inputField);
  return response.data.data;
};

export const deleteInputEndpoint = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${ApiUrl.deleteInput}/${id}`);
};
