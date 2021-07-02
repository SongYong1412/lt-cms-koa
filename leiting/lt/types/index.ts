import { IRouterOptions } from 'koa-router';

/**
 * HttpException 类构造函数的参数接口
 */
export interface Exception {
  code?: number;
  message?: any;
}
export interface Option {
  algorithm?: string;
  saltLength?: number;
  iterations?: number;
}
export interface ObjOptions {
  prefix?: string;
  filter?: (key: any) => boolean;
}
export interface MulOpts {
  singleLimit?: number;
  totalLimit?: number;
  fileNums?: number;
  include?: string[];
  exclude?: string[];
}
export interface Meta {
  permission?: string;
  module?: string;
  mount?: boolean;
}
export interface LtRouterOptions extends IRouterOptions {
  module?: string;
  mountPermission?: boolean;
}
export interface CodeMessage {
  getMessage: (code: number) => string;
  [propName: number]: string;
}