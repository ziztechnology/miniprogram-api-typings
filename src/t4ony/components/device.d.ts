export interface DeviceInfo {
  /** 设备品牌。 */
  brand: string;
  /** 设备型号。 */
  model: string;
  /** 设备操作系统平台。 */
  platform: 'android';
  /** 操作系统名称及版本信息。 */
  system: string;
  /** Android API 级别。 */
  androidApiLevel: number;
  /** 操作系统内核版本。 */
  kernelVersion?: string;
  /** 设备固件版本。 */
  firmwareVersion?: string;
  /** 系统 API 版本。 */
  systemApiVersion?: string;
  /** 设备物理内存总量，单位为字节。 */
  totalMemoryBytes: number;
  /** 设备存储空间总量，单位为字节。 */
  totalStorageBytes: number;
  /** 设备序列号，仅在页面声明并获授相应能力后返回。 */
  serialNumber?: string;
}

export interface BatteryInfo {
  /** 当前电量百分比，范围为 0～100。 */
  level: number;
  /** 设备当前是否正在充电。 */
  isCharging: boolean;
  /** 设备当前是否启用了低电量模式。 */
  isLowPowerModeEnabled: boolean;
  /** 当前电池温度，单位为摄氏度。 */
  temperatureCelsius?: number;
}

export interface T4onyDeviceEntries {
  /** 获取当前设备的硬件和系统信息。 */
  getDeviceInfo: () => Promise<DeviceInfo>;
  /** 获取当前设备的电池状态。 */
  getBatteryInfo: () => Promise<BatteryInfo>;
}
