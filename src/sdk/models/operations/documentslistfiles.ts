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
export type DocumentsListFilesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type DocumentsListFilesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: DocumentsListFilesQueryParamFilter | null | undefined;
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

export type DocumentsListFilesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of files was retrieved.
   */
  filesPaginated?: shared.FilesPaginated | undefined;
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
export const DocumentsListFilesQueryParamFilter$inboundSchema: z.ZodType<
  DocumentsListFilesQueryParamFilter,
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
export type DocumentsListFilesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const DocumentsListFilesQueryParamFilter$outboundSchema: z.ZodType<
  DocumentsListFilesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  DocumentsListFilesQueryParamFilter
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
export namespace DocumentsListFilesQueryParamFilter$ {
  /** @deprecated use `DocumentsListFilesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = DocumentsListFilesQueryParamFilter$inboundSchema;
  /** @deprecated use `DocumentsListFilesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    DocumentsListFilesQueryParamFilter$outboundSchema;
  /** @deprecated use `DocumentsListFilesQueryParamFilter$Outbound` instead. */
  export type Outbound = DocumentsListFilesQueryParamFilter$Outbound;
}

export function documentsListFilesQueryParamFilterToJSON(
  documentsListFilesQueryParamFilter: DocumentsListFilesQueryParamFilter,
): string {
  return JSON.stringify(
    DocumentsListFilesQueryParamFilter$outboundSchema.parse(
      documentsListFilesQueryParamFilter,
    ),
  );
}

export function documentsListFilesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsListFilesQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DocumentsListFilesQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsListFilesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const DocumentsListFilesRequest$inboundSchema: z.ZodType<
  DocumentsListFilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => DocumentsListFilesQueryParamFilter$inboundSchema),
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
export type DocumentsListFilesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: DocumentsListFilesQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const DocumentsListFilesRequest$outboundSchema: z.ZodType<
  DocumentsListFilesRequest$Outbound,
  z.ZodTypeDef,
  DocumentsListFilesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => DocumentsListFilesQueryParamFilter$outboundSchema),
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
export namespace DocumentsListFilesRequest$ {
  /** @deprecated use `DocumentsListFilesRequest$inboundSchema` instead. */
  export const inboundSchema = DocumentsListFilesRequest$inboundSchema;
  /** @deprecated use `DocumentsListFilesRequest$outboundSchema` instead. */
  export const outboundSchema = DocumentsListFilesRequest$outboundSchema;
  /** @deprecated use `DocumentsListFilesRequest$Outbound` instead. */
  export type Outbound = DocumentsListFilesRequest$Outbound;
}

export function documentsListFilesRequestToJSON(
  documentsListFilesRequest: DocumentsListFilesRequest,
): string {
  return JSON.stringify(
    DocumentsListFilesRequest$outboundSchema.parse(documentsListFilesRequest),
  );
}

export function documentsListFilesRequestFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsListFilesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsListFilesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsListFilesRequest' from JSON`,
  );
}

/** @internal */
export const DocumentsListFilesResponse$inboundSchema: z.ZodType<
  DocumentsListFilesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  FilesPaginated: shared.FilesPaginated$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "FilesPaginated": "filesPaginated",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DocumentsListFilesResponse$Outbound = {
  ContentType: string;
  FilesPaginated?: shared.FilesPaginated$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DocumentsListFilesResponse$outboundSchema: z.ZodType<
  DocumentsListFilesResponse$Outbound,
  z.ZodTypeDef,
  DocumentsListFilesResponse
> = z.object({
  contentType: z.string(),
  filesPaginated: shared.FilesPaginated$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    filesPaginated: "FilesPaginated",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentsListFilesResponse$ {
  /** @deprecated use `DocumentsListFilesResponse$inboundSchema` instead. */
  export const inboundSchema = DocumentsListFilesResponse$inboundSchema;
  /** @deprecated use `DocumentsListFilesResponse$outboundSchema` instead. */
  export const outboundSchema = DocumentsListFilesResponse$outboundSchema;
  /** @deprecated use `DocumentsListFilesResponse$Outbound` instead. */
  export type Outbound = DocumentsListFilesResponse$Outbound;
}

export function documentsListFilesResponseToJSON(
  documentsListFilesResponse: DocumentsListFilesResponse,
): string {
  return JSON.stringify(
    DocumentsListFilesResponse$outboundSchema.parse(documentsListFilesResponse),
  );
}

export function documentsListFilesResponseFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsListFilesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsListFilesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsListFilesResponse' from JSON`,
  );
}
