import type { CommonMethodOptions } from './common.js';

export type AccelerometerAndGyroscopeRes = { x: number; y: number; z: number };

export interface StartAccelerometerOptions extends CommonMethodOptions {
  interval: number; // 毫秒
  success: (res: AccelerometerAndGyroscopeRes) => void;
}

export interface StartGyroscopeOptions extends CommonMethodOptions {
  interval: number; // 毫秒
  success: (res: AccelerometerAndGyroscopeRes) => void;
}

export interface T4onySensorEntries {
  startAccelerometer: (callback: StartAccelerometerOptions) => void;
  stopAccelerometer: (callback: CommonMethodOptions) => void;
  startGyroscope: (callback: StartGyroscopeOptions) => void;
  stopGyroscope: (callback: CommonMethodOptions) => void;
}
