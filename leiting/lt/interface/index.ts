/**
 * 记录信息的mixin
 */

export declare const InfoCrudMixin: {
  attributes: {};
  options: {
    createdAt: string;
    updateAt: string;
    deleteAt: string;
    paranoid: boolean;
    getterMethods: {
      createTime(): any;
      updateTime(): any;
    }
  }
}