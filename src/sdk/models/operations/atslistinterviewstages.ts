/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsListInterviewStagesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListInterviewStagesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListInterviewStagesQueryParamFilter | null | undefined;
  /**
   * The unified cursor
   */
  next?: string | null | undefined;
  /**
   * The page number of the results to fetch
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  page?: string | null | undefined;
  /**
   * The number of results per page
   */
  pageSize?: string | null | undefined;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result is returned
   */
  raw?: boolean | null | undefined;
  /**
   * The sync token to select the only updated results
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  syncToken?: string | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  updatedAfter?: string | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsListInterviewStagesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of interview-stages was retrieved.
   */
  interviewStagesPaginated?: shared.InterviewStagesPaginated | undefined;
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
export const AtsListInterviewStagesQueryParamFilter$inboundSchema: z.ZodType<
  AtsListInterviewStagesQueryParamFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  updated_after: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "updated_after": "updatedAfter",
  });
});

/** @internal */
export type AtsListInterviewStagesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListInterviewStagesQueryParamFilter$outboundSchema: z.ZodType<
  AtsListInterviewStagesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListInterviewStagesQueryParamFilter
> = z.object({
  updatedAfter: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    updatedAfter: "updated_after",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListInterviewStagesQueryParamFilter$ {
  /** @deprecated use `AtsListInterviewStagesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListInterviewStagesQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListInterviewStagesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListInterviewStagesQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListInterviewStagesQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListInterviewStagesQueryParamFilter$Outbound;
}

export function atsListInterviewStagesQueryParamFilterToJSON(
  atsListInterviewStagesQueryParamFilter:
    AtsListInterviewStagesQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListInterviewStagesQueryParamFilter$outboundSchema.parse(
      atsListInterviewStagesQueryParamFilter,
    ),
  );
}

export function atsListInterviewStagesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<AtsListInterviewStagesQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListInterviewStagesQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListInterviewStagesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListInterviewStagesRequest$inboundSchema: z.ZodType<
  AtsListInterviewStagesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListInterviewStagesQueryParamFilter$inboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  sync_token: z.nullable(z.string()).optional(),
  updated_after: z.nullable(z.string()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "sync_token": "syncToken",
    "updated_after": "updatedAfter",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsListInterviewStagesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: AtsListInterviewStagesQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  sync_token?: string | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsListInterviewStagesRequest$outboundSchema: z.ZodType<
  AtsListInterviewStagesRequest$Outbound,
  z.ZodTypeDef,
  AtsListInterviewStagesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListInterviewStagesQueryParamFilter$outboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  syncToken: z.nullable(z.string()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    syncToken: "sync_token",
    updatedAfter: "updated_after",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListInterviewStagesRequest$ {
  /** @deprecated use `AtsListInterviewStagesRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListInterviewStagesRequest$inboundSchema;
  /** @deprecated use `AtsListInterviewStagesRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListInterviewStagesRequest$outboundSchema;
  /** @deprecated use `AtsListInterviewStagesRequest$Outbound` instead. */
  export type Outbound = AtsListInterviewStagesRequest$Outbound;
}

export function atsListInterviewStagesRequestToJSON(
  atsListInterviewStagesRequest: AtsListInterviewStagesRequest,
): string {
  return JSON.stringify(
    AtsListInterviewStagesRequest$outboundSchema.parse(
      atsListInterviewStagesRequest,
    ),
  );
}

export function atsListInterviewStagesRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListInterviewStagesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListInterviewStagesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListInterviewStagesRequest' from JSON`,
  );
}

/** @internal */
export const AtsListInterviewStagesResponse$inboundSchema: z.ZodType<
  AtsListInterviewStagesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  InterviewStagesPaginated: shared.InterviewStagesPaginated$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "InterviewStagesPaginated": "interviewStagesPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListInterviewStagesResponse$Outbound = {
  ContentType: string;
  InterviewStagesPaginated?:
    | shared.InterviewStagesPaginated$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListInterviewStagesResponse$outboundSchema: z.ZodType<
  AtsListInterviewStagesResponse$Outbound,
  z.ZodTypeDef,
  AtsListInterviewStagesResponse
> = z.object({
  contentType: z.string(),
  interviewStagesPaginated: shared.InterviewStagesPaginated$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    interviewStagesPaginated: "InterviewStagesPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListInterviewStagesResponse$ {
  /** @deprecated use `AtsListInterviewStagesResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListInterviewStagesResponse$inboundSchema;
  /** @deprecated use `AtsListInterviewStagesResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListInterviewStagesResponse$outboundSchema;
  /** @deprecated use `AtsListInterviewStagesResponse$Outbound` instead. */
  export type Outbound = AtsListInterviewStagesResponse$Outbound;
}

export function atsListInterviewStagesResponseToJSON(
  atsListInterviewStagesResponse: AtsListInterviewStagesResponse,
): string {
  return JSON.stringify(
    AtsListInterviewStagesResponse$outboundSchema.parse(
      atsListInterviewStagesResponse,
    ),
  );
}

export function atsListInterviewStagesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListInterviewStagesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListInterviewStagesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListInterviewStagesResponse' from JSON`,
  );
}
