export interface WindowInfo {
  /** 设备物理像素与 CSS 像素的比值。 */
  pixelRatio: number;
  /** 屏幕宽度，单位为 CSS 像素。 */
  screenWidth: number;
  /** 屏幕高度，单位为 CSS 像素。 */
  screenHeight: number;
  /** 当前窗口的可用宽度，单位为 CSS 像素。 */
  windowWidth: number;
  /** 当前窗口的可用高度，单位为 CSS 像素。 */
  windowHeight: number;
  /** 当前窗口顶部相对于屏幕顶部的偏移量，单位为 CSS 像素。 */
  screenTop: number;
}

export interface T4onyBaseEntries {
  /** 获取当前窗口和屏幕的尺寸信息。 */
  getWindowInfo: () => Promise<WindowInfo>;
}
