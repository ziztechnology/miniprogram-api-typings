export interface RequestSSOTokenOptions {
  /** 请求令牌所使用的客户端标识符。 */
  clientId?: string;
  /** 请求令牌所需的授权范围。 */
  scope?: string;
}

export interface SSOTokenResult {
  /* 签发的 SSO 令牌。*/
  ssoToken: string;
  /** 令牌自签发起的有效时长，单位为秒。 */
  expiresInSeconds: number;
  /** 令牌过期时间的 Unix 时间戳，单位为秒。 */
  expiresAtEpochSeconds: number;
  /** 与令牌关联的设备标识符。 */
  deviceId: number;
  /** 与令牌关联的用户标识符。 */
  userId: number;
  /** 令牌签发方。 */
  issuer: string;
  /** 用于继续完成授权的 URL。 */
  authorizeUrl: string;
}

export interface T4onyUserEntries {
  /** 请求当前用户的 SSO 令牌。 */
  requestSSOToken: (
    options?: RequestSSOTokenOptions,
  ) => Promise<SSOTokenResult>;
}
