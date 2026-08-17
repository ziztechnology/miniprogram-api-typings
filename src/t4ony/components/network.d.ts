export type NetworkType = 'wifi' | '2g' | '3g' | '4g' | '5g';

export interface GetNetworkTypeRes {
  networkType: NetworkType;
  signalStrength: number; // 信号强弱，单位 dbm
  hasSystemProxy: boolean;
  weakNet: boolean;
}

export interface GetNetworkTypeOptions {
  success: (res: GetNetworkTypeRes) => void;
}

export interface T4onyNetworkEntries {
  getNetworkType: (callback: GetNetworkTypeOptions) => void;
}
