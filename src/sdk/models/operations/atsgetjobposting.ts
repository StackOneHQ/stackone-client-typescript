/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetJobPostingRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  id: string;
  /**
   * The comma separated list of fields that will be included in the response
   */
  include?: string | null | undefined;
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

export type AtsGetJobPostingResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The job with the given identifier was retrieved.
   */
  jobPostingResult?: shared.JobPostingResult | undefined;
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
export const AtsGetJobPostingRequest$inboundSchema: z.ZodType<
  AtsGetJobPostingRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  include: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetJobPostingRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  include?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetJobPostingRequest$outboundSchema: z.ZodType<
  AtsGetJobPostingRequest$Outbound,
  z.ZodTypeDef,
  AtsGetJobPostingRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  include: z.nullable(z.string()).optional(),
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
export namespace AtsGetJobPostingRequest$ {
  /** @deprecated use `AtsGetJobPostingRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetJobPostingRequest$inboundSchema;
  /** @deprecated use `AtsGetJobPostingRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetJobPostingRequest$outboundSchema;
  /** @deprecated use `AtsGetJobPostingRequest$Outbound` instead. */
  export type Outbound = AtsGetJobPostingRequest$Outbound;
}

export function atsGetJobPostingRequestToJSON(
  atsGetJobPostingRequest: AtsGetJobPostingRequest,
): string {
  return JSON.stringify(
    AtsGetJobPostingRequest$outboundSchema.parse(atsGetJobPostingRequest),
  );
}

export function atsGetJobPostingRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetJobPostingRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetJobPostingRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetJobPostingRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetJobPostingResponse$inboundSchema: z.ZodType<
  AtsGetJobPostingResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  JobPostingResult: shared.JobPostingResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "JobPostingResult": "jobPostingResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetJobPostingResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  JobPostingResult?: shared.JobPostingResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetJobPostingResponse$outboundSchema: z.ZodType<
  AtsGetJobPostingResponse$Outbound,
  z.ZodTypeDef,
  AtsGetJobPostingResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  jobPostingResult: shared.JobPostingResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    jobPostingResult: "JobPostingResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetJobPostingResponse$ {
  /** @deprecated use `AtsGetJobPostingResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetJobPostingResponse$inboundSchema;
  /** @deprecated use `AtsGetJobPostingResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetJobPostingResponse$outboundSchema;
  /** @deprecated use `AtsGetJobPostingResponse$Outbound` instead. */
  export type Outbound = AtsGetJobPostingResponse$Outbound;
}

export function atsGetJobPostingResponseToJSON(
  atsGetJobPostingResponse: AtsGetJobPostingResponse,
): string {
  return JSON.stringify(
    AtsGetJobPostingResponse$outboundSchema.parse(atsGetJobPostingResponse),
  );
}

export function atsGetJobPostingResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetJobPostingResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetJobPostingResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetJobPostingResponse' from JSON`,
  );
}
