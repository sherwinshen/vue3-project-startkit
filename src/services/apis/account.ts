import axiosInstance from '@/services/index';
import apiConfigs from '@/services/configs/index';
import { Root as GetUserName } from '@/services/types/account/getUserName';

const { accountConfig } = apiConfigs;

export const getUserName = async (
  params: GetUserName['GetUserNameGetRequestQuery'],
): Promise<GetUserName['GetUserNameGetResponse']> => {
  return axiosInstance.request({
    ...accountConfig.getUserName,
    params,
  });
};
