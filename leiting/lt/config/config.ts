/**
 * Config类
 */
export declare class Config {
  /**
   * 储存配置的容器
   */
  private store;
  /**
   * 默认环境变量的前缀LT
   */
  private _prefix;
  private envSuffix;
  /**
   * 当前工作目录
   */
  private baseDir;
  /**
   * 初始化工作目录
   * @param baseDir 工作目录
   */
  init(baseDir?: string): void;
  /**
   * 获取单个的配置项
   * @param key 配置项的路径
   * @param defaultVal 可选参数，默认值
   */
  getItem(key: string, defaultVal?: any): any;
  /**
   * 检测是否存在某个配置项
   * @param key 配置项的路径
   */
  hasItem(key: string): boolean;
  /**
   * 设置配置项
   * @param key 配置项的键
   * @param val 配置项的值
   */
  setItem(key: string, val: any): void;
  /**
   * 从js文件中导入配置
   * @param filepath js文件的路径，相对当前工作目录的路径
   */
  getConfigFromFile(filepath: string): void;
  /**
   * 从object对象导入配置
   * @param obj 配置对象
   */
  getConfigFromObj(obj: any): void;
  /**
   * 判断是何种环境变量，默认为 debug
   */
  getEnv(): string;
  /**
   * 判断是否为debug环境
   */
  isDebug(): boolean;
  /**
   * 从环境变量里面读取配置，只读取以 @prefix 开头的变量名
   */
  getConfigFromEnv(): void;
  get prefix(): string;
  set prefix(value: string);
}