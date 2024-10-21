/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { webhooksCreate } from "../funcs/webhooksCreate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "./models/operations/index.js";
import { unwrapAsync } from "./types/fp.js";

export class Webhooks extends ClientSDK {
  async create(
    request: operations.CreateRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateResponse> {
    return unwrapAsync(webhooksCreate(
      this,
      request,
      options,
    ));
  }
}
