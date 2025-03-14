/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetJobRequest = {
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

export type HrisGetJobResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The job with the given identifier was retrieved.
   */
  jobResult?: shared.JobResult | undefined;
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
export const HrisGetJobRequest$inboundSchema: z.ZodType<
  HrisGetJobRequest,
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
export type HrisGetJobRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisGetJobRequest$outboundSchema: z.ZodType<
  HrisGetJobRequest$Outbound,
  z.ZodTypeDef,
  HrisGetJobRequest
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
export namespace HrisGetJobRequest$ {
  /** @deprecated use `HrisGetJobRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetJobRequest$inboundSchema;
  /** @deprecated use `HrisGetJobRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetJobRequest$outboundSchema;
  /** @deprecated use `HrisGetJobRequest$Outbound` instead. */
  export type Outbound = HrisGetJobRequest$Outbound;
}

export function hrisGetJobRequestToJSON(
  hrisGetJobRequest: HrisGetJobRequest,
): string {
  return JSON.stringify(
    HrisGetJobRequest$outboundSchema.parse(hrisGetJobRequest),
  );
}

export function hrisGetJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetJobRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetJobRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetJobRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetJobResponse$inboundSchema: z.ZodType<
  HrisGetJobResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  JobResult: shared.JobResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "JobResult": "jobResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetJobResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  JobResult?: shared.JobResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetJobResponse$outboundSchema: z.ZodType<
  HrisGetJobResponse$Outbound,
  z.ZodTypeDef,
  HrisGetJobResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  jobResult: shared.JobResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    jobResult: "JobResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetJobResponse$ {
  /** @deprecated use `HrisGetJobResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetJobResponse$inboundSchema;
  /** @deprecated use `HrisGetJobResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetJobResponse$outboundSchema;
  /** @deprecated use `HrisGetJobResponse$Outbound` instead. */
  export type Outbound = HrisGetJobResponse$Outbound;
}

export function hrisGetJobResponseToJSON(
  hrisGetJobResponse: HrisGetJobResponse,
): string {
  return JSON.stringify(
    HrisGetJobResponse$outboundSchema.parse(hrisGetJobResponse),
  );
}

export function hrisGetJobResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetJobResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetJobResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetJobResponse' from JSON`,
  );
}
