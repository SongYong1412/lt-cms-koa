import Router, { IMiddleware } from 'koa-router';
import { Meta, LtRouterOptions } from '../types';

export declare const routeMetaInfo: Map<any, any>;
/**
 * lt-router继承自koa-router
 * 即可使用全部的koa-router api
 * 也可以使用以lt为前缀的方法，用于视图函数的权限
 */
export declare class LtRouter extends Router {
  private module?;
  private mountPermission;
  constructor(LtRouterOptions?: LtRouterOptions);
  permission(permission: string, mount?: boolean): {
    permission: string;
    module: string | undefined;
    mount: boolean;
  }
  LtOption(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtHead(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtGet(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtPut(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtPatch(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtPost(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
  LtDelete(name: string, path: string | RegExp, meta?: Meta, ...middleware: IMiddleware[]): Router<any, {}>;
}