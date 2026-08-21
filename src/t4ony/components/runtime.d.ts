export type RuntimeCapabilityState =
  | 'available'
  | 'denied'
  | 'unavailable'
  | 'inactive';

export interface RuntimeCapability {
  /** 当前能力的可用状态。 */
  state: RuntimeCapabilityState;
  /** 当前能力处于该状态的原因。 */
  reason?: string;
}

export interface RuntimeInfo {
  /** Runtime 对外提供的 API 协议版本。 */
  apiVersion: string;
  /** Runtime 的可读版本号。 */
  runtimeVersion: string;
  /** Runtime 的数值版本代码。 */
  runtimeVersionCode: number;
  /** WebView 的版本号。 */
  webViewVersion?: string;
  /** Runtime 所在的操作系统平台。 */
  platform: 'android';
  /** Runtime 当前使用的运行配置。 */
  profile: 'packaged-h5';
  /** 当前显示状态的修订版本号。 */
  displayRevision: number;
  /** 以能力名称为键的 Runtime 能力状态集合。 */
  capabilities: Readonly<Record<string, RuntimeCapability>>;
}

export interface T4onyRuntimeEntries {
  /** 检查 API 协议是否存在，不代表页面已获授权或设备能力当前可用。 */
  canIUse: (schema: string) => Promise<boolean>;
  /** 获取当前 Runtime 的版本、平台和能力信息。 */
  getRuntimeInfo: () => Promise<RuntimeInfo>;
}
