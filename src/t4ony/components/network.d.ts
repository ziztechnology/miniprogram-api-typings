import type { T4onyListener } from './common.js';

export type NetworkType =
  | 'wifi'
  | 'ethernet'
  | '2g'
  | '3g'
  | '4g'
  | '5g'
  | 'unknown'
  | 'none';

export interface NetworkStatus {
  /** 当前是否已连接网络。 */
  isConnected: boolean;
  /** 当前网络类型。 */
  networkType: NetworkType;
  /** 信号强度，单位为 dBm。以太网等网络可能不提供。 */
  signalStrengthDbm?: number;
  /** 当前网络是否使用系统代理。 */
  hasSystemProxy: boolean;
  /** 当前网络是否被判定为弱网。 */
  weakNet: boolean;
}

export type NetworkStatusListener = T4onyListener<NetworkStatus>;

export interface T4onyNetworkEntries {
  /** 获取当前网络连接状态和网络类型。 */
  getNetworkType: () => Promise<NetworkStatus>;
  /** 注册网络状态变化监听器。 */
  onNetworkStatusChange: (listener: NetworkStatusListener) => Promise<void>;
  /** 移除网络状态变化监听器。 */
  offNetworkStatusChange: (listener: NetworkStatusListener) => Promise<void>;
}
