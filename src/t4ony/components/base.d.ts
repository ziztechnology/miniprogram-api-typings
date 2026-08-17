export interface GetWindowInfoReturn {
  pixelRatio: number;
  screenWidth: number;
  screenHeight: number;
  windowWidth: number;
  windowHeight: number;
  statusBarHeight: number; // 目前为 0
}

export interface GetDeviceInfoReturn {}

export interface T4onyBaseEntries {
  getWindowInfo: () => GetWindowInfoReturn;
}
