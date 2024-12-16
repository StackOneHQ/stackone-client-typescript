/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetAssessmentsPackageRequest = {
  /**
   * The comma separated list of fields to return in the response (if empty, all fields are returned)
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

export type AtsGetAssessmentsPackageResponse = {
  /**
   * The assessments package with the given identifier was retrieved.
   */
  assessmentsPackagesResult?: shared.AssessmentsPackagesResult | undefined;
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
export const AtsGetAssessmentsPackageRequest$inboundSchema: z.ZodType<
  AtsGetAssessmentsPackageRequest,
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
export type AtsGetAssessmentsPackageRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetAssessmentsPackageRequest$outboundSchema: z.ZodType<
  AtsGetAssessmentsPackageRequest$Outbound,
  z.ZodTypeDef,
  AtsGetAssessmentsPackageRequest
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
export namespace AtsGetAssessmentsPackageRequest$ {
  /** @deprecated use `AtsGetAssessmentsPackageRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetAssessmentsPackageRequest$inboundSchema;
  /** @deprecated use `AtsGetAssessmentsPackageRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetAssessmentsPackageRequest$outboundSchema;
  /** @deprecated use `AtsGetAssessmentsPackageRequest$Outbound` instead. */
  export type Outbound = AtsGetAssessmentsPackageRequest$Outbound;
}

export function atsGetAssessmentsPackageRequestToJSON(
  atsGetAssessmentsPackageRequest: AtsGetAssessmentsPackageRequest,
): string {
  return JSON.stringify(
    AtsGetAssessmentsPackageRequest$outboundSchema.parse(
      atsGetAssessmentsPackageRequest,
    ),
  );
}

export function atsGetAssessmentsPackageRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetAssessmentsPackageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetAssessmentsPackageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetAssessmentsPackageRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetAssessmentsPackageResponse$inboundSchema: z.ZodType<
  AtsGetAssessmentsPackageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AssessmentsPackagesResult: shared.AssessmentsPackagesResult$inboundSchema
    .optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AssessmentsPackagesResult": "assessmentsPackagesResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetAssessmentsPackageResponse$Outbound = {
  AssessmentsPackagesResult?:
    | shared.AssessmentsPackagesResult$Outbound
    | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetAssessmentsPackageResponse$outboundSchema: z.ZodType<
  AtsGetAssessmentsPackageResponse$Outbound,
  z.ZodTypeDef,
  AtsGetAssessmentsPackageResponse
> = z.object({
  assessmentsPackagesResult: shared.AssessmentsPackagesResult$outboundSchema
    .optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    assessmentsPackagesResult: "AssessmentsPackagesResult",
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
export namespace AtsGetAssessmentsPackageResponse$ {
  /** @deprecated use `AtsGetAssessmentsPackageResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetAssessmentsPackageResponse$inboundSchema;
  /** @deprecated use `AtsGetAssessmentsPackageResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetAssessmentsPackageResponse$outboundSchema;
  /** @deprecated use `AtsGetAssessmentsPackageResponse$Outbound` instead. */
  export type Outbound = AtsGetAssessmentsPackageResponse$Outbound;
}

export function atsGetAssessmentsPackageResponseToJSON(
  atsGetAssessmentsPackageResponse: AtsGetAssessmentsPackageResponse,
): string {
  return JSON.stringify(
    AtsGetAssessmentsPackageResponse$outboundSchema.parse(
      atsGetAssessmentsPackageResponse,
    ),
  );
}

export function atsGetAssessmentsPackageResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetAssessmentsPackageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetAssessmentsPackageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetAssessmentsPackageResponse' from JSON`,
  );
}
