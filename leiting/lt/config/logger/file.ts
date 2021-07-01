import fs from 'fs';
import { Transport } from 'egg-logger';

export declare class FileTransport extends Transport {
  _stream: fs.WriteStream | null;
  options: any;
  constructor(options: any);
  get defaults(): any;
  reload(): void;
  log(level: any, args: any, meta: any): void;
  renameLogFile(filename: string): void;
  /**
   * 检查当前的日志文件是否为当天
   */
  checkIsPresent(): string | false;
  getPresentFilename(): string;
  checkSizeOverflow(filename: string): boolean;
  close(): void;
  end(): void;
  _write(buf: any): void;
  get writable(): boolean | null;
  _createStream(): fs.WriteStream;
  _closeStream(): void;
}