import type {
  T4onyBaseEntries,
  T4onyDisplayEntries,
  T4onyNetworkEntries,
} from './components/index.d.ts';

export interface T4ony
  extends T4onyBaseEntries, T4onyDisplayEntries, T4onyNetworkEntries {}

declare const t4ony: T4ony;
