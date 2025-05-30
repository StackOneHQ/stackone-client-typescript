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
export type TicketingListCollectionTicketTypesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type TicketingListCollectionTicketTypesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?:
    | TicketingListCollectionTicketTypesQueryParamFilter
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

export type TicketingListCollectionTicketTypesResponse = {
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
   * The list of collection ticket types was retrieved.
   */
  ticketingTicketTypePaginated?:
    | shared.TicketingTicketTypePaginated
    | undefined;
};

/** @internal */
export const TicketingListCollectionTicketTypesQueryParamFilter$inboundSchema:
  z.ZodType<
    TicketingListCollectionTicketTypesQueryParamFilter,
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
export type TicketingListCollectionTicketTypesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const TicketingListCollectionTicketTypesQueryParamFilter$outboundSchema:
  z.ZodType<
    TicketingListCollectionTicketTypesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    TicketingListCollectionTicketTypesQueryParamFilter
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
export namespace TicketingListCollectionTicketTypesQueryParamFilter$ {
  /** @deprecated use `TicketingListCollectionTicketTypesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    TicketingListCollectionTicketTypesQueryParamFilter$inboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    TicketingListCollectionTicketTypesQueryParamFilter$outboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesQueryParamFilter$Outbound` instead. */
  export type Outbound =
    TicketingListCollectionTicketTypesQueryParamFilter$Outbound;
}

export function ticketingListCollectionTicketTypesQueryParamFilterToJSON(
  ticketingListCollectionTicketTypesQueryParamFilter:
    TicketingListCollectionTicketTypesQueryParamFilter,
): string {
  return JSON.stringify(
    TicketingListCollectionTicketTypesQueryParamFilter$outboundSchema.parse(
      ticketingListCollectionTicketTypesQueryParamFilter,
    ),
  );
}

export function ticketingListCollectionTicketTypesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  TicketingListCollectionTicketTypesQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingListCollectionTicketTypesQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TicketingListCollectionTicketTypesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const TicketingListCollectionTicketTypesRequest$inboundSchema: z.ZodType<
  TicketingListCollectionTicketTypesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() =>
      TicketingListCollectionTicketTypesQueryParamFilter$inboundSchema
    ),
  ).optional(),
  id: z.string(),
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
export type TicketingListCollectionTicketTypesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | TicketingListCollectionTicketTypesQueryParamFilter$Outbound
    | null
    | undefined;
  id: string;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const TicketingListCollectionTicketTypesRequest$outboundSchema:
  z.ZodType<
    TicketingListCollectionTicketTypesRequest$Outbound,
    z.ZodTypeDef,
    TicketingListCollectionTicketTypesRequest
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(
      z.lazy(() =>
        TicketingListCollectionTicketTypesQueryParamFilter$outboundSchema
      ),
    ).optional(),
    id: z.string(),
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
export namespace TicketingListCollectionTicketTypesRequest$ {
  /** @deprecated use `TicketingListCollectionTicketTypesRequest$inboundSchema` instead. */
  export const inboundSchema =
    TicketingListCollectionTicketTypesRequest$inboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesRequest$outboundSchema` instead. */
  export const outboundSchema =
    TicketingListCollectionTicketTypesRequest$outboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesRequest$Outbound` instead. */
  export type Outbound = TicketingListCollectionTicketTypesRequest$Outbound;
}

export function ticketingListCollectionTicketTypesRequestToJSON(
  ticketingListCollectionTicketTypesRequest:
    TicketingListCollectionTicketTypesRequest,
): string {
  return JSON.stringify(
    TicketingListCollectionTicketTypesRequest$outboundSchema.parse(
      ticketingListCollectionTicketTypesRequest,
    ),
  );
}

export function ticketingListCollectionTicketTypesRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  TicketingListCollectionTicketTypesRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingListCollectionTicketTypesRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TicketingListCollectionTicketTypesRequest' from JSON`,
  );
}

/** @internal */
export const TicketingListCollectionTicketTypesResponse$inboundSchema:
  z.ZodType<TicketingListCollectionTicketTypesResponse, z.ZodTypeDef, unknown> =
    z.object({
      ContentType: z.string(),
      Headers: z.record(z.array(z.string())),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      TicketingTicketTypePaginated: shared
        .TicketingTicketTypePaginated$inboundSchema.optional(),
    }).transform((v) => {
      return remap$(v, {
        "ContentType": "contentType",
        "Headers": "headers",
        "StatusCode": "statusCode",
        "RawResponse": "rawResponse",
        "TicketingTicketTypePaginated": "ticketingTicketTypePaginated",
      });
    });

/** @internal */
export type TicketingListCollectionTicketTypesResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  TicketingTicketTypePaginated?:
    | shared.TicketingTicketTypePaginated$Outbound
    | undefined;
};

/** @internal */
export const TicketingListCollectionTicketTypesResponse$outboundSchema:
  z.ZodType<
    TicketingListCollectionTicketTypesResponse$Outbound,
    z.ZodTypeDef,
    TicketingListCollectionTicketTypesResponse
  > = z.object({
    contentType: z.string(),
    headers: z.record(z.array(z.string())),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
    ticketingTicketTypePaginated: shared
      .TicketingTicketTypePaginated$outboundSchema.optional(),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      headers: "Headers",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
      ticketingTicketTypePaginated: "TicketingTicketTypePaginated",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingListCollectionTicketTypesResponse$ {
  /** @deprecated use `TicketingListCollectionTicketTypesResponse$inboundSchema` instead. */
  export const inboundSchema =
    TicketingListCollectionTicketTypesResponse$inboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesResponse$outboundSchema` instead. */
  export const outboundSchema =
    TicketingListCollectionTicketTypesResponse$outboundSchema;
  /** @deprecated use `TicketingListCollectionTicketTypesResponse$Outbound` instead. */
  export type Outbound = TicketingListCollectionTicketTypesResponse$Outbound;
}

export function ticketingListCollectionTicketTypesResponseToJSON(
  ticketingListCollectionTicketTypesResponse:
    TicketingListCollectionTicketTypesResponse,
): string {
  return JSON.stringify(
    TicketingListCollectionTicketTypesResponse$outboundSchema.parse(
      ticketingListCollectionTicketTypesResponse,
    ),
  );
}

export function ticketingListCollectionTicketTypesResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  TicketingListCollectionTicketTypesResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      TicketingListCollectionTicketTypesResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'TicketingListCollectionTicketTypesResponse' from JSON`,
  );
}
