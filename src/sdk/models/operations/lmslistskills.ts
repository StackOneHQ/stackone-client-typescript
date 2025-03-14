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
export type LmsListSkillsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type LmsListSkillsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: LmsListSkillsQueryParamFilter | null | undefined;
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
   * The number of results per page (default value is 25)
   */
  pageSize?: string | null | undefined;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
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

export type LmsListSkillsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The list of skills was retrieved.
   */
  skillsPaginated?: shared.SkillsPaginated | undefined;
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
export const LmsListSkillsQueryParamFilter$inboundSchema: z.ZodType<
  LmsListSkillsQueryParamFilter,
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
export type LmsListSkillsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const LmsListSkillsQueryParamFilter$outboundSchema: z.ZodType<
  LmsListSkillsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  LmsListSkillsQueryParamFilter
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
export namespace LmsListSkillsQueryParamFilter$ {
  /** @deprecated use `LmsListSkillsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = LmsListSkillsQueryParamFilter$inboundSchema;
  /** @deprecated use `LmsListSkillsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = LmsListSkillsQueryParamFilter$outboundSchema;
  /** @deprecated use `LmsListSkillsQueryParamFilter$Outbound` instead. */
  export type Outbound = LmsListSkillsQueryParamFilter$Outbound;
}

export function lmsListSkillsQueryParamFilterToJSON(
  lmsListSkillsQueryParamFilter: LmsListSkillsQueryParamFilter,
): string {
  return JSON.stringify(
    LmsListSkillsQueryParamFilter$outboundSchema.parse(
      lmsListSkillsQueryParamFilter,
    ),
  );
}

export function lmsListSkillsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<LmsListSkillsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListSkillsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListSkillsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const LmsListSkillsRequest$inboundSchema: z.ZodType<
  LmsListSkillsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => LmsListSkillsQueryParamFilter$inboundSchema))
    .optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  updated_after: z.nullable(z.string()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "updated_after": "updatedAfter",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsListSkillsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: LmsListSkillsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsListSkillsRequest$outboundSchema: z.ZodType<
  LmsListSkillsRequest$Outbound,
  z.ZodTypeDef,
  LmsListSkillsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => LmsListSkillsQueryParamFilter$outboundSchema))
    .optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    updatedAfter: "updated_after",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListSkillsRequest$ {
  /** @deprecated use `LmsListSkillsRequest$inboundSchema` instead. */
  export const inboundSchema = LmsListSkillsRequest$inboundSchema;
  /** @deprecated use `LmsListSkillsRequest$outboundSchema` instead. */
  export const outboundSchema = LmsListSkillsRequest$outboundSchema;
  /** @deprecated use `LmsListSkillsRequest$Outbound` instead. */
  export type Outbound = LmsListSkillsRequest$Outbound;
}

export function lmsListSkillsRequestToJSON(
  lmsListSkillsRequest: LmsListSkillsRequest,
): string {
  return JSON.stringify(
    LmsListSkillsRequest$outboundSchema.parse(lmsListSkillsRequest),
  );
}

export function lmsListSkillsRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsListSkillsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListSkillsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListSkillsRequest' from JSON`,
  );
}

/** @internal */
export const LmsListSkillsResponse$inboundSchema: z.ZodType<
  LmsListSkillsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  SkillsPaginated: shared.SkillsPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "SkillsPaginated": "skillsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsListSkillsResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  SkillsPaginated?: shared.SkillsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsListSkillsResponse$outboundSchema: z.ZodType<
  LmsListSkillsResponse$Outbound,
  z.ZodTypeDef,
  LmsListSkillsResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  skillsPaginated: shared.SkillsPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    skillsPaginated: "SkillsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListSkillsResponse$ {
  /** @deprecated use `LmsListSkillsResponse$inboundSchema` instead. */
  export const inboundSchema = LmsListSkillsResponse$inboundSchema;
  /** @deprecated use `LmsListSkillsResponse$outboundSchema` instead. */
  export const outboundSchema = LmsListSkillsResponse$outboundSchema;
  /** @deprecated use `LmsListSkillsResponse$Outbound` instead. */
  export type Outbound = LmsListSkillsResponse$Outbound;
}

export function lmsListSkillsResponseToJSON(
  lmsListSkillsResponse: LmsListSkillsResponse,
): string {
  return JSON.stringify(
    LmsListSkillsResponse$outboundSchema.parse(lmsListSkillsResponse),
  );
}

export function lmsListSkillsResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsListSkillsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListSkillsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListSkillsResponse' from JSON`,
  );
}
