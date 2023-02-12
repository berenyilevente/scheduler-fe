import { ApiUrl } from '../..//utils/constants/apiUrls';
import { axiosInstance } from '../../utils/functions/axiosInstance';

export const getWorkingHoursEndpoint = async (): Promise<string[]> => {
  const response = await axiosInstance.get(ApiUrl.GetWorkingHours);
  return response.data;
};

export const postWorkingHoursEndpoint = async (
  workingHours: string[]
): Promise<void> => {
  await axiosInstance.post(ApiUrl.PostWorkingHours, workingHours);
};
