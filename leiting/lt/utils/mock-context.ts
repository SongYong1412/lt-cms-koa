import Koa, { Request, Response } from 'koa';

export declare const context: (req: Response | undefined, res: Response | undefined, app: Koa | undefined) => Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>;
export declare const request: (req: Request | undefined, res: Response | undefined, app: Koa | undefined) => Koa.Request;
export declare const response: (req: Request | undefined, res: Response | undefined, app: Koa | undefined) => Koa.Response;