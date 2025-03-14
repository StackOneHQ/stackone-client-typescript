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
export type CrmListContactCustomFieldDefinitionsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type CrmListContactCustomFieldDefinitionsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?:
    | CrmListContactCustomFieldDefinitionsQueryParamFilter
    | null
    | undefined;
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

export type CrmListContactCustomFieldDefinitionsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of contacts custom field definitions was retrieved.
   */
  customFieldDefinitionsPaginated?:
    | shared.CustomFieldDefinitionsPaginated
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
export const CrmListContactCustomFieldDefinitionsQueryParamFilter$inboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsQueryParamFilter,
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
export type CrmListContactCustomFieldDefinitionsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const CrmListContactCustomFieldDefinitionsQueryParamFilter$outboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsQueryParamFilter$Outbound,
    z.ZodTypeDef,
    CrmListContactCustomFieldDefinitionsQueryParamFilter
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
export namespace CrmListContactCustomFieldDefinitionsQueryParamFilter$ {
  /** @deprecated use `CrmListContactCustomFieldDefinitionsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    CrmListContactCustomFieldDefinitionsQueryParamFilter$inboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    CrmListContactCustomFieldDefinitionsQueryParamFilter$outboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsQueryParamFilter$Outbound` instead. */
  export type Outbound =
    CrmListContactCustomFieldDefinitionsQueryParamFilter$Outbound;
}

export function crmListContactCustomFieldDefinitionsQueryParamFilterToJSON(
  crmListContactCustomFieldDefinitionsQueryParamFilter:
    CrmListContactCustomFieldDefinitionsQueryParamFilter,
): string {
  return JSON.stringify(
    CrmListContactCustomFieldDefinitionsQueryParamFilter$outboundSchema.parse(
      crmListContactCustomFieldDefinitionsQueryParamFilter,
    ),
  );
}

export function crmListContactCustomFieldDefinitionsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CrmListContactCustomFieldDefinitionsQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CrmListContactCustomFieldDefinitionsQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CrmListContactCustomFieldDefinitionsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const CrmListContactCustomFieldDefinitionsRequest$inboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(
      z.lazy(() =>
        CrmListContactCustomFieldDefinitionsQueryParamFilter$inboundSchema
      ),
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
export type CrmListContactCustomFieldDefinitionsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | CrmListContactCustomFieldDefinitionsQueryParamFilter$Outbound
    | null
    | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const CrmListContactCustomFieldDefinitionsRequest$outboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsRequest$Outbound,
    z.ZodTypeDef,
    CrmListContactCustomFieldDefinitionsRequest
  > = z.object({
    fields: z.nullable(z.string()).optional(),
    filter: z.nullable(
      z.lazy(() =>
        CrmListContactCustomFieldDefinitionsQueryParamFilter$outboundSchema
      ),
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
export namespace CrmListContactCustomFieldDefinitionsRequest$ {
  /** @deprecated use `CrmListContactCustomFieldDefinitionsRequest$inboundSchema` instead. */
  export const inboundSchema =
    CrmListContactCustomFieldDefinitionsRequest$inboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsRequest$outboundSchema` instead. */
  export const outboundSchema =
    CrmListContactCustomFieldDefinitionsRequest$outboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsRequest$Outbound` instead. */
  export type Outbound = CrmListContactCustomFieldDefinitionsRequest$Outbound;
}

export function crmListContactCustomFieldDefinitionsRequestToJSON(
  crmListContactCustomFieldDefinitionsRequest:
    CrmListContactCustomFieldDefinitionsRequest,
): string {
  return JSON.stringify(
    CrmListContactCustomFieldDefinitionsRequest$outboundSchema.parse(
      crmListContactCustomFieldDefinitionsRequest,
    ),
  );
}

export function crmListContactCustomFieldDefinitionsRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CrmListContactCustomFieldDefinitionsRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CrmListContactCustomFieldDefinitionsRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CrmListContactCustomFieldDefinitionsRequest' from JSON`,
  );
}

/** @internal */
export const CrmListContactCustomFieldDefinitionsResponse$inboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ContentType: z.string(),
    CustomFieldDefinitionsPaginated: shared
      .CustomFieldDefinitionsPaginated$inboundSchema.optional(),
    Headers: z.record(z.array(z.string())),
    StatusCode: z.number().int(),
    RawResponse: z.instanceof(Response),
  }).transform((v) => {
    return remap$(v, {
      "ContentType": "contentType",
      "CustomFieldDefinitionsPaginated": "customFieldDefinitionsPaginated",
      "Headers": "headers",
      "StatusCode": "statusCode",
      "RawResponse": "rawResponse",
    });
  });

/** @internal */
export type CrmListContactCustomFieldDefinitionsResponse$Outbound = {
  ContentType: string;
  CustomFieldDefinitionsPaginated?:
    | shared.CustomFieldDefinitionsPaginated$Outbound
    | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CrmListContactCustomFieldDefinitionsResponse$outboundSchema:
  z.ZodType<
    CrmListContactCustomFieldDefinitionsResponse$Outbound,
    z.ZodTypeDef,
    CrmListContactCustomFieldDefinitionsResponse
  > = z.object({
    contentType: z.string(),
    customFieldDefinitionsPaginated: shared
      .CustomFieldDefinitionsPaginated$outboundSchema.optional(),
    headers: z.record(z.array(z.string())),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      contentType: "ContentType",
      customFieldDefinitionsPaginated: "CustomFieldDefinitionsPaginated",
      headers: "Headers",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmListContactCustomFieldDefinitionsResponse$ {
  /** @deprecated use `CrmListContactCustomFieldDefinitionsResponse$inboundSchema` instead. */
  export const inboundSchema =
    CrmListContactCustomFieldDefinitionsResponse$inboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsResponse$outboundSchema` instead. */
  export const outboundSchema =
    CrmListContactCustomFieldDefinitionsResponse$outboundSchema;
  /** @deprecated use `CrmListContactCustomFieldDefinitionsResponse$Outbound` instead. */
  export type Outbound = CrmListContactCustomFieldDefinitionsResponse$Outbound;
}

export function crmListContactCustomFieldDefinitionsResponseToJSON(
  crmListContactCustomFieldDefinitionsResponse:
    CrmListContactCustomFieldDefinitionsResponse,
): string {
  return JSON.stringify(
    CrmListContactCustomFieldDefinitionsResponse$outboundSchema.parse(
      crmListContactCustomFieldDefinitionsResponse,
    ),
  );
}

export function crmListContactCustomFieldDefinitionsResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  CrmListContactCustomFieldDefinitionsResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CrmListContactCustomFieldDefinitionsResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CrmListContactCustomFieldDefinitionsResponse' from JSON`,
  );
}
