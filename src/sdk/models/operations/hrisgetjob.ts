/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
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
   * Indicates that the raw request result is returned
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
  raw: z.nullable(z.boolean().default(false)),
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
  raw: boolean | null;
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
export namespace HrisGetJobRequest$ {
  /** @deprecated use `HrisGetJobRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetJobRequest$inboundSchema;
  /** @deprecated use `HrisGetJobRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetJobRequest$outboundSchema;
  /** @deprecated use `HrisGetJobRequest$Outbound` instead. */
  export type Outbound = HrisGetJobRequest$Outbound;
}

/** @internal */
export const HrisGetJobResponse$inboundSchema: z.ZodType<
  HrisGetJobResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  JobResult: shared.JobResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "JobResult": "jobResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetJobResponse$Outbound = {
  ContentType: string;
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
  jobResult: shared.JobResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
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
