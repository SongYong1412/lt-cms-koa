import { Exception } from "../types";

/**
 * HttpException 是leiting中所有其他异常的基类
 */
export declare class HttpException extends Error {
  /**
   * http 状态码
   */
  status: number;
  /**
   * 返回的信息内容
   */
  message: string;
  /**
   * 特定的错误码
   */
  code: number;
  fields: string[];
  /**
   * 构造函数
   * @param ex 可选参数，通过{}的形式传入 / 也可以直接传code
   */
  constructor(ex?: Exception | number);
  protected exceptionHandler(ex?: Exception | number): void;
}
/**
 * 成功
 */
 export declare class Success extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: number | Exception);
}
/**
* 失败
*/
export declare class Failed extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception | number);
}
/**
* 认证失败
*/
export declare class AuthFailed extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 资源不存在
*/
export declare class NotFound extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 参数错误
*/
export declare class ParametersException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 令牌失效或损坏
*/
export declare class InvalidTokenException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 令牌过期
*/
export declare class ExpiredTokenException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 服务器未知错误
*/
export declare class UnknownException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 字段重复
*/
export declare class RepeatException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 禁止操作
*/
export declare class Forbidden extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 请求方法不允许
*/
export declare class MethodNotAllowed extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* refresh token 获取失败
*/
export declare class RefreshException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 文件体积过大
*/
export declare class FileTooLargeException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 文件数量过多
*/
export declare class FileTooManyException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 文件扩展名不符合规范
*/
export declare class FileExtensionException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}
/**
* 请求过于频繁，请稍后重试
*/
export declare class LimitException extends HttpException {
  status: number;
  message: string;
  code: number;
  constructor(ex?: Exception);
}