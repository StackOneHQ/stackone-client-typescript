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
export type LmsListCategoriesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type LmsListCategoriesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: LmsListCategoriesQueryParamFilter | null | undefined;
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

export type LmsListCategoriesResponse = {
  /**
   * The list of categories was retrieved.
   */
  categoriesPaginated?: shared.CategoriesPaginated | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
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
export const LmsListCategoriesQueryParamFilter$inboundSchema: z.ZodType<
  LmsListCategoriesQueryParamFilter,
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
export type LmsListCategoriesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const LmsListCategoriesQueryParamFilter$outboundSchema: z.ZodType<
  LmsListCategoriesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  LmsListCategoriesQueryParamFilter
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
export namespace LmsListCategoriesQueryParamFilter$ {
  /** @deprecated use `LmsListCategoriesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = LmsListCategoriesQueryParamFilter$inboundSchema;
  /** @deprecated use `LmsListCategoriesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    LmsListCategoriesQueryParamFilter$outboundSchema;
  /** @deprecated use `LmsListCategoriesQueryParamFilter$Outbound` instead. */
  export type Outbound = LmsListCategoriesQueryParamFilter$Outbound;
}

export function lmsListCategoriesQueryParamFilterToJSON(
  lmsListCategoriesQueryParamFilter: LmsListCategoriesQueryParamFilter,
): string {
  return JSON.stringify(
    LmsListCategoriesQueryParamFilter$outboundSchema.parse(
      lmsListCategoriesQueryParamFilter,
    ),
  );
}

export function lmsListCategoriesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCategoriesQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListCategoriesQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCategoriesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const LmsListCategoriesRequest$inboundSchema: z.ZodType<
  LmsListCategoriesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListCategoriesQueryParamFilter$inboundSchema),
  ).optional(),
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
export type LmsListCategoriesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: LmsListCategoriesQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsListCategoriesRequest$outboundSchema: z.ZodType<
  LmsListCategoriesRequest$Outbound,
  z.ZodTypeDef,
  LmsListCategoriesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListCategoriesQueryParamFilter$outboundSchema),
  ).optional(),
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
export namespace LmsListCategoriesRequest$ {
  /** @deprecated use `LmsListCategoriesRequest$inboundSchema` instead. */
  export const inboundSchema = LmsListCategoriesRequest$inboundSchema;
  /** @deprecated use `LmsListCategoriesRequest$outboundSchema` instead. */
  export const outboundSchema = LmsListCategoriesRequest$outboundSchema;
  /** @deprecated use `LmsListCategoriesRequest$Outbound` instead. */
  export type Outbound = LmsListCategoriesRequest$Outbound;
}

export function lmsListCategoriesRequestToJSON(
  lmsListCategoriesRequest: LmsListCategoriesRequest,
): string {
  return JSON.stringify(
    LmsListCategoriesRequest$outboundSchema.parse(lmsListCategoriesRequest),
  );
}

export function lmsListCategoriesRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCategoriesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListCategoriesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCategoriesRequest' from JSON`,
  );
}

/** @internal */
export const LmsListCategoriesResponse$inboundSchema: z.ZodType<
  LmsListCategoriesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CategoriesPaginated: shared.CategoriesPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CategoriesPaginated": "categoriesPaginated",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsListCategoriesResponse$Outbound = {
  CategoriesPaginated?: shared.CategoriesPaginated$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsListCategoriesResponse$outboundSchema: z.ZodType<
  LmsListCategoriesResponse$Outbound,
  z.ZodTypeDef,
  LmsListCategoriesResponse
> = z.object({
  categoriesPaginated: shared.CategoriesPaginated$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    categoriesPaginated: "CategoriesPaginated",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListCategoriesResponse$ {
  /** @deprecated use `LmsListCategoriesResponse$inboundSchema` instead. */
  export const inboundSchema = LmsListCategoriesResponse$inboundSchema;
  /** @deprecated use `LmsListCategoriesResponse$outboundSchema` instead. */
  export const outboundSchema = LmsListCategoriesResponse$outboundSchema;
  /** @deprecated use `LmsListCategoriesResponse$Outbound` instead. */
  export type Outbound = LmsListCategoriesResponse$Outbound;
}

export function lmsListCategoriesResponseToJSON(
  lmsListCategoriesResponse: LmsListCategoriesResponse,
): string {
  return JSON.stringify(
    LmsListCategoriesResponse$outboundSchema.parse(lmsListCategoriesResponse),
  );
}

export function lmsListCategoriesResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCategoriesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListCategoriesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCategoriesResponse' from JSON`,
  );
}
