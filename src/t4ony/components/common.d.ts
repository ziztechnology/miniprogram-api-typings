export type T4onyErrorCode =
  | 'CAPABILITY_DENIED'
  | 'PERMISSION_DENIED'
  | 'HARDWARE_UNAVAILABLE'
  | 'RUNTIME_INACTIVE'
  | 'STALE_SESSION'
  | 'INVALID_ARGUMENT'
  | 'INTERNAL_ERROR';

export interface T4onyError extends Error {
  /** 产生错误的 API 名称。 */
  readonly api: string;
  /** 用于标识错误类别的错误码。 */
  readonly code: T4onyErrorCode;
  /** 与错误相关的附加信息。 */
  readonly details?: Record<string, any>;
}

export type T4onyListener<Event> = (event: Event) => void;

export interface T4onySubscription {
  /** 当前订阅的唯一标识符。 */
  readonly id: string;

  /** 停止当前订阅；重复调用不会产生错误。 */
  stop: () => Promise<void>;
}
