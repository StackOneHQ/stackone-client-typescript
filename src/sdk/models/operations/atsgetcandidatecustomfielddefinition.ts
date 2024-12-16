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
export type QueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsGetCandidateCustomFieldDefinitionRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: QueryParamFilter | null | undefined;
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

export type AtsGetCandidateCustomFieldDefinitionResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The candidate custom field definition was retrieved.
   */
  customFieldDefinitionResultApiModel?:
    | shared.CustomFieldDefinitionResultApiModel
    | undefined;
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
export const QueryParamFilter$inboundSchema: z.ZodType<
  QueryParamFilter,
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
export type QueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const QueryParamFilter$outboundSchema: z.ZodType<
  QueryParamFilter$Outbound,
  z.ZodTypeDef,
  QueryParamFilter
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
export namespace QueryParamFilter$ {
  /** @deprecated use `QueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamFilter$inboundSchema;
  /** @deprecated use `QueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamFilter$outboundSchema;
  /** @deprecated use `QueryParamFilter$Outbound` instead. */
  export type Outbound = QueryParamFilter$Outbound;
}

export function queryParamFilterToJSON(
  queryParamFilter: QueryParamFilter,
): string {
  return JSON.stringify(
    QueryParamFilter$outboundSchema.parse(queryParamFilter),
  );
}

export function queryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<QueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsGetCandidateCustomFieldDefinitionRequest$inboundSchema:
  z.ZodType<
    AtsGetCandidateCustomFieldDefinitionRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(z.lazy(() => QueryParamFilter$inboundSchema)).optional(),
    id: z.string(),
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
export type AtsGetCandidateCustomFieldDefinitionRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: QueryParamFilter$Outbound | null | undefined;
  id: string;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsGetCandidateCustomFieldDefinitionRequest$outboundSchema:
  z.ZodType<
    AtsGetCandidateCustomFieldDefinitionRequest$Outbound,
    z.ZodTypeDef,
    AtsGetCandidateCustomFieldDefinitionRequest
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(z.lazy(() => QueryParamFilter$outboundSchema))
      .optional(),
    id: z.string(),
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
export namespace AtsGetCandidateCustomFieldDefinitionRequest$ {
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetCandidateCustomFieldDefinitionRequest$inboundSchema;
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetCandidateCustomFieldDefinitionRequest$outboundSchema;
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionRequest$Outbound` instead. */
  export type Outbound = AtsGetCandidateCustomFieldDefinitionRequest$Outbound;
}

export function atsGetCandidateCustomFieldDefinitionRequestToJSON(
  atsGetCandidateCustomFieldDefinitionRequest:
    AtsGetCandidateCustomFieldDefinitionRequest,
): string {
  return JSON.stringify(
    AtsGetCandidateCustomFieldDefinitionRequest$outboundSchema.parse(
      atsGetCandidateCustomFieldDefinitionRequest,
    ),
  );
}

export function atsGetCandidateCustomFieldDefinitionRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsGetCandidateCustomFieldDefinitionRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetCandidateCustomFieldDefinitionRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsGetCandidateCustomFieldDefinitionRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetCandidateCustomFieldDefinitionResponse$inboundSchema:
  z.ZodType<
    AtsGetCandidateCustomFieldDefinitionResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    CustomFieldDefinitionResultApiModel: shared
      .CustomFieldDefinitionResultApiModel$inboundSchema.optional(),
    Headers: z.record(z.array(z.string())),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "CustomFieldDefinitionResultApiModel":
        "customFieldDefinitionResultApiModel",
      "Headers": "headers",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type AtsGetCandidateCustomFieldDefinitionResponse$Outbound = {
  ContentType: string;
  CustomFieldDefinitionResultApiModel?:
    | shared.CustomFieldDefinitionResultApiModel$Outbound
    | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetCandidateCustomFieldDefinitionResponse$outboundSchema:
  z.ZodType<
    AtsGetCandidateCustomFieldDefinitionResponse$Outbound,
    z.ZodTypeDef,
    AtsGetCandidateCustomFieldDefinitionResponse
  > = z.object({
    contentType: z.string(),
    customFieldDefinitionResultApiModel: shared
      .CustomFieldDefinitionResultApiModel$outboundSchema.optional(),
    headers: z.record(z.array(z.string())),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      customFieldDefinitionResultApiModel:
        "CustomFieldDefinitionResultApiModel",
      headers: "Headers",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetCandidateCustomFieldDefinitionResponse$ {
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetCandidateCustomFieldDefinitionResponse$inboundSchema;
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetCandidateCustomFieldDefinitionResponse$outboundSchema;
  /** @deprecated use `AtsGetCandidateCustomFieldDefinitionResponse$Outbound` instead. */
  export type Outbound = AtsGetCandidateCustomFieldDefinitionResponse$Outbound;
}

export function atsGetCandidateCustomFieldDefinitionResponseToJSON(
  atsGetCandidateCustomFieldDefinitionResponse:
    AtsGetCandidateCustomFieldDefinitionResponse,
): string {
  return JSON.stringify(
    AtsGetCandidateCustomFieldDefinitionResponse$outboundSchema.parse(
      atsGetCandidateCustomFieldDefinitionResponse,
    ),
  );
}

export function atsGetCandidateCustomFieldDefinitionResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsGetCandidateCustomFieldDefinitionResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetCandidateCustomFieldDefinitionResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsGetCandidateCustomFieldDefinitionResponse' from JSON`,
  );
}
