/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetTeamGroupRequest = {
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

export type HrisGetTeamGroupResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The team group with the given identifier was retrieved.
   */
  hrisTeamsResult?: shared.HRISTeamsResult | undefined;
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
export const HrisGetTeamGroupRequest$inboundSchema: z.ZodType<
  HrisGetTeamGroupRequest,
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
export type HrisGetTeamGroupRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const HrisGetTeamGroupRequest$outboundSchema: z.ZodType<
  HrisGetTeamGroupRequest$Outbound,
  z.ZodTypeDef,
  HrisGetTeamGroupRequest
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
export namespace HrisGetTeamGroupRequest$ {
  /** @deprecated use `HrisGetTeamGroupRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetTeamGroupRequest$inboundSchema;
  /** @deprecated use `HrisGetTeamGroupRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetTeamGroupRequest$outboundSchema;
  /** @deprecated use `HrisGetTeamGroupRequest$Outbound` instead. */
  export type Outbound = HrisGetTeamGroupRequest$Outbound;
}

export function hrisGetTeamGroupRequestToJSON(
  hrisGetTeamGroupRequest: HrisGetTeamGroupRequest,
): string {
  return JSON.stringify(
    HrisGetTeamGroupRequest$outboundSchema.parse(hrisGetTeamGroupRequest),
  );
}

export function hrisGetTeamGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetTeamGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetTeamGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetTeamGroupRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetTeamGroupResponse$inboundSchema: z.ZodType<
  HrisGetTeamGroupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HRISTeamsResult: shared.HRISTeamsResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HRISTeamsResult": "hrisTeamsResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetTeamGroupResponse$Outbound = {
  ContentType: string;
  HRISTeamsResult?: shared.HRISTeamsResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetTeamGroupResponse$outboundSchema: z.ZodType<
  HrisGetTeamGroupResponse$Outbound,
  z.ZodTypeDef,
  HrisGetTeamGroupResponse
> = z.object({
  contentType: z.string(),
  hrisTeamsResult: shared.HRISTeamsResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisTeamsResult: "HRISTeamsResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetTeamGroupResponse$ {
  /** @deprecated use `HrisGetTeamGroupResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetTeamGroupResponse$inboundSchema;
  /** @deprecated use `HrisGetTeamGroupResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetTeamGroupResponse$outboundSchema;
  /** @deprecated use `HrisGetTeamGroupResponse$Outbound` instead. */
  export type Outbound = HrisGetTeamGroupResponse$Outbound;
}

export function hrisGetTeamGroupResponseToJSON(
  hrisGetTeamGroupResponse: HrisGetTeamGroupResponse,
): string {
  return JSON.stringify(
    HrisGetTeamGroupResponse$outboundSchema.parse(hrisGetTeamGroupResponse),
  );
}

export function hrisGetTeamGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetTeamGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetTeamGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetTeamGroupResponse' from JSON`,
  );
}
