import account from './account';

interface ConfigModel {
  method: string;
  url: string;
  autoCancelPreviousRequest?: boolean; // 前一次请求未完成时当前请求自动取消，默认设置为请求不取消
  // ...其他内容可自定义
}

const generator = (arr: any): { [key: string]: ConfigModel[] } => {
  const configs = {} as any;
  arr.forEach((item: string[]) => {
    configs[item[0]] = {
      method: item[1],
      url: item[2],
      autoCancelPreviousRequest: item[3] || false,
      // ...其他内容可自定义
    };
  });
  return configs;
};

export default {
  accountConfig: generator(account),
};
