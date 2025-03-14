/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type LmsGetUserRequest = {
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
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsGetUserResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
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
export const LmsGetUserRequest$inboundSchema: z.ZodType<
  LmsGetUserRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsGetUserRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsGetUserRequest$outboundSchema: z.ZodType<
  LmsGetUserRequest$Outbound,
  z.ZodTypeDef,
  LmsGetUserRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace LmsGetUserRequest$ {
  /** @deprecated use `LmsGetUserRequest$inboundSchema` instead. */
  export const inboundSchema = LmsGetUserRequest$inboundSchema;
  /** @deprecated use `LmsGetUserRequest$outboundSchema` instead. */
  export const outboundSchema = LmsGetUserRequest$outboundSchema;
  /** @deprecated use `LmsGetUserRequest$Outbound` instead. */
  export type Outbound = LmsGetUserRequest$Outbound;
}

export function lmsGetUserRequestToJSON(
  lmsGetUserRequest: LmsGetUserRequest,
): string {
  return JSON.stringify(
    LmsGetUserRequest$outboundSchema.parse(lmsGetUserRequest),
  );
}

export function lmsGetUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsGetUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsGetUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsGetUserRequest' from JSON`,
  );
}

/** @internal */
export const LmsGetUserResponse$inboundSchema: z.ZodType<
  LmsGetUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  UserResult: shared.UserResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "UserResult": "userResult",
  });
});

/** @internal */
export type LmsGetUserResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  UserResult?: shared.UserResult$Outbound | undefined;
};

/** @internal */
export const LmsGetUserResponse$outboundSchema: z.ZodType<
  LmsGetUserResponse$Outbound,
  z.ZodTypeDef,
  LmsGetUserResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  userResult: shared.UserResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    userResult: "UserResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsGetUserResponse$ {
  /** @deprecated use `LmsGetUserResponse$inboundSchema` instead. */
  export const inboundSchema = LmsGetUserResponse$inboundSchema;
  /** @deprecated use `LmsGetUserResponse$outboundSchema` instead. */
  export const outboundSchema = LmsGetUserResponse$outboundSchema;
  /** @deprecated use `LmsGetUserResponse$Outbound` instead. */
  export type Outbound = LmsGetUserResponse$Outbound;
}

export function lmsGetUserResponseToJSON(
  lmsGetUserResponse: LmsGetUserResponse,
): string {
  return JSON.stringify(
    LmsGetUserResponse$outboundSchema.parse(lmsGetUserResponse),
  );
}

export function lmsGetUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsGetUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsGetUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsGetUserResponse' from JSON`,
  );
}
