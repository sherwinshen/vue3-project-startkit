import { AxiosError, AxiosResponse } from 'axios';
import { SuccessResultCodes, showStatus } from '@/services/interceptors/status';
import debounce from 'lodash/debounce';
import { ElMessageBox } from 'element-plus';

export interface AxiosInterceptor<T> {
  onFulfilled?: (value: T) => T;
  onRejected?: (error: AxiosError) => any;
}

const showErrorMsg = (msg?: string) => {
  ElMessageBox.alert(msg || '请求出错，请检查网络或联系管理员！', {
    title: '出错了',
    type: 'error',
    confirmButtonText: '确认',
  });
};
const debounceShowErrorMsg = debounce(showErrorMsg, 300);

// 响应拦截器 - 错误处理
export const errorResponseInterceptor: AxiosInterceptor<AxiosResponse> = {
  onFulfilled: (response: AxiosResponse): AxiosResponse => {
    // 处理业务错误提示
    const { result, message } = (response?.data || {}) as any;
    if (!SuccessResultCodes.includes(result)) {
      debounceShowErrorMsg(message);
    }
    return response;
  },
  onRejected: (error: AxiosError): any => {
    // 处理全局错误提示
    const { status, statusText } = (error.response || {}) as any;
    const msg = statusText || showStatus(status);
    debounceShowErrorMsg(msg);
    return Promise.reject(error);
  },
};
