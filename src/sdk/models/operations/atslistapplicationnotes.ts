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
export type AtsListApplicationNotesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListApplicationNotesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListApplicationNotesQueryParamFilter | null | undefined;
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

export type AtsListApplicationNotesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The notes related to the application with the given identifier was retrieved.
   */
  notesPaginated?: shared.NotesPaginated | undefined;
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
export const AtsListApplicationNotesQueryParamFilter$inboundSchema: z.ZodType<
  AtsListApplicationNotesQueryParamFilter,
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
export type AtsListApplicationNotesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationNotesQueryParamFilter$outboundSchema: z.ZodType<
  AtsListApplicationNotesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListApplicationNotesQueryParamFilter
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
export namespace AtsListApplicationNotesQueryParamFilter$ {
  /** @deprecated use `AtsListApplicationNotesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationNotesQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListApplicationNotesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationNotesQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListApplicationNotesQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListApplicationNotesQueryParamFilter$Outbound;
}

export function atsListApplicationNotesQueryParamFilterToJSON(
  atsListApplicationNotesQueryParamFilter:
    AtsListApplicationNotesQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListApplicationNotesQueryParamFilter$outboundSchema.parse(
      atsListApplicationNotesQueryParamFilter,
    ),
  );
}

export function atsListApplicationNotesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationNotesQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationNotesQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsListApplicationNotesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationNotesRequest$inboundSchema: z.ZodType<
  AtsListApplicationNotesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationNotesQueryParamFilter$inboundSchema),
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
export type AtsListApplicationNotesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: AtsListApplicationNotesQueryParamFilter$Outbound | null | undefined;
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
export const AtsListApplicationNotesRequest$outboundSchema: z.ZodType<
  AtsListApplicationNotesRequest$Outbound,
  z.ZodTypeDef,
  AtsListApplicationNotesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationNotesQueryParamFilter$outboundSchema),
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
export namespace AtsListApplicationNotesRequest$ {
  /** @deprecated use `AtsListApplicationNotesRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListApplicationNotesRequest$inboundSchema;
  /** @deprecated use `AtsListApplicationNotesRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListApplicationNotesRequest$outboundSchema;
  /** @deprecated use `AtsListApplicationNotesRequest$Outbound` instead. */
  export type Outbound = AtsListApplicationNotesRequest$Outbound;
}

export function atsListApplicationNotesRequestToJSON(
  atsListApplicationNotesRequest: AtsListApplicationNotesRequest,
): string {
  return JSON.stringify(
    AtsListApplicationNotesRequest$outboundSchema.parse(
      atsListApplicationNotesRequest,
    ),
  );
}

export function atsListApplicationNotesRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationNotesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListApplicationNotesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationNotesRequest' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationNotesResponse$inboundSchema: z.ZodType<
  AtsListApplicationNotesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  NotesPaginated: shared.NotesPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "NotesPaginated": "notesPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListApplicationNotesResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  NotesPaginated?: shared.NotesPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListApplicationNotesResponse$outboundSchema: z.ZodType<
  AtsListApplicationNotesResponse$Outbound,
  z.ZodTypeDef,
  AtsListApplicationNotesResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  notesPaginated: shared.NotesPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    notesPaginated: "NotesPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListApplicationNotesResponse$ {
  /** @deprecated use `AtsListApplicationNotesResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListApplicationNotesResponse$inboundSchema;
  /** @deprecated use `AtsListApplicationNotesResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListApplicationNotesResponse$outboundSchema;
  /** @deprecated use `AtsListApplicationNotesResponse$Outbound` instead. */
  export type Outbound = AtsListApplicationNotesResponse$Outbound;
}

export function atsListApplicationNotesResponseToJSON(
  atsListApplicationNotesResponse: AtsListApplicationNotesResponse,
): string {
  return JSON.stringify(
    AtsListApplicationNotesResponse$outboundSchema.parse(
      atsListApplicationNotesResponse,
    ),
  );
}

export function atsListApplicationNotesResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationNotesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListApplicationNotesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationNotesResponse' from JSON`,
  );
}
