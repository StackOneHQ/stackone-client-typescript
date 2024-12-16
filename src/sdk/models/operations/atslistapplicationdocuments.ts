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
 * ATS Document Filter
 */
export type AtsListApplicationDocumentsQueryParamFilter = {
  /**
   * Filter to select documents by type
   */
  type?: string | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListApplicationDocumentsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * ATS Document Filter
   */
  filter?: AtsListApplicationDocumentsQueryParamFilter | null | undefined;
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

export type AtsListApplicationDocumentsResponse = {
  /**
   * The documents related to the application with the given identifier were retrieved.
   */
  atsDocumentsPaginated?: shared.AtsDocumentsPaginated | undefined;
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
export const AtsListApplicationDocumentsQueryParamFilter$inboundSchema:
  z.ZodType<
    AtsListApplicationDocumentsQueryParamFilter,
    z.ZodTypeDef,
    unknown
  > = z.object({
    type: z.nullable(z.string()).optional(),
    updated_after: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "updated_after": "updatedAfter",
    });
  });

/** @internal */
export type AtsListApplicationDocumentsQueryParamFilter$Outbound = {
  type?: string | null | undefined;
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListApplicationDocumentsQueryParamFilter$outboundSchema:
  z.ZodType<
    AtsListApplicationDocumentsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsListApplicationDocumentsQueryParamFilter
  > = z.object({
    type: z.nullable(z.string()).optional(),
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
export namespace AtsListApplicationDocumentsQueryParamFilter$ {
  /** @deprecated use `AtsListApplicationDocumentsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationDocumentsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationDocumentsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListApplicationDocumentsQueryParamFilter$Outbound;
}

export function atsListApplicationDocumentsQueryParamFilterToJSON(
  atsListApplicationDocumentsQueryParamFilter:
    AtsListApplicationDocumentsQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListApplicationDocumentsQueryParamFilter$outboundSchema.parse(
      atsListApplicationDocumentsQueryParamFilter,
    ),
  );
}

export function atsListApplicationDocumentsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsListApplicationDocumentsQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationDocumentsQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsListApplicationDocumentsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationDocumentsRequest$inboundSchema: z.ZodType<
  AtsListApplicationDocumentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationDocumentsQueryParamFilter$inboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
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
export type AtsListApplicationDocumentsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | AtsListApplicationDocumentsQueryParamFilter$Outbound
    | null
    | undefined;
  id: string;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  sync_token?: string | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsListApplicationDocumentsRequest$outboundSchema: z.ZodType<
  AtsListApplicationDocumentsRequest$Outbound,
  z.ZodTypeDef,
  AtsListApplicationDocumentsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListApplicationDocumentsQueryParamFilter$outboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
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
export namespace AtsListApplicationDocumentsRequest$ {
  /** @deprecated use `AtsListApplicationDocumentsRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListApplicationDocumentsRequest$inboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationDocumentsRequest$outboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsRequest$Outbound` instead. */
  export type Outbound = AtsListApplicationDocumentsRequest$Outbound;
}

export function atsListApplicationDocumentsRequestToJSON(
  atsListApplicationDocumentsRequest: AtsListApplicationDocumentsRequest,
): string {
  return JSON.stringify(
    AtsListApplicationDocumentsRequest$outboundSchema.parse(
      atsListApplicationDocumentsRequest,
    ),
  );
}

export function atsListApplicationDocumentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationDocumentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationDocumentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationDocumentsRequest' from JSON`,
  );
}

/** @internal */
export const AtsListApplicationDocumentsResponse$inboundSchema: z.ZodType<
  AtsListApplicationDocumentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocumentsPaginated: shared.AtsDocumentsPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AtsDocumentsPaginated": "atsDocumentsPaginated",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListApplicationDocumentsResponse$Outbound = {
  AtsDocumentsPaginated?: shared.AtsDocumentsPaginated$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListApplicationDocumentsResponse$outboundSchema: z.ZodType<
  AtsListApplicationDocumentsResponse$Outbound,
  z.ZodTypeDef,
  AtsListApplicationDocumentsResponse
> = z.object({
  atsDocumentsPaginated: shared.AtsDocumentsPaginated$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    atsDocumentsPaginated: "AtsDocumentsPaginated",
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
export namespace AtsListApplicationDocumentsResponse$ {
  /** @deprecated use `AtsListApplicationDocumentsResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsListApplicationDocumentsResponse$inboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsListApplicationDocumentsResponse$outboundSchema;
  /** @deprecated use `AtsListApplicationDocumentsResponse$Outbound` instead. */
  export type Outbound = AtsListApplicationDocumentsResponse$Outbound;
}

export function atsListApplicationDocumentsResponseToJSON(
  atsListApplicationDocumentsResponse: AtsListApplicationDocumentsResponse,
): string {
  return JSON.stringify(
    AtsListApplicationDocumentsResponse$outboundSchema.parse(
      atsListApplicationDocumentsResponse,
    ),
  );
}

export function atsListApplicationDocumentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListApplicationDocumentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListApplicationDocumentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListApplicationDocumentsResponse' from JSON`,
  );
}
