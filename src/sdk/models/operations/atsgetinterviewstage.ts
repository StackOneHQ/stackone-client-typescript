/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetInterviewStageRequest = {
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

export type AtsGetInterviewStageResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The interview-stage with the given identifier was retrieved.
   */
  interviewStageResult?: shared.InterviewStageResult | undefined;
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
export const AtsGetInterviewStageRequest$inboundSchema: z.ZodType<
  AtsGetInterviewStageRequest,
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
export type AtsGetInterviewStageRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetInterviewStageRequest$outboundSchema: z.ZodType<
  AtsGetInterviewStageRequest$Outbound,
  z.ZodTypeDef,
  AtsGetInterviewStageRequest
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
export namespace AtsGetInterviewStageRequest$ {
  /** @deprecated use `AtsGetInterviewStageRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetInterviewStageRequest$inboundSchema;
  /** @deprecated use `AtsGetInterviewStageRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetInterviewStageRequest$outboundSchema;
  /** @deprecated use `AtsGetInterviewStageRequest$Outbound` instead. */
  export type Outbound = AtsGetInterviewStageRequest$Outbound;
}

export function atsGetInterviewStageRequestToJSON(
  atsGetInterviewStageRequest: AtsGetInterviewStageRequest,
): string {
  return JSON.stringify(
    AtsGetInterviewStageRequest$outboundSchema.parse(
      atsGetInterviewStageRequest,
    ),
  );
}

export function atsGetInterviewStageRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetInterviewStageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetInterviewStageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetInterviewStageRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetInterviewStageResponse$inboundSchema: z.ZodType<
  AtsGetInterviewStageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  InterviewStageResult: shared.InterviewStageResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "InterviewStageResult": "interviewStageResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetInterviewStageResponse$Outbound = {
  ContentType: string;
  InterviewStageResult?: shared.InterviewStageResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetInterviewStageResponse$outboundSchema: z.ZodType<
  AtsGetInterviewStageResponse$Outbound,
  z.ZodTypeDef,
  AtsGetInterviewStageResponse
> = z.object({
  contentType: z.string(),
  interviewStageResult: shared.InterviewStageResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    interviewStageResult: "InterviewStageResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetInterviewStageResponse$ {
  /** @deprecated use `AtsGetInterviewStageResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetInterviewStageResponse$inboundSchema;
  /** @deprecated use `AtsGetInterviewStageResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetInterviewStageResponse$outboundSchema;
  /** @deprecated use `AtsGetInterviewStageResponse$Outbound` instead. */
  export type Outbound = AtsGetInterviewStageResponse$Outbound;
}

export function atsGetInterviewStageResponseToJSON(
  atsGetInterviewStageResponse: AtsGetInterviewStageResponse,
): string {
  return JSON.stringify(
    AtsGetInterviewStageResponse$outboundSchema.parse(
      atsGetInterviewStageResponse,
    ),
  );
}

export function atsGetInterviewStageResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetInterviewStageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetInterviewStageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetInterviewStageResponse' from JSON`,
  );
}
