export type NetworkType =
  | 'wifi'
  | '2g'
  | '3g'
  | '4g'
  | '5g'
  | 'unknown'
  | 'none';

export interface OnNetworkWeakChangeRes {
  weakNet: boolean;
  networkType: NetworkType;
}

export interface T4onyNetworkEntries {
  onNetworkWeakChange: (res: OnNetworkWeakChangeRes) => void;
}
