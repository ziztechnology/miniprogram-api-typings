import type {
  T4onyBaseEntries,
  T4onyDeviceEntries,
  T4onyDisplayEntries,
  T4onyHeadLifecycleEntries,
  T4onyMediaEntries,
  T4onyNetworkEntries,
  T4onyRuntimeEntries,
  T4onySensorEntries,
  T4onyUserEntries,
} from './components/index.js';

export type * from './components/index.js';

export interface T4ony
  extends
    T4onyRuntimeEntries,
    T4onyBaseEntries,
    T4onyDeviceEntries,
    T4onyDisplayEntries,
    T4onyHeadLifecycleEntries,
    T4onyNetworkEntries,
    T4onySensorEntries,
    T4onyUserEntries,
    T4onyMediaEntries {}

declare global {
  /** T4ony 小程序运行时 API。 */
  const t4ony: T4ony;

  interface Window {
    /** T4ony 小程序运行时 API。 */
    readonly t4ony: T4ony;
  }
}
