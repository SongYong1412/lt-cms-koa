import Application from 'koa';

export declare const __version__ = '0.0.1';
/**
 * LT核心类
 */
export declare class LT {
  private app;
  private mount;
  /**
   * 初始化
   * @param app koa
   * @param mount 是否挂载路由
   */
  initApp(app: Application, mount?: boolean): Promise<void>;
}