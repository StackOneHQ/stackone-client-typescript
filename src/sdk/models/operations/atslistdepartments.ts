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
export type AtsListDepartmentsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListDepartmentsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsListDepartmentsQueryParamFilter | null | undefined;
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

export type AtsListDepartmentsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of departments was retrieved.
   */
  departmentsPaginated?: shared.DepartmentsPaginated | undefined;
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
export const AtsListDepartmentsQueryParamFilter$inboundSchema: z.ZodType<
  AtsListDepartmentsQueryParamFilter,
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
export type AtsListDepartmentsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListDepartmentsQueryParamFilter$outboundSchema: z.ZodType<
  AtsListDepartmentsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListDepartmentsQueryParamFilter
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
export namespace AtsListDepartmentsQueryParamFilter$ {
  /** @deprecated use `AtsListDepartmentsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = AtsListDepartmentsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListDepartmentsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsListDepartmentsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListDepartmentsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListDepartmentsQueryParamFilter$Outbound;
}

export function atsListDepartmentsQueryParamFilterToJSON(
  atsListDepartmentsQueryParamFilter: AtsListDepartmentsQueryParamFilter,
): string {
  return JSON.stringify(
    AtsListDepartmentsQueryParamFilter$outboundSchema.parse(
      atsListDepartmentsQueryParamFilter,
    ),
  );
}

export function atsListDepartmentsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<AtsListDepartmentsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsListDepartmentsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListDepartmentsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsListDepartmentsRequest$inboundSchema: z.ZodType<
  AtsListDepartmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListDepartmentsQueryParamFilter$inboundSchema),
  ).optional(),
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
export type AtsListDepartmentsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: AtsListDepartmentsQueryParamFilter$Outbound | null | undefined;
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
export const AtsListDepartmentsRequest$outboundSchema: z.ZodType<
  AtsListDepartmentsRequest$Outbound,
  z.ZodTypeDef,
  AtsListDepartmentsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsListDepartmentsQueryParamFilter$outboundSchema),
  ).optional(),
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
export namespace AtsListDepartmentsRequest$ {
  /** @deprecated use `AtsListDepartmentsRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListDepartmentsRequest$inboundSchema;
  /** @deprecated use `AtsListDepartmentsRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListDepartmentsRequest$outboundSchema;
  /** @deprecated use `AtsListDepartmentsRequest$Outbound` instead. */
  export type Outbound = AtsListDepartmentsRequest$Outbound;
}

export function atsListDepartmentsRequestToJSON(
  atsListDepartmentsRequest: AtsListDepartmentsRequest,
): string {
  return JSON.stringify(
    AtsListDepartmentsRequest$outboundSchema.parse(atsListDepartmentsRequest),
  );
}

export function atsListDepartmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsListDepartmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListDepartmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListDepartmentsRequest' from JSON`,
  );
}

/** @internal */
export const AtsListDepartmentsResponse$inboundSchema: z.ZodType<
  AtsListDepartmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  DepartmentsPaginated: shared.DepartmentsPaginated$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "DepartmentsPaginated": "departmentsPaginated",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListDepartmentsResponse$Outbound = {
  ContentType: string;
  DepartmentsPaginated?: shared.DepartmentsPaginated$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListDepartmentsResponse$outboundSchema: z.ZodType<
  AtsListDepartmentsResponse$Outbound,
  z.ZodTypeDef,
  AtsListDepartmentsResponse
> = z.object({
  contentType: z.string(),
  departmentsPaginated: shared.DepartmentsPaginated$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    departmentsPaginated: "DepartmentsPaginated",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListDepartmentsResponse$ {
  /** @deprecated use `AtsListDepartmentsResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListDepartmentsResponse$inboundSchema;
  /** @deprecated use `AtsListDepartmentsResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListDepartmentsResponse$outboundSchema;
  /** @deprecated use `AtsListDepartmentsResponse$Outbound` instead. */
  export type Outbound = AtsListDepartmentsResponse$Outbound;
}

export function atsListDepartmentsResponseToJSON(
  atsListDepartmentsResponse: AtsListDepartmentsResponse,
): string {
  return JSON.stringify(
    AtsListDepartmentsResponse$outboundSchema.parse(atsListDepartmentsResponse),
  );
}

export function atsListDepartmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsListDepartmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsListDepartmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsListDepartmentsResponse' from JSON`,
  );
}
