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
 * HRIS Employees filters
 */
export type HrisListEmployeesQueryParamFilter = {
  /**
   * Filter to select employees by email
   */
  email?: string | null | undefined;
  /**
   * Filter to select employees by employee_number
   */
  employeeNumber?: string | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type HrisListEmployeesRequest = {
  /**
   * The comma separated list of fields that will be expanded in the response
   */
  expand?: string | null | undefined;
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * HRIS Employees filters
   */
  filter?: HrisListEmployeesQueryParamFilter | null | undefined;
  /**
   * The comma separated list of fields that will be included in the response
   */
  include?: string | null | undefined;
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

export type HrisListEmployeesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of employees was retrieved.
   */
  employeesPaginated?: shared.EmployeesPaginated | undefined;
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
export const HrisListEmployeesQueryParamFilter$inboundSchema: z.ZodType<
  HrisListEmployeesQueryParamFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  employee_number: z.nullable(z.string()).optional(),
  updated_after: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_number": "employeeNumber",
    "updated_after": "updatedAfter",
  });
});

/** @internal */
export type HrisListEmployeesQueryParamFilter$Outbound = {
  email?: string | null | undefined;
  employee_number?: string | null | undefined;
  updated_after?: string | null | undefined;
};

/** @internal */
export const HrisListEmployeesQueryParamFilter$outboundSchema: z.ZodType<
  HrisListEmployeesQueryParamFilter$Outbound,
  z.ZodTypeDef,
  HrisListEmployeesQueryParamFilter
> = z.object({
  email: z.nullable(z.string()).optional(),
  employeeNumber: z.nullable(z.string()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeNumber: "employee_number",
    updatedAfter: "updated_after",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListEmployeesQueryParamFilter$ {
  /** @deprecated use `HrisListEmployeesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = HrisListEmployeesQueryParamFilter$inboundSchema;
  /** @deprecated use `HrisListEmployeesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    HrisListEmployeesQueryParamFilter$outboundSchema;
  /** @deprecated use `HrisListEmployeesQueryParamFilter$Outbound` instead. */
  export type Outbound = HrisListEmployeesQueryParamFilter$Outbound;
}

export function hrisListEmployeesQueryParamFilterToJSON(
  hrisListEmployeesQueryParamFilter: HrisListEmployeesQueryParamFilter,
): string {
  return JSON.stringify(
    HrisListEmployeesQueryParamFilter$outboundSchema.parse(
      hrisListEmployeesQueryParamFilter,
    ),
  );
}

export function hrisListEmployeesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<HrisListEmployeesQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListEmployeesQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListEmployeesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const HrisListEmployeesRequest$inboundSchema: z.ZodType<
  HrisListEmployeesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListEmployeesQueryParamFilter$inboundSchema),
  ).optional(),
  include: z.nullable(z.string()).optional(),
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
export type HrisListEmployeesRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  filter?: HrisListEmployeesQueryParamFilter$Outbound | null | undefined;
  include?: string | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisListEmployeesRequest$outboundSchema: z.ZodType<
  HrisListEmployeesRequest$Outbound,
  z.ZodTypeDef,
  HrisListEmployeesRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => HrisListEmployeesQueryParamFilter$outboundSchema),
  ).optional(),
  include: z.nullable(z.string()).optional(),
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
export namespace HrisListEmployeesRequest$ {
  /** @deprecated use `HrisListEmployeesRequest$inboundSchema` instead. */
  export const inboundSchema = HrisListEmployeesRequest$inboundSchema;
  /** @deprecated use `HrisListEmployeesRequest$outboundSchema` instead. */
  export const outboundSchema = HrisListEmployeesRequest$outboundSchema;
  /** @deprecated use `HrisListEmployeesRequest$Outbound` instead. */
  export type Outbound = HrisListEmployeesRequest$Outbound;
}

export function hrisListEmployeesRequestToJSON(
  hrisListEmployeesRequest: HrisListEmployeesRequest,
): string {
  return JSON.stringify(
    HrisListEmployeesRequest$outboundSchema.parse(hrisListEmployeesRequest),
  );
}

export function hrisListEmployeesRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisListEmployeesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListEmployeesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListEmployeesRequest' from JSON`,
  );
}

/** @internal */
export const HrisListEmployeesResponse$inboundSchema: z.ZodType<
  HrisListEmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  EmployeesPaginated: shared.EmployeesPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "EmployeesPaginated": "employeesPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisListEmployeesResponse$Outbound = {
  ContentType: string;
  EmployeesPaginated?: shared.EmployeesPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisListEmployeesResponse$outboundSchema: z.ZodType<
  HrisListEmployeesResponse$Outbound,
  z.ZodTypeDef,
  HrisListEmployeesResponse
> = z.object({
  contentType: z.string(),
  employeesPaginated: shared.EmployeesPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    employeesPaginated: "EmployeesPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisListEmployeesResponse$ {
  /** @deprecated use `HrisListEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema = HrisListEmployeesResponse$inboundSchema;
  /** @deprecated use `HrisListEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema = HrisListEmployeesResponse$outboundSchema;
  /** @deprecated use `HrisListEmployeesResponse$Outbound` instead. */
  export type Outbound = HrisListEmployeesResponse$Outbound;
}

export function hrisListEmployeesResponseToJSON(
  hrisListEmployeesResponse: HrisListEmployeesResponse,
): string {
  return JSON.stringify(
    HrisListEmployeesResponse$outboundSchema.parse(hrisListEmployeesResponse),
  );
}

export function hrisListEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisListEmployeesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisListEmployeesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisListEmployeesResponse' from JSON`,
  );
}
