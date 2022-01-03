export interface Root {
  // 请求 body - 对应 data（仅post请求）
  GetUserNameGetRequestBody: GetUserNameGetRequestBody;
  // 请求 query - 对应 params（get/post请求）
  GetUserNameGetRequestQuery: GetUserNameGetRequestQuery;
  // 响应
  GetUserNameGetResponse: GetUserNameGetResponse;
}

export interface GetUserNameGetRequestBody {
  [key: string]: any;
}

export interface GetUserNameGetRequestQuery {
  [key: string]: any;
}

export interface GetUserNameGetResponse {
  [key: string]: any;
}
