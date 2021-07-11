import { Uploader, config } from '../../../leiting';
import { FileModel } from '../../model/file';
import fs from 'fs';
import path from 'path';

class LocalUploader extends Uploader {
  /**
   * 处理文件对象
   */
  async upload (files) {
    const arr = [];
    for (const file of files) {
      //由于stream的特性，当读取其中的数据时，它的buffer会被消费,所以此处深拷贝一份计算md5值
      const md5 = this.generateMd5(file);
    }
  }
}

module.exports = { LocalUploader };