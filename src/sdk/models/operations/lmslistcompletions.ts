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
 * LMS Completions Filter
 */
export type LmsListCompletionsQueryParamFilter = {
  /**
   * Filter to select completions by learning object type.
   */
  learningObjectType?: string | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type LmsListCompletionsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * LMS Completions Filter
   */
  filter?: LmsListCompletionsQueryParamFilter | null | undefined;
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

export type LmsListCompletionsResponse = {
  /**
   * The list of completions was retrieved.
   */
  completionsPaginated?: shared.CompletionsPaginated | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
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
export const LmsListCompletionsQueryParamFilter$inboundSchema: z.ZodType<
  LmsListCompletionsQueryParamFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  learning_object_type: z.nullable(z.string()).optional(),
  updated_after: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "learning_object_type": "learningObjectType",
    "updated_after": "updatedAfter",
  });
});

/** @internal */
export type LmsListCompletionsQueryParamFilter$Outbound = {
  learning_object_type?: string | null | undefined;
  updated_after?: string | null | undefined;
};

/** @internal */
export const LmsListCompletionsQueryParamFilter$outboundSchema: z.ZodType<
  LmsListCompletionsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  LmsListCompletionsQueryParamFilter
> = z.object({
  learningObjectType: z.nullable(z.string()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    learningObjectType: "learning_object_type",
    updatedAfter: "updated_after",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListCompletionsQueryParamFilter$ {
  /** @deprecated use `LmsListCompletionsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = LmsListCompletionsQueryParamFilter$inboundSchema;
  /** @deprecated use `LmsListCompletionsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    LmsListCompletionsQueryParamFilter$outboundSchema;
  /** @deprecated use `LmsListCompletionsQueryParamFilter$Outbound` instead. */
  export type Outbound = LmsListCompletionsQueryParamFilter$Outbound;
}

export function lmsListCompletionsQueryParamFilterToJSON(
  lmsListCompletionsQueryParamFilter: LmsListCompletionsQueryParamFilter,
): string {
  return JSON.stringify(
    LmsListCompletionsQueryParamFilter$outboundSchema.parse(
      lmsListCompletionsQueryParamFilter,
    ),
  );
}

export function lmsListCompletionsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCompletionsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsListCompletionsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCompletionsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const LmsListCompletionsRequest$inboundSchema: z.ZodType<
  LmsListCompletionsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListCompletionsQueryParamFilter$inboundSchema),
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
export type LmsListCompletionsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: LmsListCompletionsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsListCompletionsRequest$outboundSchema: z.ZodType<
  LmsListCompletionsRequest$Outbound,
  z.ZodTypeDef,
  LmsListCompletionsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListCompletionsQueryParamFilter$outboundSchema),
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
export namespace LmsListCompletionsRequest$ {
  /** @deprecated use `LmsListCompletionsRequest$inboundSchema` instead. */
  export const inboundSchema = LmsListCompletionsRequest$inboundSchema;
  /** @deprecated use `LmsListCompletionsRequest$outboundSchema` instead. */
  export const outboundSchema = LmsListCompletionsRequest$outboundSchema;
  /** @deprecated use `LmsListCompletionsRequest$Outbound` instead. */
  export type Outbound = LmsListCompletionsRequest$Outbound;
}

export function lmsListCompletionsRequestToJSON(
  lmsListCompletionsRequest: LmsListCompletionsRequest,
): string {
  return JSON.stringify(
    LmsListCompletionsRequest$outboundSchema.parse(lmsListCompletionsRequest),
  );
}

export function lmsListCompletionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCompletionsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListCompletionsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCompletionsRequest' from JSON`,
  );
}

/** @internal */
export const LmsListCompletionsResponse$inboundSchema: z.ZodType<
  LmsListCompletionsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  CompletionsPaginated: shared.CompletionsPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "CompletionsPaginated": "completionsPaginated",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsListCompletionsResponse$Outbound = {
  CompletionsPaginated?: shared.CompletionsPaginated$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsListCompletionsResponse$outboundSchema: z.ZodType<
  LmsListCompletionsResponse$Outbound,
  z.ZodTypeDef,
  LmsListCompletionsResponse
> = z.object({
  completionsPaginated: shared.CompletionsPaginated$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    completionsPaginated: "CompletionsPaginated",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListCompletionsResponse$ {
  /** @deprecated use `LmsListCompletionsResponse$inboundSchema` instead. */
  export const inboundSchema = LmsListCompletionsResponse$inboundSchema;
  /** @deprecated use `LmsListCompletionsResponse$outboundSchema` instead. */
  export const outboundSchema = LmsListCompletionsResponse$outboundSchema;
  /** @deprecated use `LmsListCompletionsResponse$Outbound` instead. */
  export type Outbound = LmsListCompletionsResponse$Outbound;
}

export function lmsListCompletionsResponseToJSON(
  lmsListCompletionsResponse: LmsListCompletionsResponse,
): string {
  return JSON.stringify(
    LmsListCompletionsResponse$outboundSchema.parse(lmsListCompletionsResponse),
  );
}

export function lmsListCompletionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsListCompletionsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListCompletionsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListCompletionsResponse' from JSON`,
  );
}
