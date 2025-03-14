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
export type HrisListTimeOffTypesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type HrisListTimeOffTypesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: HrisListTimeOffTypesQueryParamFilter | null | undefined;
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

export type HrisListTimeOffTypesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The list of time off types was retrieved.
   */
  referencePaginated?: shared.ReferencePaginated | undefined;
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
export const HrisListTimeOffTypesQueryParamFilter$inboundSchema: z.ZodType<
  HrisListTimeOffTypesQueryParamFilter,
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
export type HrisListTimeOffTypesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListTimeOffTypesQueryParamFilter$outboundSchema: z.ZodType<
  HrisListTimeOffTypesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffTypesQueryParamFilter
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
export namespace HrisListTimeOffTypesQueryParamFilter$ {
  /** @deprecated use `HrisListTimeOffTypesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    HrisListTimeOffTypesQueryParamFilter$inboundSchema;
  /** @deprecated use `HrisListTimeOffTypesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    HrisListTimeOffTypesQueryParamFilter$outboundSchema;
  /** @deprecated use `HrisListTimeOffTypesQueryParamFilter$Outbound` instead. */
  export type Outbound = HrisListTimeOffTypesQueryParamFilter$Outbound;
}

export function hrisListTimeOffTypesQueryParamFilterToJSON(
  hrisListTimeOffTypesQueryParamFilter: HrisListTimeOffTypesQueryParamFilter,
): string {
  return JSON.stringify(
    HrisListTimeOffTypesQueryParamFilter$outboundSchema.parse(
      hrisListTimeOffTypesQueryParamFilter,
    ),
  );
}

export function hrisListTimeOffTypesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<HrisListTimeOffTypesQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      HrisListTimeOffTypesQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListTimeOffTypesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const HrisListTimeOffTypesRequest$inboundSchema: z.ZodType<
  HrisListTimeOffTypesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListTimeOffTypesQueryParamFilter$inboundSchema),
  ).optional(),
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
export type HrisListTimeOffTypesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: HrisListTimeOffTypesQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisListTimeOffTypesRequest$outboundSchema: z.ZodType<
  HrisListTimeOffTypesRequest$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffTypesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListTimeOffTypesQueryParamFilter$outboundSchema),
  ).optional(),
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
export namespace HrisListTimeOffTypesRequest$ {
  /** @deprecated use `HrisListTimeOffTypesRequest$inboundSchema` instead. */
  export const inboundSchema = HrisListTimeOffTypesRequest$inboundSchema;
  /** @deprecated use `HrisListTimeOffTypesRequest$outboundSchema` instead. */
  export const outboundSchema = HrisListTimeOffTypesRequest$outboundSchema;
  /** @deprecated use `HrisListTimeOffTypesRequest$Outbound` instead. */
  export type Outbound = HrisListTimeOffTypesRequest$Outbound;
}

export function hrisListTimeOffTypesRequestToJSON(
  hrisListTimeOffTypesRequest: HrisListTimeOffTypesRequest,
): string {
  return JSON.stringify(
    HrisListTimeOffTypesRequest$outboundSchema.parse(
      hrisListTimeOffTypesRequest,
    ),
  );
}

export function hrisListTimeOffTypesRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisListTimeOffTypesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListTimeOffTypesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListTimeOffTypesRequest' from JSON`,
  );
}

/** @internal */
export const HrisListTimeOffTypesResponse$inboundSchema: z.ZodType<
  HrisListTimeOffTypesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  ReferencePaginated: shared.ReferencePaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "ReferencePaginated": "referencePaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisListTimeOffTypesResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  ReferencePaginated?: shared.ReferencePaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisListTimeOffTypesResponse$outboundSchema: z.ZodType<
  HrisListTimeOffTypesResponse$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffTypesResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  referencePaginated: shared.ReferencePaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    referencePaginated: "ReferencePaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListTimeOffTypesResponse$ {
  /** @deprecated use `HrisListTimeOffTypesResponse$inboundSchema` instead. */
  export const inboundSchema = HrisListTimeOffTypesResponse$inboundSchema;
  /** @deprecated use `HrisListTimeOffTypesResponse$outboundSchema` instead. */
  export const outboundSchema = HrisListTimeOffTypesResponse$outboundSchema;
  /** @deprecated use `HrisListTimeOffTypesResponse$Outbound` instead. */
  export type Outbound = HrisListTimeOffTypesResponse$Outbound;
}

export function hrisListTimeOffTypesResponseToJSON(
  hrisListTimeOffTypesResponse: HrisListTimeOffTypesResponse,
): string {
  return JSON.stringify(
    HrisListTimeOffTypesResponse$outboundSchema.parse(
      hrisListTimeOffTypesResponse,
    ),
  );
}

export function hrisListTimeOffTypesResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisListTimeOffTypesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListTimeOffTypesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListTimeOffTypesResponse' from JSON`,
  );
}
