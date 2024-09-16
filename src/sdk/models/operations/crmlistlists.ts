/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type CrmListListsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type CrmListListsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: CrmListListsQueryParamFilter | null | undefined;
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

export type CrmListListsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The collection of lists was retrieved.
   */
  listsPaginated?: shared.ListsPaginated | undefined;
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
export const CrmListListsQueryParamFilter$inboundSchema: z.ZodType<
  CrmListListsQueryParamFilter,
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
export type CrmListListsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const CrmListListsQueryParamFilter$outboundSchema: z.ZodType<
  CrmListListsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  CrmListListsQueryParamFilter
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
export namespace CrmListListsQueryParamFilter$ {
  /** @deprecated use `CrmListListsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = CrmListListsQueryParamFilter$inboundSchema;
  /** @deprecated use `CrmListListsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = CrmListListsQueryParamFilter$outboundSchema;
  /** @deprecated use `CrmListListsQueryParamFilter$Outbound` instead. */
  export type Outbound = CrmListListsQueryParamFilter$Outbound;
}

/** @internal */
export const CrmListListsRequest$inboundSchema: z.ZodType<
  CrmListListsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => CrmListListsQueryParamFilter$inboundSchema))
    .optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
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
export type CrmListListsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: CrmListListsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const CrmListListsRequest$outboundSchema: z.ZodType<
  CrmListListsRequest$Outbound,
  z.ZodTypeDef,
  CrmListListsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => CrmListListsQueryParamFilter$outboundSchema))
    .optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
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
export namespace CrmListListsRequest$ {
  /** @deprecated use `CrmListListsRequest$inboundSchema` instead. */
  export const inboundSchema = CrmListListsRequest$inboundSchema;
  /** @deprecated use `CrmListListsRequest$outboundSchema` instead. */
  export const outboundSchema = CrmListListsRequest$outboundSchema;
  /** @deprecated use `CrmListListsRequest$Outbound` instead. */
  export type Outbound = CrmListListsRequest$Outbound;
}

/** @internal */
export const CrmListListsResponse$inboundSchema: z.ZodType<
  CrmListListsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  ListsPaginated: shared.ListsPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "ListsPaginated": "listsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CrmListListsResponse$Outbound = {
  ContentType: string;
  ListsPaginated?: shared.ListsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CrmListListsResponse$outboundSchema: z.ZodType<
  CrmListListsResponse$Outbound,
  z.ZodTypeDef,
  CrmListListsResponse
> = z.object({
  contentType: z.string(),
  listsPaginated: shared.ListsPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    listsPaginated: "ListsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmListListsResponse$ {
  /** @deprecated use `CrmListListsResponse$inboundSchema` instead. */
  export const inboundSchema = CrmListListsResponse$inboundSchema;
  /** @deprecated use `CrmListListsResponse$outboundSchema` instead. */
  export const outboundSchema = CrmListListsResponse$outboundSchema;
  /** @deprecated use `CrmListListsResponse$Outbound` instead. */
  export type Outbound = CrmListListsResponse$Outbound;
}
