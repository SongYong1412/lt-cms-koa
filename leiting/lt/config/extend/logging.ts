import Application from 'koa';
import { Logger } from 'egg-logger';

export declare const logger: Logger<{}>;
/**
 * 日志扩展
 * @param app app实例
 */
export declare const logging: (app: Application) => void;