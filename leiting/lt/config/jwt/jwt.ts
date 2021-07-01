import Application from 'koa';
import { VerifyOptions, SignOptions } from 'jsonwebtoken';
import { RouterContext } from 'koa-router';
import { TokenType } from '../utils';

/**
 * 令牌类，提供令牌的生成和解析功能
 */
declare class Token {
  /**
   * 令牌的secret值,用于令牌的加密
   */
  secret: string | undefined;
  /**
   * access token 默认的过期时间
   */
  accessExp: number;
  /**
   * refresh token 默认的过期时间
   */
  refreshExp: number;
  /**
   * 构造函数
   * @param secret 牌的secret值
   * @param accessExp access token 过期时间
   * @param refreshExp refresh token 过期时间
   */
  constructor(secret?: string, accessExp?: number, refreshExp?: number);
  /**
   * 挂载到ctx上
   */
  initApp(app: Application, secret?: string, accessExp?: number, refreshExp?: number): void;
  /**
   * 生成access_token
   * @param identity 标识位
   */
  createAccessToken(identity: string | number): string;
  /**
    * 生成refresh_token
    * @param identity 标识位
    */
  createRefreshToken(identity: string | number): string;
  /**
  * verifyToken 验证token
  * 若过期，抛出ExpiredTokenException
  * 若失效，抛出InvalidTokenException
  * @param token 令牌
  */
  verifyToken(token: string, type?: TokenType): any;
}
/**
 * JWT 的实例
 */
declare const jwt: Token;
/**
 * 生成access token
 * @param payload 负载，支持 string 和 object
 * @param options 参数
 */
declare function createAccessToken(payload: string | object, options?: SignOptions): string;
/**
 * 生成refresh token
 * @param payload 负载，支持 string 和 object
 * @param options 参数
 */
declare function createRefreshToken(payload: string | object, options?: SignOptions): string;
/**
* 验证 access token
* @param token 令牌
* @param options 选项
*/
declare function verifyAccessToken(token: string, options?: VerifyOptions): any;
/**
 * 验证 refresh token
 * @param token 令牌
 * @param options 选项
 */
declare function verifyRefreshToken(token: string, options?: VerifyOptions): any;
 /**
 * 颁发令牌
 * @param user 用户
 */
declare function getTokens(user: any) {
  accessToken: String;
  refreshToken: String;
}
/**
 * 解析请求头
 * @param ctx koa的context
 * @param type 令牌的类型
 */
declare function parseHeader(ctx: RouterContext, type?: TokenType): any;
export { Token, jwt, getTokens, parseHeader, createAccessToken, createRefreshToken, verifyAccessToken, verifyRefreshToken };