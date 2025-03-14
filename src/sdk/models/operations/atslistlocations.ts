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
export type AtsListLocationsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListLocationsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListLocationsQueryParamFilter | null | undefined;
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

export type AtsListLocationsResponse = {
  /**
   * The list of locations was retrieved.
   */
  atsLocationsPaginated?: shared.ATSLocationsPaginated | undefined;
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
};

/** @internal */
export const AtsListLocationsQueryParamFilter$inboundSchema: z.ZodType<
  AtsListLocationsQueryParamFilter,
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
export type AtsListLocationsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListLocationsQueryParamFilter$outboundSchema: z.ZodType<
  AtsListLocationsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListLocationsQueryParamFilter
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
export namespace AtsListLocationsQueryParamFilter$ {
  /** @deprecated use `AtsListLocationsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = AtsListLocationsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListLocationsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = AtsListLocationsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListLocationsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListLocationsQueryParamFilter$Outbound;
}

export function atsListLocationsQueryParamFilterToJSON(
  atsListLocationsQueryParamFilter: AtsListLocationsQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListLocationsQueryParamFilter$outboundSchema.parse(
      atsListLocationsQueryParamFilter,
    ),
  );
}

export function atsListLocationsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<AtsListLocationsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListLocationsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListLocationsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListLocationsRequest$inboundSchema: z.ZodType<
  AtsListLocationsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListLocationsQueryParamFilter$inboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export type AtsListLocationsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: AtsListLocationsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  sync_token?: string | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsListLocationsRequest$outboundSchema: z.ZodType<
  AtsListLocationsRequest$Outbound,
  z.ZodTypeDef,
  AtsListLocationsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListLocationsQueryParamFilter$outboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace AtsListLocationsRequest$ {
  /** @deprecated use `AtsListLocationsRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListLocationsRequest$inboundSchema;
  /** @deprecated use `AtsListLocationsRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListLocationsRequest$outboundSchema;
  /** @deprecated use `AtsListLocationsRequest$Outbound` instead. */
  export type Outbound = AtsListLocationsRequest$Outbound;
}

export function atsListLocationsRequestToJSON(
  atsListLocationsRequest: AtsListLocationsRequest,
): string {
  return JSON.stringify(
    AtsListLocationsRequest$outboundSchema.parse(atsListLocationsRequest),
  );
}

export function atsListLocationsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListLocationsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListLocationsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListLocationsRequest' from JSON`,
  );
}

/** @internal */
export const AtsListLocationsResponse$inboundSchema: z.ZodType<
  AtsListLocationsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ATSLocationsPaginated: shared.ATSLocationsPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ATSLocationsPaginated": "atsLocationsPaginated",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListLocationsResponse$Outbound = {
  ATSLocationsPaginated?: shared.ATSLocationsPaginated$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListLocationsResponse$outboundSchema: z.ZodType<
  AtsListLocationsResponse$Outbound,
  z.ZodTypeDef,
  AtsListLocationsResponse
> = z.object({
  atsLocationsPaginated: shared.ATSLocationsPaginated$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    atsLocationsPaginated: "ATSLocationsPaginated",
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListLocationsResponse$ {
  /** @deprecated use `AtsListLocationsResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListLocationsResponse$inboundSchema;
  /** @deprecated use `AtsListLocationsResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListLocationsResponse$outboundSchema;
  /** @deprecated use `AtsListLocationsResponse$Outbound` instead. */
  export type Outbound = AtsListLocationsResponse$Outbound;
}

export function atsListLocationsResponseToJSON(
  atsListLocationsResponse: AtsListLocationsResponse,
): string {
  return JSON.stringify(
    AtsListLocationsResponse$outboundSchema.parse(atsListLocationsResponse),
  );
}

export function atsListLocationsResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListLocationsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListLocationsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListLocationsResponse' from JSON`,
  );
}
