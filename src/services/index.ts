import axios, { AxiosInstance } from 'axios';
import interceptors from '@/services/interceptors/index';

const { requestInterceptors, responseInterceptors } = interceptors;

// 新建 axios 实例（自定义配置）
const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api', // 自定义即可
  timeout: 20000, // 请求超时 20s
  withCredentials: true,
  // 更多字段详见 https://www.axios-http.cn/docs/req_config
});

// 请求拦截器
requestInterceptors.forEach((interceptor: any) => {
  axiosInstance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected);
});
// 响应拦截器
responseInterceptors.forEach((interceptor: any) => {
  axiosInstance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected);
});

export default axiosInstance;
