'use strict';
const fs = require('fs');
const path = require('path');
const { config } = require('../leiting/lt/config');

/**
 * 初始化并获取配置
 */
function applyConfig () {
  //获取工作目录
  const baseDir = path.resolve(__dirname, '../');
  config.init(baseDir);
  const files = fs.readdirSync(path.resolve(`${baseDir}/app/config`));

  //加载 config 目录下的配置文件
  for (const file of files) {
    config .getConfigFromFile(`app/config/${file}`);
  }
}