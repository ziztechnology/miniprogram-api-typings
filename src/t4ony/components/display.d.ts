import type { CommonMethodOptions } from './common.js';

// 设置是否保持常亮状态。
export interface KeepScreenOnOptionsOptions extends CommonMethodOptions {
  keepScreenOn: boolean;
}

// 设置屏幕亮度
export interface SetScreenBrightnessOptions extends CommonMethodOptions {
  value: number; // 屏幕亮度值，范围 0～1，0 最暗，1 最暗，传入 -1 表示屏幕亮度随系统变化
}

export interface T4onyDisplayEntries {
  setKeepScreenOn: (callback: KeepScreenOnOptionsOptions) => void;
  setScreenBrightness: (callback: SetScreenBrightnessOptions) => void;
}
