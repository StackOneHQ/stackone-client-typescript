/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetLocationRequest = {
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

export type HrisGetLocationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The Location with the given identifier was retrieved.
   */
  hrisLocationResult?: shared.HRISLocationResult | undefined;
  headers: { [k: string]: Array<string> };
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
};

/** @internal */
export const HrisGetLocationRequest$inboundSchema: z.ZodType<
  HrisGetLocationRequest,
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
export type HrisGetLocationRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const HrisGetLocationRequest$outboundSchema: z.ZodType<
  HrisGetLocationRequest$Outbound,
  z.ZodTypeDef,
  HrisGetLocationRequest
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
export namespace HrisGetLocationRequest$ {
  /** @deprecated use `HrisGetLocationRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetLocationRequest$inboundSchema;
  /** @deprecated use `HrisGetLocationRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetLocationRequest$outboundSchema;
  /** @deprecated use `HrisGetLocationRequest$Outbound` instead. */
  export type Outbound = HrisGetLocationRequest$Outbound;
}

export function hrisGetLocationRequestToJSON(
  hrisGetLocationRequest: HrisGetLocationRequest,
): string {
  return JSON.stringify(
    HrisGetLocationRequest$outboundSchema.parse(hrisGetLocationRequest),
  );
}

export function hrisGetLocationRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetLocationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetLocationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetLocationRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetLocationResponse$inboundSchema: z.ZodType<
  HrisGetLocationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HRISLocationResult: shared.HRISLocationResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HRISLocationResult": "hrisLocationResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetLocationResponse$Outbound = {
  ContentType: string;
  HRISLocationResult?: shared.HRISLocationResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetLocationResponse$outboundSchema: z.ZodType<
  HrisGetLocationResponse$Outbound,
  z.ZodTypeDef,
  HrisGetLocationResponse
> = z.object({
  contentType: z.string(),
  hrisLocationResult: shared.HRISLocationResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisLocationResult: "HRISLocationResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetLocationResponse$ {
  /** @deprecated use `HrisGetLocationResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetLocationResponse$inboundSchema;
  /** @deprecated use `HrisGetLocationResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetLocationResponse$outboundSchema;
  /** @deprecated use `HrisGetLocationResponse$Outbound` instead. */
  export type Outbound = HrisGetLocationResponse$Outbound;
}

export function hrisGetLocationResponseToJSON(
  hrisGetLocationResponse: HrisGetLocationResponse,
): string {
  return JSON.stringify(
    HrisGetLocationResponse$outboundSchema.parse(hrisGetLocationResponse),
  );
}

export function hrisGetLocationResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetLocationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetLocationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetLocationResponse' from JSON`,
  );
}
