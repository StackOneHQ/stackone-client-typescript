/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type LmsGetCourseRequest = {
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

export type LmsGetCourseResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The course with the given identifier was retrieved.
   */
  courseResult?: shared.CourseResult | undefined;
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
export const LmsGetCourseRequest$inboundSchema: z.ZodType<
  LmsGetCourseRequest,
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
export type LmsGetCourseRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsGetCourseRequest$outboundSchema: z.ZodType<
  LmsGetCourseRequest$Outbound,
  z.ZodTypeDef,
  LmsGetCourseRequest
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
export namespace LmsGetCourseRequest$ {
  /** @deprecated use `LmsGetCourseRequest$inboundSchema` instead. */
  export const inboundSchema = LmsGetCourseRequest$inboundSchema;
  /** @deprecated use `LmsGetCourseRequest$outboundSchema` instead. */
  export const outboundSchema = LmsGetCourseRequest$outboundSchema;
  /** @deprecated use `LmsGetCourseRequest$Outbound` instead. */
  export type Outbound = LmsGetCourseRequest$Outbound;
}

export function lmsGetCourseRequestToJSON(
  lmsGetCourseRequest: LmsGetCourseRequest,
): string {
  return JSON.stringify(
    LmsGetCourseRequest$outboundSchema.parse(lmsGetCourseRequest),
  );
}

export function lmsGetCourseRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsGetCourseRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsGetCourseRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsGetCourseRequest' from JSON`,
  );
}

/** @internal */
export const LmsGetCourseResponse$inboundSchema: z.ZodType<
  LmsGetCourseResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CourseResult: shared.CourseResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CourseResult": "courseResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsGetCourseResponse$Outbound = {
  ContentType: string;
  CourseResult?: shared.CourseResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsGetCourseResponse$outboundSchema: z.ZodType<
  LmsGetCourseResponse$Outbound,
  z.ZodTypeDef,
  LmsGetCourseResponse
> = z.object({
  contentType: z.string(),
  courseResult: shared.CourseResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    courseResult: "CourseResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsGetCourseResponse$ {
  /** @deprecated use `LmsGetCourseResponse$inboundSchema` instead. */
  export const inboundSchema = LmsGetCourseResponse$inboundSchema;
  /** @deprecated use `LmsGetCourseResponse$outboundSchema` instead. */
  export const outboundSchema = LmsGetCourseResponse$outboundSchema;
  /** @deprecated use `LmsGetCourseResponse$Outbound` instead. */
  export type Outbound = LmsGetCourseResponse$Outbound;
}

export function lmsGetCourseResponseToJSON(
  lmsGetCourseResponse: LmsGetCourseResponse,
): string {
  return JSON.stringify(
    LmsGetCourseResponse$outboundSchema.parse(lmsGetCourseResponse),
  );
}

export function lmsGetCourseResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsGetCourseResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsGetCourseResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsGetCourseResponse' from JSON`,
  );
}
