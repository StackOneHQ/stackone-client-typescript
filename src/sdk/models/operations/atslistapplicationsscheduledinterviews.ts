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
export type AtsListApplicationsScheduledInterviewsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListApplicationsScheduledInterviewsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?:
    | AtsListApplicationsScheduledInterviewsQueryParamFilter
    | null
    | undefined;
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

export type AtsListApplicationsScheduledInterviewsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The list of applications scheduled interviews was retrieved.
   */
  scheduledInterviewsPaginated?:
    | shared.ScheduledInterviewsPaginated
    | undefined;
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
export const AtsListApplicationsScheduledInterviewsQueryParamFilter$inboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsQueryParamFilter,
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
export type AtsListApplicationsScheduledInterviewsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationsScheduledInterviewsQueryParamFilter$outboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsScheduledInterviewsQueryParamFilter
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
export namespace AtsListApplicationsScheduledInterviewsQueryParamFilter$ {
  /** @deprecated use `AtsListApplicationsScheduledInterviewsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationsScheduledInterviewsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationsScheduledInterviewsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsQueryParamFilter$Outbound` instead. */
  export type Outbound =
    AtsListApplicationsScheduledInterviewsQueryParamFilter$Outbound;
}

export function atsListApplicationsScheduledInterviewsQueryParamFilterToJSON(
  atsListApplicationsScheduledInterviewsQueryParamFilter:
    AtsListApplicationsScheduledInterviewsQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListApplicationsScheduledInterviewsQueryParamFilter$outboundSchema.parse(
      atsListApplicationsScheduledInterviewsQueryParamFilter,
    ),
  );
}

export function atsListApplicationsScheduledInterviewsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationsScheduledInterviewsQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationsScheduledInterviewsQueryParamFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationsScheduledInterviewsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationsScheduledInterviewsRequest$inboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(
      z.lazy(() =>
        AtsListApplicationsScheduledInterviewsQueryParamFilter$inboundSchema
      ),
    ).optional(),
    id: z.string(),
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
export type AtsListApplicationsScheduledInterviewsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | AtsListApplicationsScheduledInterviewsQueryParamFilter$Outbound
    | null
    | undefined;
  id: string;
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
export const AtsListApplicationsScheduledInterviewsRequest$outboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsRequest$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsScheduledInterviewsRequest
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(
      z.lazy(() =>
        AtsListApplicationsScheduledInterviewsQueryParamFilter$outboundSchema
      ),
    ).optional(),
    id: z.string(),
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
export namespace AtsListApplicationsScheduledInterviewsRequest$ {
  /** @deprecated use `AtsListApplicationsScheduledInterviewsRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationsScheduledInterviewsRequest$inboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationsScheduledInterviewsRequest$outboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsRequest$Outbound` instead. */
  export type Outbound = AtsListApplicationsScheduledInterviewsRequest$Outbound;
}

export function atsListApplicationsScheduledInterviewsRequestToJSON(
  atsListApplicationsScheduledInterviewsRequest:
    AtsListApplicationsScheduledInterviewsRequest,
): string {
  return JSON.stringify(
    AtsListApplicationsScheduledInterviewsRequest$outboundSchema.parse(
      atsListApplicationsScheduledInterviewsRequest,
    ),
  );
}

export function atsListApplicationsScheduledInterviewsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationsScheduledInterviewsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationsScheduledInterviewsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsListApplicationsScheduledInterviewsRequest' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationsScheduledInterviewsResponse$inboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    Headers: z.record(z.array(z.string())),
    ScheduledInterviewsPaginated: shared
      .ScheduledInterviewsPaginated$inboundSchema.optional(),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "Headers": "headers",
      "ScheduledInterviewsPaginated": "scheduledInterviewsPaginated",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type AtsListApplicationsScheduledInterviewsResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  ScheduledInterviewsPaginated?:
    | shared.ScheduledInterviewsPaginated$Outbound
    | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListApplicationsScheduledInterviewsResponse$outboundSchema:
  z.ZodType<
    AtsListApplicationsScheduledInterviewsResponse$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsScheduledInterviewsResponse
  > = z.object({
    contentType: z.string(),
    headers: z.record(z.array(z.string())),
    scheduledInterviewsPaginated: shared
      .ScheduledInterviewsPaginated$outboundSchema.optional(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      headers: "Headers",
      scheduledInterviewsPaginated: "ScheduledInterviewsPaginated",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationsScheduledInterviewsResponse$ {
  /** @deprecated use `AtsListApplicationsScheduledInterviewsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationsScheduledInterviewsResponse$inboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationsScheduledInterviewsResponse$outboundSchema;
  /** @deprecated use `AtsListApplicationsScheduledInterviewsResponse$Outbound` instead. */
  export type Outbound =
    AtsListApplicationsScheduledInterviewsResponse$Outbound;
}

export function atsListApplicationsScheduledInterviewsResponseToJSON(
  atsListApplicationsScheduledInterviewsResponse:
    AtsListApplicationsScheduledInterviewsResponse,
): string {
  return JSON.stringify(
    AtsListApplicationsScheduledInterviewsResponse$outboundSchema.parse(
      atsListApplicationsScheduledInterviewsResponse,
    ),
  );
}

export function atsListApplicationsScheduledInterviewsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationsScheduledInterviewsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationsScheduledInterviewsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsListApplicationsScheduledInterviewsResponse' from JSON`,
  );
}
