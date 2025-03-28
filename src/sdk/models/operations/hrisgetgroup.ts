/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetGroupRequest = {
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

export type HrisGetGroupResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The group with the given identifier was retrieved.
   */
  hrisGroupsResult?: shared.HRISGroupsResult | undefined;
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
export const HrisGetGroupRequest$inboundSchema: z.ZodType<
  HrisGetGroupRequest,
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
export type HrisGetGroupRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisGetGroupRequest$outboundSchema: z.ZodType<
  HrisGetGroupRequest$Outbound,
  z.ZodTypeDef,
  HrisGetGroupRequest
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
export namespace HrisGetGroupRequest$ {
  /** @deprecated use `HrisGetGroupRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetGroupRequest$inboundSchema;
  /** @deprecated use `HrisGetGroupRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetGroupRequest$outboundSchema;
  /** @deprecated use `HrisGetGroupRequest$Outbound` instead. */
  export type Outbound = HrisGetGroupRequest$Outbound;
}

export function hrisGetGroupRequestToJSON(
  hrisGetGroupRequest: HrisGetGroupRequest,
): string {
  return JSON.stringify(
    HrisGetGroupRequest$outboundSchema.parse(hrisGetGroupRequest),
  );
}

export function hrisGetGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetGroupRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetGroupResponse$inboundSchema: z.ZodType<
  HrisGetGroupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HRISGroupsResult: shared.HRISGroupsResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HRISGroupsResult": "hrisGroupsResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetGroupResponse$Outbound = {
  ContentType: string;
  HRISGroupsResult?: shared.HRISGroupsResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetGroupResponse$outboundSchema: z.ZodType<
  HrisGetGroupResponse$Outbound,
  z.ZodTypeDef,
  HrisGetGroupResponse
> = z.object({
  contentType: z.string(),
  hrisGroupsResult: shared.HRISGroupsResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisGroupsResult: "HRISGroupsResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetGroupResponse$ {
  /** @deprecated use `HrisGetGroupResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetGroupResponse$inboundSchema;
  /** @deprecated use `HrisGetGroupResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetGroupResponse$outboundSchema;
  /** @deprecated use `HrisGetGroupResponse$Outbound` instead. */
  export type Outbound = HrisGetGroupResponse$Outbound;
}

export function hrisGetGroupResponseToJSON(
  hrisGetGroupResponse: HrisGetGroupResponse,
): string {
  return JSON.stringify(
    HrisGetGroupResponse$outboundSchema.parse(hrisGetGroupResponse),
  );
}

export function hrisGetGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetGroupResponse' from JSON`,
  );
}
