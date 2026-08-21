export interface BluetoothNowPlaying {
  /** 当前是否可获取蓝牙媒体播放信息。 */
  available: boolean;
  /** 媒体播放信息的来源。 */
  source: 'bluetooth';
  /** 获取蓝牙媒体播放信息的状态。 */
  status: string;
  /** 对当前状态的补充说明。 */
  message: string;
  /** 当前是否存在活跃的蓝牙媒体会话。 */
  active: boolean;
  /** 提供媒体会话的应用包名。 */
  packageName: string;
  /** 当前媒体标题。 */
  title: string;
  /** 当前媒体艺术家。 */
  artist: string;
  /** 当前媒体所属专辑。 */
  album: string;
  /** 当前媒体流派。 */
  genre: string;
  /** 当前媒体歌词。 */
  lyrics: string;
  /** 当前媒体会话是否支持歌词。 */
  lyricsSupported: boolean;
  /** 当前媒体总时长，单位为毫秒。 */
  durationMs: number;
  /** 当前播放位置，单位为毫秒。 */
  positionMs: number;
  /** 当前已缓冲到的位置，单位为毫秒。 */
  bufferedPositionMs: number;
  /** 当前播放状态的数值代码。 */
  playbackState: number;
  /** 当前播放状态的可读名称。 */
  playbackStateName: string;
  /** 当前媒体会话支持的操作位掩码。 */
  actions: number;
  /** 当前媒体会话是否支持播放操作。 */
  canPlay: boolean;
  /** 当前媒体会话是否支持暂停操作。 */
  canPause: boolean;
  /** 当前媒体会话是否支持切换到下一项。 */
  canNext: boolean;
  /** 当前媒体会话是否支持切换到上一项。 */
  canPrevious: boolean;
  /** 当前媒体会话是否支持跳转播放位置。 */
  canSeek: boolean;
  /** 当前媒体封面的 URI。 */
  artUri: string;
  /** 当前专辑封面的 URI。 */
  albumArtUri: string;
  /** 当前媒体显示图标的 URI。 */
  displayIconUri: string;
  /** 当前媒体是否包含内嵌封面。 */
  hasEmbeddedArt: boolean;
  /** 当前媒体在来源应用中的标识符。 */
  mediaId: string;
  /** 当前媒体在播放列表中的曲目序号。 */
  trackNumber: number;
  /** 当前播放列表的曲目总数。 */
  numTracks: number;
  /** 播放信息最近更新的 Unix 时间戳，单位为毫秒。 */
  updatedAtMs: number;
  /** 播放信息最近更新时相对于系统启动的毫秒时间戳。 */
  updatedElapsedRealtimeMs: number;
}

export interface T4onyMediaEntries {
  /** 获取当前蓝牙媒体会话的播放信息。 */
  getBluetoothNowPlaying: () => Promise<BluetoothNowPlaying>;
}
