/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetEmployeeTimeOffBalanceRequest = {
  /**
   * The comma separated list of fields that will be expanded in the response
   */
  expand?: string | null | undefined;
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
  subResourceId: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisGetEmployeeTimeOffBalanceResponse = {
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
   * The time off balance of the employee with the given identifier was retrieved.
   */
  timeOffBalanceResult?: shared.TimeOffBalanceResult | undefined;
};

/** @internal */
export const HrisGetEmployeeTimeOffBalanceRequest$inboundSchema: z.ZodType<
  HrisGetEmployeeTimeOffBalanceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  subResourceId: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisGetEmployeeTimeOffBalanceRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeeTimeOffBalanceRequest$outboundSchema: z.ZodType<
  HrisGetEmployeeTimeOffBalanceRequest$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeTimeOffBalanceRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  subResourceId: z.string(),
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
export namespace HrisGetEmployeeTimeOffBalanceRequest$ {
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceRequest$inboundSchema` instead. */
  export const inboundSchema =
    HrisGetEmployeeTimeOffBalanceRequest$inboundSchema;
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceRequest$outboundSchema` instead. */
  export const outboundSchema =
    HrisGetEmployeeTimeOffBalanceRequest$outboundSchema;
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceRequest$Outbound` instead. */
  export type Outbound = HrisGetEmployeeTimeOffBalanceRequest$Outbound;
}

export function hrisGetEmployeeTimeOffBalanceRequestToJSON(
  hrisGetEmployeeTimeOffBalanceRequest: HrisGetEmployeeTimeOffBalanceRequest,
): string {
  return JSON.stringify(
    HrisGetEmployeeTimeOffBalanceRequest$outboundSchema.parse(
      hrisGetEmployeeTimeOffBalanceRequest,
    ),
  );
}

export function hrisGetEmployeeTimeOffBalanceRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetEmployeeTimeOffBalanceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisGetEmployeeTimeOffBalanceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetEmployeeTimeOffBalanceRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetEmployeeTimeOffBalanceResponse$inboundSchema: z.ZodType<
  HrisGetEmployeeTimeOffBalanceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TimeOffBalanceResult: shared.TimeOffBalanceResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TimeOffBalanceResult": "timeOffBalanceResult",
  });
});

/** @internal */
export type HrisGetEmployeeTimeOffBalanceResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  TimeOffBalanceResult?: shared.TimeOffBalanceResult$Outbound | undefined;
};

/** @internal */
export const HrisGetEmployeeTimeOffBalanceResponse$outboundSchema: z.ZodType<
  HrisGetEmployeeTimeOffBalanceResponse$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeTimeOffBalanceResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  timeOffBalanceResult: shared.TimeOffBalanceResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    timeOffBalanceResult: "TimeOffBalanceResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeeTimeOffBalanceResponse$ {
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceResponse$inboundSchema` instead. */
  export const inboundSchema =
    HrisGetEmployeeTimeOffBalanceResponse$inboundSchema;
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceResponse$outboundSchema` instead. */
  export const outboundSchema =
    HrisGetEmployeeTimeOffBalanceResponse$outboundSchema;
  /** @deprecated use `HrisGetEmployeeTimeOffBalanceResponse$Outbound` instead. */
  export type Outbound = HrisGetEmployeeTimeOffBalanceResponse$Outbound;
}

export function hrisGetEmployeeTimeOffBalanceResponseToJSON(
  hrisGetEmployeeTimeOffBalanceResponse: HrisGetEmployeeTimeOffBalanceResponse,
): string {
  return JSON.stringify(
    HrisGetEmployeeTimeOffBalanceResponse$outboundSchema.parse(
      hrisGetEmployeeTimeOffBalanceResponse,
    ),
  );
}

export function hrisGetEmployeeTimeOffBalanceResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetEmployeeTimeOffBalanceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisGetEmployeeTimeOffBalanceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetEmployeeTimeOffBalanceResponse' from JSON`,
  );
}
