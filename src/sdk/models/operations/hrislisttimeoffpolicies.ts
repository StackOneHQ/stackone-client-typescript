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
export type HrisListTimeOffPoliciesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type HrisListTimeOffPoliciesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: HrisListTimeOffPoliciesQueryParamFilter | null | undefined;
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

export type HrisListTimeOffPoliciesResponse = {
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
  /**
   * The list of time off policies was retrieved.
   */
  timeOffPoliciesPaginated?: shared.TimeOffPoliciesPaginated | undefined;
};

/** @internal */
export const HrisListTimeOffPoliciesQueryParamFilter$inboundSchema: z.ZodType<
  HrisListTimeOffPoliciesQueryParamFilter,
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
export type HrisListTimeOffPoliciesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListTimeOffPoliciesQueryParamFilter$outboundSchema: z.ZodType<
  HrisListTimeOffPoliciesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffPoliciesQueryParamFilter
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
export namespace HrisListTimeOffPoliciesQueryParamFilter$ {
  /** @deprecated use `HrisListTimeOffPoliciesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    HrisListTimeOffPoliciesQueryParamFilter$inboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    HrisListTimeOffPoliciesQueryParamFilter$outboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesQueryParamFilter$Outbound` instead. */
  export type Outbound = HrisListTimeOffPoliciesQueryParamFilter$Outbound;
}

export function hrisListTimeOffPoliciesQueryParamFilterToJSON(
  hrisListTimeOffPoliciesQueryParamFilter:
    HrisListTimeOffPoliciesQueryParamFilter,
): string {
  return JSON.stringify(
    HrisListTimeOffPoliciesQueryParamFilter$outboundSchema.parse(
      hrisListTimeOffPoliciesQueryParamFilter,
    ),
  );
}

export function hrisListTimeOffPoliciesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  HrisListTimeOffPoliciesQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      HrisListTimeOffPoliciesQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'HrisListTimeOffPoliciesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const HrisListTimeOffPoliciesRequest$inboundSchema: z.ZodType<
  HrisListTimeOffPoliciesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListTimeOffPoliciesQueryParamFilter$inboundSchema),
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
export type HrisListTimeOffPoliciesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: HrisListTimeOffPoliciesQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisListTimeOffPoliciesRequest$outboundSchema: z.ZodType<
  HrisListTimeOffPoliciesRequest$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffPoliciesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListTimeOffPoliciesQueryParamFilter$outboundSchema),
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
export namespace HrisListTimeOffPoliciesRequest$ {
  /** @deprecated use `HrisListTimeOffPoliciesRequest$inboundSchema` instead. */
  export const inboundSchema = HrisListTimeOffPoliciesRequest$inboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesRequest$outboundSchema` instead. */
  export const outboundSchema = HrisListTimeOffPoliciesRequest$outboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesRequest$Outbound` instead. */
  export type Outbound = HrisListTimeOffPoliciesRequest$Outbound;
}

export function hrisListTimeOffPoliciesRequestToJSON(
  hrisListTimeOffPoliciesRequest: HrisListTimeOffPoliciesRequest,
): string {
  return JSON.stringify(
    HrisListTimeOffPoliciesRequest$outboundSchema.parse(
      hrisListTimeOffPoliciesRequest,
    ),
  );
}

export function hrisListTimeOffPoliciesRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisListTimeOffPoliciesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListTimeOffPoliciesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListTimeOffPoliciesRequest' from JSON`,
  );
}

/** @internal */
export const HrisListTimeOffPoliciesResponse$inboundSchema: z.ZodType<
  HrisListTimeOffPoliciesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TimeOffPoliciesPaginated: shared.TimeOffPoliciesPaginated$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TimeOffPoliciesPaginated": "timeOffPoliciesPaginated",
  });
});

/** @internal */
export type HrisListTimeOffPoliciesResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  TimeOffPoliciesPaginated?:
    | shared.TimeOffPoliciesPaginated$Outbound
    | undefined;
};

/** @internal */
export const HrisListTimeOffPoliciesResponse$outboundSchema: z.ZodType<
  HrisListTimeOffPoliciesResponse$Outbound,
  z.ZodTypeDef,
  HrisListTimeOffPoliciesResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  timeOffPoliciesPaginated: shared.TimeOffPoliciesPaginated$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    timeOffPoliciesPaginated: "TimeOffPoliciesPaginated",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListTimeOffPoliciesResponse$ {
  /** @deprecated use `HrisListTimeOffPoliciesResponse$inboundSchema` instead. */
  export const inboundSchema = HrisListTimeOffPoliciesResponse$inboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesResponse$outboundSchema` instead. */
  export const outboundSchema = HrisListTimeOffPoliciesResponse$outboundSchema;
  /** @deprecated use `HrisListTimeOffPoliciesResponse$Outbound` instead. */
  export type Outbound = HrisListTimeOffPoliciesResponse$Outbound;
}

export function hrisListTimeOffPoliciesResponseToJSON(
  hrisListTimeOffPoliciesResponse: HrisListTimeOffPoliciesResponse,
): string {
  return JSON.stringify(
    HrisListTimeOffPoliciesResponse$outboundSchema.parse(
      hrisListTimeOffPoliciesResponse,
    ),
  );
}

export function hrisListTimeOffPoliciesResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisListTimeOffPoliciesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListTimeOffPoliciesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListTimeOffPoliciesResponse' from JSON`,
  );
}
