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
export type AtsListApplicationsOffersQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListApplicationsOffersRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListApplicationsOffersQueryParamFilter | null | undefined;
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

export type AtsListApplicationsOffersResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The offers related to the application with the given identifier were retrieved.
   */
  offersPaginated?: shared.OffersPaginated | undefined;
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
export const AtsListApplicationsOffersQueryParamFilter$inboundSchema: z.ZodType<
  AtsListApplicationsOffersQueryParamFilter,
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
export type AtsListApplicationsOffersQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationsOffersQueryParamFilter$outboundSchema:
  z.ZodType<
    AtsListApplicationsOffersQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationsOffersQueryParamFilter
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
export namespace AtsListApplicationsOffersQueryParamFilter$ {
  /** @deprecated use `AtsListApplicationsOffersQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationsOffersQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListApplicationsOffersQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationsOffersQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListApplicationsOffersQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListApplicationsOffersQueryParamFilter$Outbound;
}

export function atsListApplicationsOffersQueryParamFilterToJSON(
  atsListApplicationsOffersQueryParamFilter:
    AtsListApplicationsOffersQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListApplicationsOffersQueryParamFilter$outboundSchema.parse(
      atsListApplicationsOffersQueryParamFilter,
    ),
  );
}

export function atsListApplicationsOffersQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationsOffersQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationsOffersQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsListApplicationsOffersQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationsOffersRequest$inboundSchema: z.ZodType<
  AtsListApplicationsOffersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationsOffersQueryParamFilter$inboundSchema),
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
export type AtsListApplicationsOffersRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | AtsListApplicationsOffersQueryParamFilter$Outbound
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
export const AtsListApplicationsOffersRequest$outboundSchema: z.ZodType<
  AtsListApplicationsOffersRequest$Outbound,
  z.ZodTypeDef,
  AtsListApplicationsOffersRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationsOffersQueryParamFilter$outboundSchema),
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
export namespace AtsListApplicationsOffersRequest$ {
  /** @deprecated use `AtsListApplicationsOffersRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListApplicationsOffersRequest$inboundSchema;
  /** @deprecated use `AtsListApplicationsOffersRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListApplicationsOffersRequest$outboundSchema;
  /** @deprecated use `AtsListApplicationsOffersRequest$Outbound` instead. */
  export type Outbound = AtsListApplicationsOffersRequest$Outbound;
}

export function atsListApplicationsOffersRequestToJSON(
  atsListApplicationsOffersRequest: AtsListApplicationsOffersRequest,
): string {
  return JSON.stringify(
    AtsListApplicationsOffersRequest$outboundSchema.parse(
      atsListApplicationsOffersRequest,
    ),
  );
}

export function atsListApplicationsOffersRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationsOffersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListApplicationsOffersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationsOffersRequest' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationsOffersResponse$inboundSchema: z.ZodType<
  AtsListApplicationsOffersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  OffersPaginated: shared.OffersPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "OffersPaginated": "offersPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListApplicationsOffersResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  OffersPaginated?: shared.OffersPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListApplicationsOffersResponse$outboundSchema: z.ZodType<
  AtsListApplicationsOffersResponse$Outbound,
  z.ZodTypeDef,
  AtsListApplicationsOffersResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  offersPaginated: shared.OffersPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    offersPaginated: "OffersPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationsOffersResponse$ {
  /** @deprecated use `AtsListApplicationsOffersResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListApplicationsOffersResponse$inboundSchema;
  /** @deprecated use `AtsListApplicationsOffersResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationsOffersResponse$outboundSchema;
  /** @deprecated use `AtsListApplicationsOffersResponse$Outbound` instead. */
  export type Outbound = AtsListApplicationsOffersResponse$Outbound;
}

export function atsListApplicationsOffersResponseToJSON(
  atsListApplicationsOffersResponse: AtsListApplicationsOffersResponse,
): string {
  return JSON.stringify(
    AtsListApplicationsOffersResponse$outboundSchema.parse(
      atsListApplicationsOffersResponse,
    ),
  );
}

export function atsListApplicationsOffersResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationsOffersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListApplicationsOffersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationsOffersResponse' from JSON`,
  );
}
