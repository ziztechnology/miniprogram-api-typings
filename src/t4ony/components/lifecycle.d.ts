import type { T4onyListener } from './common.js';

export type T4onyHeadShowReason = 'initial' | 'resume' | 'display-acquired';

export type T4onyHeadHideReason =
  | 'background'
  | 'display-released'
  | 'page-replaced'
  | 'renderer-destroyed';

export interface T4onyHeadShowEvent {
  /** 页面头部变为可见的原因。 */
  reason: T4onyHeadShowReason;
  /** 事件发生时的显示修订版本号。 */
  displayRevision: number;
  /** 事件发生时相对于系统启动的毫秒时间戳。 */
  occurredAtElapsedRealtimeMs: number;
}

export interface T4onyHeadHideEvent {
  /** 页面头部变为不可见的原因。 */
  reason: T4onyHeadHideReason;
  /** 事件发生时的显示修订版本号。 */
  displayRevision: number;
  /** 事件发生时相对于系统启动的毫秒时间戳。 */
  occurredAtElapsedRealtimeMs: number;
}

export type T4onyHeadShowListener = T4onyListener<T4onyHeadShowEvent>;
export type T4onyHeadHideListener = T4onyListener<T4onyHeadHideEvent>;

export interface T4onyHeadLifecycleEntries {
  /** 注册页面头部显示事件的监听器。 */
  onT4onyHeadShow: (listener: T4onyHeadShowListener) => Promise<void>;
  /** 移除页面头部显示事件的监听器。 */
  offT4onyHeadShow: (listener: T4onyHeadShowListener) => Promise<void>;
  /** 注册页面头部隐藏事件的监听器。 */
  onT4onyHeadHide: (listener: T4onyHeadHideListener) => Promise<void>;
  /** 移除页面头部隐藏事件的监听器。 */
  offT4onyHeadHide: (listener: T4onyHeadHideListener) => Promise<void>;
}
