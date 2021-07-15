const path = require('path');

module.exports = {
  port: 5000,
  siteDomain: 'http://localhost',
  countDefault: 10,
  pageDefault: 0,
  apiDir: 'app/api',
  accessExp: 60 * 60, //1h 单位秒
  baseDir: path.resolve(__dirname, '../../'),
  debug: true,
  //refreshExp 设置refresh_token的过期时间，默认一个月
  refreshExp: 60 * 60 * 24 * 30,
  //暂不启用插件
  pluginPath: {}
}