import { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import cloneDeep from 'lodash/cloneDeep';
import { errorResponseInterceptor } from '@/services/interceptors/errorHandler';
import { addCancelTokenRequestInterceptor, deleteCancelTokenInterceptor } from '@/services/interceptors/cancelHandler';

export interface AxiosInterceptor<T> {
  onFulfilled?: (value: T) => T;
  onRejected?: (error: AxiosError) => any;
}

// 请求拦截器 - 为 GET 请求添加随机数
const addRandomNumRequestInterceptor: AxiosInterceptor<AxiosRequestConfig> = {
  onFulfilled: (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 为 GET 请求添加随机数
    const axiosConfig = cloneDeep(config) as AxiosRequestConfig;
    if (axiosConfig.method && axiosConfig.method.toUpperCase() === 'GET') {
      axiosConfig.params = axiosConfig.params || {};
      axiosConfig.params._t = new Date().getTime();
    }
    return axiosConfig;
  },
};

// 响应拦截器 - 返回 data 内容
const baseResponseInterceptor: AxiosInterceptor<AxiosResponse> = {
  onFulfilled: (response: AxiosResponse): AxiosResponse => {
    // 直接返回数据内容(注意该拦截器要放在最后！)
    return response?.data;
  },
};

const requestInterceptors = [addCancelTokenRequestInterceptor, addRandomNumRequestInterceptor];
const responseInterceptors = [deleteCancelTokenInterceptor, errorResponseInterceptor, baseResponseInterceptor];

export default {
  requestInterceptors,
  responseInterceptors,
};
