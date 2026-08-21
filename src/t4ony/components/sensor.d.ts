import type { T4onyListener, T4onySubscription } from './common.js';

export type SensorRate = 'fast' | 'ui' | 'normal';

export type SensorUnavailableReason =
  | 'SENSOR_MISSING'
  | 'NO_SAMPLE'
  | 'PLATFORM_UNAVAILABLE'
  | 'PERMISSION_DENIED'
  | 'NOT_CONNECTED';

export interface SensorVector3 {
  /** 三维向量在 X 轴上的分量。 */
  x: number;
  /** 三维向量在 Y 轴上的分量。 */
  y: number;
  /** 三维向量在 Z 轴上的分量。 */
  z: number;
}

export interface AccelerometerSample extends SensorVector3 {
  /** 加速度分量的计量单位。 */
  unit: 'm/s²';
  /** 采样时相对于系统启动的毫秒时间戳。 */
  sampledAtElapsedRealtimeMs: number;
}

export interface GyroscopeSample extends SensorVector3 {
  /** 角速度分量的计量单位。 */
  unit: 'rad/s';
  /** 采样时相对于系统启动的毫秒时间戳。 */
  sampledAtElapsedRealtimeMs: number;
}

export interface Orientation {
  /** 设备绕 Z 轴旋转的方位角。 */
  azimuth: number;
  /** 设备绕 X 轴旋转的俯仰角。 */
  pitch: number;
  /** 设备绕 Y 轴旋转的翻滚角。 */
  roll: number;
}

export interface SensorMetric<Value> {
  /** 当前指标是否包含可用的采样值。 */
  available: boolean;
  /** 当前指标的数据来源。 */
  source: string;
  /** 当前指标的采样值；不可用时为 `null`。 */
  value: Value | null;
  /** 当前指标的计量单位；不适用或不可用时为 `null`。 */
  unit: string | null;
  /** 采样时的 Unix 时间戳，单位为毫秒；不可用时为 `null`。 */
  sampledAtMs: number | null;
  /** 指标不可用的原因；可用时为 `null`。 */
  unavailableReason: SensorUnavailableReason | null;
}

export interface BatteryCapacitySample {
  /** 电池剩余电量百分比；不可用时为 `null`。 */
  levelPercent: number | null;
  /** 电池剩余电荷量，单位为微安时；不可用时为 `null`。 */
  chargeCounterUah: number | null;
}

export interface BatteryStateSample {
  /** 设备是否检测到电池。 */
  present: boolean;
  /** 电池当前是否正在充电。 */
  charging: boolean;
  /** 电池的充电状态。 */
  status: string;
  /** 当前连接的供电来源。 */
  plugged: string;
  /** 电池健康状态。 */
  health: string;
  /** 电池电压，单位为毫伏；不可用时为 `null`。 */
  voltageMv: number | null;
}

export interface TimedDrivingVector {
  /** 传感器的三维向量采样值。 */
  value: SensorVector3;
  /** 采样时相对于系统启动的毫秒时间戳。 */
  sampledAtElapsedRealtimeMs: number;
}

export type GravityPairingMode = 'interpolated' | 'nearest';

export interface DrivingMotionFrame {
  /** 驾驶运动帧的递增序号。 */
  sequence: number;
  /** 帧生成时相对于系统启动的毫秒时间戳。 */
  capturedAtElapsedRealtimeMs: number;
  /** 与当前帧配对的加速度计采样。 */
  accelerometer: TimedDrivingVector;
  /** 与当前帧配对的重力传感器采样。 */
  gravity: TimedDrivingVector;
  /** 与当前帧配对的陀螺仪采样。 */
  gyroscope: TimedDrivingVector;
  /** 加速度计与重力采样之间的时间偏差，单位为毫秒。 */
  accelerometerGravitySkewMs: number;
  /** 加速度计与陀螺仪采样之间的时间偏差，单位为毫秒。 */
  accelerometerGyroscopeSkewMs: number;
  /** 传感器采样允许配对的最大时间偏差，单位为毫秒。 */
  pairingLimitMs: number;
  /** 重力采样与加速度计采样的配对方式。 */
  gravityPairingMode: GravityPairingMode;
  /** 从加速度中移除重力分量后得到的线性加速度。 */
  derivedLinearAcceleration: SensorVector3;
}

export interface DrivingSensorContext {
  /** 生成驾驶传感器数据的处理管线版本。 */
  pipelineVersion: string;
  /** 生成数据时的 Runtime 数值版本代码。 */
  runtimeVersionCode: number;
  /** 操作系统构建指纹的哈希值。 */
  osBuildFingerprintHash: string;
  /** 当前物理传感器集合的标识符。 */
  sensorSetId: string;
  /** 当前传感器采集上下文的标识符。 */
  sensorContextId: string;
  /** 当前应用安装实例的标识符。 */
  appInstanceId: string;
  /** 安装姿态下的重力单位向量；不可用时为 `null`。 */
  mountingGravityUnitVector: SensorVector3 | null;
  /** 传感器温度，单位为摄氏度；不可用时为 `null`。 */
  sensorTemperatureCelsius: number | null;
}

export interface SensorSnapshot {
  /** 快照生成时的 Unix 时间戳，单位为毫秒。 */
  capturedAtMs: number;
  /** 快照生成时相对于系统启动的毫秒时间戳。 */
  capturedAtElapsedRealtimeMs: number;
  /** 陀螺仪三维角速度指标。 */
  gyroscope: SensorMetric<SensorVector3>;
  /** 加速度计三维加速度指标。 */
  accelerometer: SensorMetric<SensorVector3>;
  /** 电池容量指标。 */
  batteryCapacity: SensorMetric<BatteryCapacitySample>;
  /** 当前 Wi-Fi SSID 指标。 */
  wifiSsid: SensorMetric<string>;
  /** 电池状态指标。 */
  battery: SensorMetric<BatteryStateSample>;
  /** 设备温度指标。 */
  temperature: SensorMetric<number>;
  /** 重力三维向量指标。 */
  gravity: SensorMetric<SensorVector3>;
  /** 设备方向指标。 */
  orientation: SensorMetric<Orientation>;
  /** 磁场三维向量指标。 */
  magneticField: SensorMetric<SensorVector3>;
  /** 线性加速度三维向量指标。 */
  linearAcceleration: SensorMetric<SensorVector3>;
  /** 运动强度指标。 */
  motionIntensity: SensorMetric<number>;
  /** 与快照关联的驾驶运动帧；不可用时为 `null`。 */
  drivingMotionFrame: DrivingMotionFrame | null;
  /** 生成驾驶传感器数据时使用的上下文。 */
  drivingSensorContext: DrivingSensorContext;
}

export interface DrivingSensorEvent {
  /** 本次事件携带的驾驶运动帧。 */
  frame: DrivingMotionFrame;
  /** 生成本次事件时使用的驾驶传感器上下文。 */
  context: DrivingSensorContext;
}

export interface StartAccelerometerOptions {
  /** 加速度计的采样速率档位。 */
  rate?: SensorRate;
  /** 接收加速度计采样的监听器。 */
  listener: T4onyListener<AccelerometerSample>;
}

export interface StartGyroscopeOptions {
  /** 陀螺仪的采样速率档位。 */
  rate?: SensorRate;
  /** 接收陀螺仪采样的监听器。 */
  listener: T4onyListener<GyroscopeSample>;
}

export interface StartDrivingSensorOptions {
  /** 接收驾驶传感器事件的监听器。 */
  listener: T4onyListener<DrivingSensorEvent>;
}

export interface T4onySensorEntries {
  /** 启动加速度计采样并返回可停止的订阅。 */
  startAccelerometer: (
    options: StartAccelerometerOptions,
  ) => Promise<T4onySubscription>;
  /** 启动陀螺仪采样并返回可停止的订阅。 */
  startGyroscope: (
    options: StartGyroscopeOptions,
  ) => Promise<T4onySubscription>;
  /** 获取当前可用传感器指标的快照。 */
  getSensorSnapshot: () => Promise<SensorSnapshot>;
  /** 启动驾驶传感器数据采集并返回可停止的订阅。 */
  startDrivingSensor: (
    options: StartDrivingSensorOptions,
  ) => Promise<T4onySubscription>;
}
