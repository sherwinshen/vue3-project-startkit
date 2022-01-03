/**
 * 本模块功能：
 * 1. 通过 CANCEL_TOKEN_LIST 存储所有请求的 cancelToken
 * 2. 支持取消所有请求（常用于路由跳转等场景）
 * 3. 取消相同内容的请求（通过请求配置的 autoCancelPreviousRequest 字段控制）
 */
import axios, { AxiosRequestConfig, AxiosResponse, CancelTokenSource, AxiosError } from 'axios';
import qs from 'qs';
import { v4 as uuidv4 } from 'uuid';

interface HttpRequest {
  id: string; // 请求唯一id
  requestKey: string; // 请求key
  source: CancelTokenSource;
}

interface AxiosInterceptor<T> {
  onFulfilled?: (value: T) => T;
  onRejected?: (error: AxiosError) => any;
}

// 所有请求带 cancelToken 的列表,
let HTTP_REQUEST_LIST = [] as HttpRequest[];

// 生成 requestKey
const generateRequestKey = (config: AxiosRequestConfig) => {
  return [config.method, config.url, qs.stringify(config.params), qs.stringify(config.data)].join('&');
};
// 添加 HttpRequest
const addHttpRequest = (requestKey: string, id: string, source: CancelTokenSource) => {
  HTTP_REQUEST_LIST.push({
    id,
    requestKey,
    source,
  });
};
// 移除 HttpRequest - id优先级高于requestKey
const removeHttpRequest = (requestKey: string, id?: string) => {
  const index = id
    ? HTTP_REQUEST_LIST.findIndex((httpRequest: HttpRequest) => httpRequest.id === id)
    : HTTP_REQUEST_LIST.findIndex((httpRequest: HttpRequest) => httpRequest.requestKey === requestKey);
  if (index !== -1) {
    HTTP_REQUEST_LIST.splice(index, 1);
  }
  return;
};
// 取消一个请求 - id优先级高于requestKey
const cancelRequest = (requestKey: string, id?: string) => {
  const index = id
    ? HTTP_REQUEST_LIST.findIndex((httpRequest: HttpRequest) => httpRequest.id === id)
    : HTTP_REQUEST_LIST.findIndex((httpRequest: HttpRequest) => httpRequest.requestKey === requestKey);
  if (index !== -1) {
    HTTP_REQUEST_LIST[index]?.source?.cancel && HTTP_REQUEST_LIST[index]?.source?.cancel();
    HTTP_REQUEST_LIST.splice(index, 1);
  }
  return;
};
// 取消所有请求
export const cancelAxiosRequestHandler = () => {
  HTTP_REQUEST_LIST.forEach((httpRequest: HttpRequest) => {
    httpRequest?.source?.cancel && httpRequest.source.cancel();
  });
  HTTP_REQUEST_LIST = [];
  return;
};
// 处理取消前面相同的请求
const cancelPreviousRequest = (config: any) => {
  if (!config.autoCancelPreviousRequest) {
    return;
  }
  cancelRequest(generateRequestKey(config));
  return;
};

// 请求拦截器 - 处理是否取消前一个相同请求并为请求添加 cancelToken
export const addCancelTokenRequestInterceptor: AxiosInterceptor<AxiosRequestConfig> = {
  onFulfilled: (config: AxiosRequestConfig): AxiosRequestConfig => {
    cancelPreviousRequest(config);
    const source = axios.CancelToken.source() as CancelTokenSource;
    config.cancelToken = source.token;
    const id = uuidv4();
    (config as any).id = id;
    const requestKey = generateRequestKey(config);
    addHttpRequest(requestKey, id, source);
    return config;
  },
};
// 响应拦截器 - 请求成功删除 cancelToken
export const deleteCancelTokenInterceptor: AxiosInterceptor<AxiosResponse> = {
  onFulfilled: (response: AxiosResponse): AxiosResponse => {
    const { config } = response as any;
    const id = config?.id;
    removeHttpRequest('', id);
    return response;
  },
};
