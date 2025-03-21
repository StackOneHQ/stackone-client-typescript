/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetTimeOffTypeRequest = {
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

export type HrisGetTimeOffTypeResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The time off type with the given identifier was retrieved.
   */
  referenceResult?: shared.ReferenceResult | undefined;
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
export const HrisGetTimeOffTypeRequest$inboundSchema: z.ZodType<
  HrisGetTimeOffTypeRequest,
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
export type HrisGetTimeOffTypeRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisGetTimeOffTypeRequest$outboundSchema: z.ZodType<
  HrisGetTimeOffTypeRequest$Outbound,
  z.ZodTypeDef,
  HrisGetTimeOffTypeRequest
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
export namespace HrisGetTimeOffTypeRequest$ {
  /** @deprecated use `HrisGetTimeOffTypeRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetTimeOffTypeRequest$inboundSchema;
  /** @deprecated use `HrisGetTimeOffTypeRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetTimeOffTypeRequest$outboundSchema;
  /** @deprecated use `HrisGetTimeOffTypeRequest$Outbound` instead. */
  export type Outbound = HrisGetTimeOffTypeRequest$Outbound;
}

export function hrisGetTimeOffTypeRequestToJSON(
  hrisGetTimeOffTypeRequest: HrisGetTimeOffTypeRequest,
): string {
  return JSON.stringify(
    HrisGetTimeOffTypeRequest$outboundSchema.parse(hrisGetTimeOffTypeRequest),
  );
}

export function hrisGetTimeOffTypeRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetTimeOffTypeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetTimeOffTypeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetTimeOffTypeRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetTimeOffTypeResponse$inboundSchema: z.ZodType<
  HrisGetTimeOffTypeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  ReferenceResult: shared.ReferenceResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "ReferenceResult": "referenceResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetTimeOffTypeResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  ReferenceResult?: shared.ReferenceResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetTimeOffTypeResponse$outboundSchema: z.ZodType<
  HrisGetTimeOffTypeResponse$Outbound,
  z.ZodTypeDef,
  HrisGetTimeOffTypeResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  referenceResult: shared.ReferenceResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    referenceResult: "ReferenceResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetTimeOffTypeResponse$ {
  /** @deprecated use `HrisGetTimeOffTypeResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetTimeOffTypeResponse$inboundSchema;
  /** @deprecated use `HrisGetTimeOffTypeResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetTimeOffTypeResponse$outboundSchema;
  /** @deprecated use `HrisGetTimeOffTypeResponse$Outbound` instead. */
  export type Outbound = HrisGetTimeOffTypeResponse$Outbound;
}

export function hrisGetTimeOffTypeResponseToJSON(
  hrisGetTimeOffTypeResponse: HrisGetTimeOffTypeResponse,
): string {
  return JSON.stringify(
    HrisGetTimeOffTypeResponse$outboundSchema.parse(hrisGetTimeOffTypeResponse),
  );
}

export function hrisGetTimeOffTypeResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetTimeOffTypeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetTimeOffTypeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetTimeOffTypeResponse' from JSON`,
  );
}
