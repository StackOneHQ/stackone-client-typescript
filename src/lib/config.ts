/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as shared from "../sdk/models/shared/index.js";
import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  "https://api.stackone.com",
] as const;

export type SDKOptions = {
  /**
   * The security details required to authenticate the SDK
   */
  security?: shared.Security | (() => Promise<shared.Security>) | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number | undefined;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string | undefined;
  /**
   * Allows overriding the default user agent used by the SDK
   */
  userAgent?: string | undefined;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(`Invalid server index ${serverIdx}`);
    }
    serverURL = ServerList[serverIdx] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "1.0.0",
  sdkVersion: "4.22.1",
  genVersion: "2.656.5",
  userAgent:
    "speakeasy-sdk/typescript 4.22.1 2.656.5 1.0.0 @stackone/stackone-client-ts",
} as const;
