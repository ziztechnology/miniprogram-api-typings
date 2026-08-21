export interface SetKeepScreenOnOptions {
  /** 是否保持屏幕常亮。 */
  keepScreenOn: boolean;
}

export type SetScreenBrightnessOptions =
  | {
      /** 使用手动亮度。 */
      mode: 'manual';
      /** 屏幕亮度，范围为 0～1，0 最暗，1 最亮。 */
      value: number;
    }
  | {
      /** 跟随系统亮度。 */
      mode: 'system';
    };

export interface ScreenBrightness {
  /** 当前亮度模式。 */
  mode: 'manual' | 'system';
  /** 当前实际亮度，范围为 0～1。 */
  value: number;
}

export interface T4onyDisplayEntries {
  /** 设置是否保持屏幕常亮；设置仅在当前页面会话内有效，页面失活后由 Runtime 自动恢复。 */
  setKeepScreenOn: (options: SetKeepScreenOnOptions) => Promise<void>;
  /** 设置屏幕亮度；设置仅在当前页面会话内有效，页面失活后由 Runtime 自动恢复。 */
  setScreenBrightness: (options: SetScreenBrightnessOptions) => Promise<void>;
  /** 获取当前屏幕亮度及其模式。 */
  getScreenBrightness: () => Promise<ScreenBrightness>;
}
