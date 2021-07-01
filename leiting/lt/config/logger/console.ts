import { Transport } from "egg-logger";

export declare class ConsoleTransport extends Transport {
  options: any;
  constructor(options: any);
  get defaults(): any;
  log(level: any, args: any, meta: any): void;
}