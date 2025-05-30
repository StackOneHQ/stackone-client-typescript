/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetAssessmentsResultRequest = {
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

export type AtsGetAssessmentsResultResponse = {
  /**
   * The assessments result with the given identifier was retrieved.
   */
  assessmentResultsResult?: shared.AssessmentResultsResult | undefined;
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
};

/** @internal */
export const AtsGetAssessmentsResultRequest$inboundSchema: z.ZodType<
  AtsGetAssessmentsResultRequest,
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
export type AtsGetAssessmentsResultRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsGetAssessmentsResultRequest$outboundSchema: z.ZodType<
  AtsGetAssessmentsResultRequest$Outbound,
  z.ZodTypeDef,
  AtsGetAssessmentsResultRequest
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
export namespace AtsGetAssessmentsResultRequest$ {
  /** @deprecated use `AtsGetAssessmentsResultRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetAssessmentsResultRequest$inboundSchema;
  /** @deprecated use `AtsGetAssessmentsResultRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetAssessmentsResultRequest$outboundSchema;
  /** @deprecated use `AtsGetAssessmentsResultRequest$Outbound` instead. */
  export type Outbound = AtsGetAssessmentsResultRequest$Outbound;
}

export function atsGetAssessmentsResultRequestToJSON(
  atsGetAssessmentsResultRequest: AtsGetAssessmentsResultRequest,
): string {
  return JSON.stringify(
    AtsGetAssessmentsResultRequest$outboundSchema.parse(
      atsGetAssessmentsResultRequest,
    ),
  );
}

export function atsGetAssessmentsResultRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetAssessmentsResultRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetAssessmentsResultRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetAssessmentsResultRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetAssessmentsResultResponse$inboundSchema: z.ZodType<
  AtsGetAssessmentsResultResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AssessmentResultsResult: shared.AssessmentResultsResult$inboundSchema
    .optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AssessmentResultsResult": "assessmentResultsResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetAssessmentsResultResponse$Outbound = {
  AssessmentResultsResult?: shared.AssessmentResultsResult$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetAssessmentsResultResponse$outboundSchema: z.ZodType<
  AtsGetAssessmentsResultResponse$Outbound,
  z.ZodTypeDef,
  AtsGetAssessmentsResultResponse
> = z.object({
  assessmentResultsResult: shared.AssessmentResultsResult$outboundSchema
    .optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    assessmentResultsResult: "AssessmentResultsResult",
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetAssessmentsResultResponse$ {
  /** @deprecated use `AtsGetAssessmentsResultResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetAssessmentsResultResponse$inboundSchema;
  /** @deprecated use `AtsGetAssessmentsResultResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetAssessmentsResultResponse$outboundSchema;
  /** @deprecated use `AtsGetAssessmentsResultResponse$Outbound` instead. */
  export type Outbound = AtsGetAssessmentsResultResponse$Outbound;
}

export function atsGetAssessmentsResultResponseToJSON(
  atsGetAssessmentsResultResponse: AtsGetAssessmentsResultResponse,
): string {
  return JSON.stringify(
    AtsGetAssessmentsResultResponse$outboundSchema.parse(
      atsGetAssessmentsResultResponse,
    ),
  );
}

export function atsGetAssessmentsResultResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetAssessmentsResultResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetAssessmentsResultResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetAssessmentsResultResponse' from JSON`,
  );
}
