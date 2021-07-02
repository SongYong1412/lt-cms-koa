import Application from 'koa';
import Router from 'koa-router';

export declare const disableLoading: unique symbol;
/**
 * 加载器
 * 用于加载插件和路由文件
 */
export declare class Loader {
  mainRouter: Router | undefined;
  pluginPath: {};
  private app;
  plugins: {};
  constructor(pluginPath: {}, app: Application);
  /**
   * 初始化
   * 挂载 loader 和插件
   */
  initLoader(): void;
  /**
   * 加载插件
   */
  loadPlugins(): void;
  /**
   * 载单个插件
   */
  loadPlugin(name: string, path: string): void;
  /**
   * 加载插件配置
   */
  loadConfig(name: string, path: string, incomingConf: {}): void;
  /**
   * 加载主应用中的所有路由
   */
  loadMainApi(app: Application): void;
}