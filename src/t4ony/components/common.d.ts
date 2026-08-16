export type AnyFunction = (...args: any[]) => any;

export interface CommonMethodOptions {
  success?: AnyFunction; // 调用成功的回调函数
  fail?: AnyFunction; // 调用失败的回调函数
  complete?: AnyFunction; // 接口调用结束的回调函数（调用成功、失败都会执行，在调用成功失败的后面）
}
