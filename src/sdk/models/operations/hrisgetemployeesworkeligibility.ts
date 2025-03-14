/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetEmployeesWorkEligibilityRequest = {
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

export type HrisGetEmployeesWorkEligibilityResponse = {
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
   * The work eligibility of the employee with the given identifiers was retrieved.
   */
  workEligibilityResult?: shared.WorkEligibilityResult | undefined;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityRequest$inboundSchema: z.ZodType<
  HrisGetEmployeesWorkEligibilityRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
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
export type HrisGetEmployeesWorkEligibilityRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityRequest$outboundSchema: z.ZodType<
  HrisGetEmployeesWorkEligibilityRequest$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeesWorkEligibilityRequest
> = z.object({
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
export namespace HrisGetEmployeesWorkEligibilityRequest$ {
  /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$inboundSchema` instead. */
  export const inboundSchema =
    HrisGetEmployeesWorkEligibilityRequest$inboundSchema;
  /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$outboundSchema` instead. */
  export const outboundSchema =
    HrisGetEmployeesWorkEligibilityRequest$outboundSchema;
  /** @deprecated use `HrisGetEmployeesWorkEligibilityRequest$Outbound` instead. */
  export type Outbound = HrisGetEmployeesWorkEligibilityRequest$Outbound;
}

export function hrisGetEmployeesWorkEligibilityRequestToJSON(
  hrisGetEmployeesWorkEligibilityRequest:
    HrisGetEmployeesWorkEligibilityRequest,
): string {
  return JSON.stringify(
    HrisGetEmployeesWorkEligibilityRequest$outboundSchema.parse(
      hrisGetEmployeesWorkEligibilityRequest,
    ),
  );
}

export function hrisGetEmployeesWorkEligibilityRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetEmployeesWorkEligibilityRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisGetEmployeesWorkEligibilityRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetEmployeesWorkEligibilityRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetEmployeesWorkEligibilityResponse$inboundSchema: z.ZodType<
  HrisGetEmployeesWorkEligibilityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WorkEligibilityResult: shared.WorkEligibilityResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WorkEligibilityResult": "workEligibilityResult",
  });
});

/** @internal */
export type HrisGetEmployeesWorkEligibilityResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  WorkEligibilityResult?: shared.WorkEligibilityResult$Outbound | undefined;
};

/** @internal */
export const HrisGetEmployeesWorkEligibilityResponse$outboundSchema: z.ZodType<
  HrisGetEmployeesWorkEligibilityResponse$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeesWorkEligibilityResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  workEligibilityResult: shared.WorkEligibilityResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    workEligibilityResult: "WorkEligibilityResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeesWorkEligibilityResponse$ {
  /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$inboundSchema` instead. */
  export const inboundSchema =
    HrisGetEmployeesWorkEligibilityResponse$inboundSchema;
  /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$outboundSchema` instead. */
  export const outboundSchema =
    HrisGetEmployeesWorkEligibilityResponse$outboundSchema;
  /** @deprecated use `HrisGetEmployeesWorkEligibilityResponse$Outbound` instead. */
  export type Outbound = HrisGetEmployeesWorkEligibilityResponse$Outbound;
}

export function hrisGetEmployeesWorkEligibilityResponseToJSON(
  hrisGetEmployeesWorkEligibilityResponse:
    HrisGetEmployeesWorkEligibilityResponse,
): string {
  return JSON.stringify(
    HrisGetEmployeesWorkEligibilityResponse$outboundSchema.parse(
      hrisGetEmployeesWorkEligibilityResponse,
    ),
  );
}

export function hrisGetEmployeesWorkEligibilityResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisGetEmployeesWorkEligibilityResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisGetEmployeesWorkEligibilityResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisGetEmployeesWorkEligibilityResponse' from JSON`,
  );
}
