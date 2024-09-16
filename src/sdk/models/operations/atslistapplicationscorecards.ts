/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsListApplicationScorecardsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListApplicationScorecardsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListApplicationScorecardsQueryParamFilter | null | undefined;
  id: string;
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

export type AtsListApplicationScorecardsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The scorecards related to the application with the given identifier were retrieved.
   */
  scorecardsPaginated?: shared.ScorecardsPaginated | undefined;
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
export const AtsListApplicationScorecardsQueryParamFilter$inboundSchema:
  z.ZodType<
    AtsListApplicationScorecardsQueryParamFilter,
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
export type AtsListApplicationScorecardsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationScorecardsQueryParamFilter$outboundSchema:
  z.ZodType<
    AtsListApplicationScorecardsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationScorecardsQueryParamFilter
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
export namespace AtsListApplicationScorecardsQueryParamFilter$ {
  /** @deprecated use `AtsListApplicationScorecardsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationScorecardsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationScorecardsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListApplicationScorecardsQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListApplicationScorecardsRequest$inboundSchema: z.ZodType<
  AtsListApplicationScorecardsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationScorecardsQueryParamFilter$inboundSchema),
  ).optional(),
  id: z.string(),
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
export type AtsListApplicationScorecardsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | AtsListApplicationScorecardsQueryParamFilter$Outbound
    | null
    | undefined;
  id: string;
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
export const AtsListApplicationScorecardsRequest$outboundSchema: z.ZodType<
  AtsListApplicationScorecardsRequest$Outbound,
  z.ZodTypeDef,
  AtsListApplicationScorecardsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationScorecardsQueryParamFilter$outboundSchema),
  ).optional(),
  id: z.string(),
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
export namespace AtsListApplicationScorecardsRequest$ {
  /** @deprecated use `AtsListApplicationScorecardsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationScorecardsRequest$inboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationScorecardsRequest$outboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsRequest$Outbound` instead. */
  export type Outbound = AtsListApplicationScorecardsRequest$Outbound;
}

/** @internal */
export const AtsListApplicationScorecardsResponse$inboundSchema: z.ZodType<
  AtsListApplicationScorecardsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ScorecardsPaginated: shared.ScorecardsPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ScorecardsPaginated": "scorecardsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListApplicationScorecardsResponse$Outbound = {
  ContentType: string;
  ScorecardsPaginated?: shared.ScorecardsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListApplicationScorecardsResponse$outboundSchema: z.ZodType<
  AtsListApplicationScorecardsResponse$Outbound,
  z.ZodTypeDef,
  AtsListApplicationScorecardsResponse
> = z.object({
  contentType: z.string(),
  scorecardsPaginated: shared.ScorecardsPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    scorecardsPaginated: "ScorecardsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationScorecardsResponse$ {
  /** @deprecated use `AtsListApplicationScorecardsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationScorecardsResponse$inboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationScorecardsResponse$outboundSchema;
  /** @deprecated use `AtsListApplicationScorecardsResponse$Outbound` instead. */
  export type Outbound = AtsListApplicationScorecardsResponse$Outbound;
}
