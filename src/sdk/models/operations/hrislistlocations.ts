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
export type HrisListLocationsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type HrisListLocationsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: HrisListLocationsQueryParamFilter | null | undefined;
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

export type HrisListLocationsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of Locations was retrieved.
   */
  hrisLocationsPaginated?: shared.HRISLocationsPaginated | undefined;
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
export const HrisListLocationsQueryParamFilter$inboundSchema: z.ZodType<
  HrisListLocationsQueryParamFilter,
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
export type HrisListLocationsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListLocationsQueryParamFilter$outboundSchema: z.ZodType<
  HrisListLocationsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  HrisListLocationsQueryParamFilter
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
export namespace HrisListLocationsQueryParamFilter$ {
  /** @deprecated use `HrisListLocationsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = HrisListLocationsQueryParamFilter$inboundSchema;
  /** @deprecated use `HrisListLocationsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    HrisListLocationsQueryParamFilter$outboundSchema;
  /** @deprecated use `HrisListLocationsQueryParamFilter$Outbound` instead. */
  export type Outbound = HrisListLocationsQueryParamFilter$Outbound;
}

export function hrisListLocationsQueryParamFilterToJSON(
  hrisListLocationsQueryParamFilter: HrisListLocationsQueryParamFilter,
): string {
  return JSON.stringify(
    HrisListLocationsQueryParamFilter$outboundSchema.parse(
      hrisListLocationsQueryParamFilter,
    ),
  );
}

export function hrisListLocationsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<HrisListLocationsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListLocationsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListLocationsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const HrisListLocationsRequest$inboundSchema: z.ZodType<
  HrisListLocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListLocationsQueryParamFilter$inboundSchema),
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
export type HrisListLocationsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: HrisListLocationsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisListLocationsRequest$outboundSchema: z.ZodType<
  HrisListLocationsRequest$Outbound,
  z.ZodTypeDef,
  HrisListLocationsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListLocationsQueryParamFilter$outboundSchema),
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
export namespace HrisListLocationsRequest$ {
  /** @deprecated use `HrisListLocationsRequest$inboundSchema` instead. */
  export const inboundSchema = HrisListLocationsRequest$inboundSchema;
  /** @deprecated use `HrisListLocationsRequest$outboundSchema` instead. */
  export const outboundSchema = HrisListLocationsRequest$outboundSchema;
  /** @deprecated use `HrisListLocationsRequest$Outbound` instead. */
  export type Outbound = HrisListLocationsRequest$Outbound;
}

export function hrisListLocationsRequestToJSON(
  hrisListLocationsRequest: HrisListLocationsRequest,
): string {
  return JSON.stringify(
    HrisListLocationsRequest$outboundSchema.parse(hrisListLocationsRequest),
  );
}

export function hrisListLocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisListLocationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListLocationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListLocationsRequest' from JSON`,
  );
}

/** @internal */
export const HrisListLocationsResponse$inboundSchema: z.ZodType<
  HrisListLocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HRISLocationsPaginated: shared.HRISLocationsPaginated$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HRISLocationsPaginated": "hrisLocationsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisListLocationsResponse$Outbound = {
  ContentType: string;
  HRISLocationsPaginated?: shared.HRISLocationsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisListLocationsResponse$outboundSchema: z.ZodType<
  HrisListLocationsResponse$Outbound,
  z.ZodTypeDef,
  HrisListLocationsResponse
> = z.object({
  contentType: z.string(),
  hrisLocationsPaginated: shared.HRISLocationsPaginated$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisLocationsPaginated: "HRISLocationsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListLocationsResponse$ {
  /** @deprecated use `HrisListLocationsResponse$inboundSchema` instead. */
  export const inboundSchema = HrisListLocationsResponse$inboundSchema;
  /** @deprecated use `HrisListLocationsResponse$outboundSchema` instead. */
  export const outboundSchema = HrisListLocationsResponse$outboundSchema;
  /** @deprecated use `HrisListLocationsResponse$Outbound` instead. */
  export type Outbound = HrisListLocationsResponse$Outbound;
}

export function hrisListLocationsResponseToJSON(
  hrisListLocationsResponse: HrisListLocationsResponse,
): string {
  return JSON.stringify(
    HrisListLocationsResponse$outboundSchema.parse(hrisListLocationsResponse),
  );
}

export function hrisListLocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisListLocationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListLocationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListLocationsResponse' from JSON`,
  );
}
