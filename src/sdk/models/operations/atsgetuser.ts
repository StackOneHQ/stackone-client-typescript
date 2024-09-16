/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsGetUserRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  id: string;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result is returned
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsGetUserResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * The user with the given identifier was retrieved.
   */
  userResult?: shared.UserResult | undefined;
};

/** @internal */
export const AtsGetUserRequest$inboundSchema: z.ZodType<
  AtsGetUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetUserRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetUserRequest$outboundSchema: z.ZodType<
  AtsGetUserRequest$Outbound,
  z.ZodTypeDef,
  AtsGetUserRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetUserRequest$ {
  /** @deprecated use `AtsGetUserRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetUserRequest$inboundSchema;
  /** @deprecated use `AtsGetUserRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetUserRequest$outboundSchema;
  /** @deprecated use `AtsGetUserRequest$Outbound` instead. */
  export type Outbound = AtsGetUserRequest$Outbound;
}

/** @internal */
export const AtsGetUserResponse$inboundSchema: z.ZodType<
  AtsGetUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  UserResult: shared.UserResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "UserResult": "userResult",
  });
});

/** @internal */
export type AtsGetUserResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  UserResult?: shared.UserResult$Outbound | undefined;
};

/** @internal */
export const AtsGetUserResponse$outboundSchema: z.ZodType<
  AtsGetUserResponse$Outbound,
  z.ZodTypeDef,
  AtsGetUserResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  userResult: shared.UserResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    userResult: "UserResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetUserResponse$ {
  /** @deprecated use `AtsGetUserResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetUserResponse$inboundSchema;
  /** @deprecated use `AtsGetUserResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetUserResponse$outboundSchema;
  /** @deprecated use `AtsGetUserResponse$Outbound` instead. */
  export type Outbound = AtsGetUserResponse$Outbound;
}
