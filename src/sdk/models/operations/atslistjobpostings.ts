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
export type AtsListJobPostingsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListJobPostingsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListJobPostingsQueryParamFilter | null | undefined;
  /**
   * The comma separated list of fields that will be included in the response
   */
  include?: string | null | undefined;
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

export type AtsListJobPostingsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of job postings was retrieved.
   */
  jobPostingsPaginated?: shared.JobPostingsPaginated | undefined;
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
export const AtsListJobPostingsQueryParamFilter$inboundSchema: z.ZodType<
  AtsListJobPostingsQueryParamFilter,
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
export type AtsListJobPostingsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListJobPostingsQueryParamFilter$outboundSchema: z.ZodType<
  AtsListJobPostingsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListJobPostingsQueryParamFilter
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
export namespace AtsListJobPostingsQueryParamFilter$ {
  /** @deprecated use `AtsListJobPostingsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = AtsListJobPostingsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListJobPostingsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListJobPostingsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListJobPostingsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListJobPostingsQueryParamFilter$Outbound;
}

export function atsListJobPostingsQueryParamFilterToJSON(
  atsListJobPostingsQueryParamFilter: AtsListJobPostingsQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListJobPostingsQueryParamFilter$outboundSchema.parse(
      atsListJobPostingsQueryParamFilter,
    ),
  );
}

export function atsListJobPostingsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<AtsListJobPostingsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListJobPostingsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListJobPostingsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListJobPostingsRequest$inboundSchema: z.ZodType<
  AtsListJobPostingsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListJobPostingsQueryParamFilter$inboundSchema),
  ).optional(),
  include: z.nullable(z.string()).optional(),
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
export type AtsListJobPostingsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: AtsListJobPostingsQueryParamFilter$Outbound | null | undefined;
  include?: string | null | undefined;
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
export const AtsListJobPostingsRequest$outboundSchema: z.ZodType<
  AtsListJobPostingsRequest$Outbound,
  z.ZodTypeDef,
  AtsListJobPostingsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListJobPostingsQueryParamFilter$outboundSchema),
  ).optional(),
  include: z.nullable(z.string()).optional(),
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
export namespace AtsListJobPostingsRequest$ {
  /** @deprecated use `AtsListJobPostingsRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListJobPostingsRequest$inboundSchema;
  /** @deprecated use `AtsListJobPostingsRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListJobPostingsRequest$outboundSchema;
  /** @deprecated use `AtsListJobPostingsRequest$Outbound` instead. */
  export type Outbound = AtsListJobPostingsRequest$Outbound;
}

export function atsListJobPostingsRequestToJSON(
  atsListJobPostingsRequest: AtsListJobPostingsRequest,
): string {
  return JSON.stringify(
    AtsListJobPostingsRequest$outboundSchema.parse(atsListJobPostingsRequest),
  );
}

export function atsListJobPostingsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListJobPostingsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListJobPostingsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListJobPostingsRequest' from JSON`,
  );
}

/** @internal */
export const AtsListJobPostingsResponse$inboundSchema: z.ZodType<
  AtsListJobPostingsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  JobPostingsPaginated: shared.JobPostingsPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "JobPostingsPaginated": "jobPostingsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListJobPostingsResponse$Outbound = {
  ContentType: string;
  JobPostingsPaginated?: shared.JobPostingsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListJobPostingsResponse$outboundSchema: z.ZodType<
  AtsListJobPostingsResponse$Outbound,
  z.ZodTypeDef,
  AtsListJobPostingsResponse
> = z.object({
  contentType: z.string(),
  jobPostingsPaginated: shared.JobPostingsPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    jobPostingsPaginated: "JobPostingsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListJobPostingsResponse$ {
  /** @deprecated use `AtsListJobPostingsResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListJobPostingsResponse$inboundSchema;
  /** @deprecated use `AtsListJobPostingsResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListJobPostingsResponse$outboundSchema;
  /** @deprecated use `AtsListJobPostingsResponse$Outbound` instead. */
  export type Outbound = AtsListJobPostingsResponse$Outbound;
}

export function atsListJobPostingsResponseToJSON(
  atsListJobPostingsResponse: AtsListJobPostingsResponse,
): string {
  return JSON.stringify(
    AtsListJobPostingsResponse$outboundSchema.parse(atsListJobPostingsResponse),
  );
}

export function atsListJobPostingsResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListJobPostingsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListJobPostingsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListJobPostingsResponse' from JSON`,
  );
}
