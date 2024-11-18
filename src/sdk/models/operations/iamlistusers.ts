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
export type IamListUsersQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type IamListUsersRequest = {
  /**
   * The comma separated list of fields that will be expanded in the response
   */
  expand?: string | null | undefined;
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: IamListUsersQueryParamFilter | null | undefined;
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

export type IamListUsersResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of users was retrieved.
   */
  iamUsersPaginated?: shared.IamUsersPaginated | undefined;
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
export const IamListUsersQueryParamFilter$inboundSchema: z.ZodType<
  IamListUsersQueryParamFilter,
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
export type IamListUsersQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const IamListUsersQueryParamFilter$outboundSchema: z.ZodType<
  IamListUsersQueryParamFilter$Outbound,
  z.ZodTypeDef,
  IamListUsersQueryParamFilter
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
export namespace IamListUsersQueryParamFilter$ {
  /** @deprecated use `IamListUsersQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = IamListUsersQueryParamFilter$inboundSchema;
  /** @deprecated use `IamListUsersQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = IamListUsersQueryParamFilter$outboundSchema;
  /** @deprecated use `IamListUsersQueryParamFilter$Outbound` instead. */
  export type Outbound = IamListUsersQueryParamFilter$Outbound;
}

export function iamListUsersQueryParamFilterToJSON(
  iamListUsersQueryParamFilter: IamListUsersQueryParamFilter,
): string {
  return JSON.stringify(
    IamListUsersQueryParamFilter$outboundSchema.parse(
      iamListUsersQueryParamFilter,
    ),
  );
}

export function iamListUsersQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<IamListUsersQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamListUsersQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamListUsersQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const IamListUsersRequest$inboundSchema: z.ZodType<
  IamListUsersRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => IamListUsersQueryParamFilter$inboundSchema))
    .optional(),
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
export type IamListUsersRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  filter?: IamListUsersQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const IamListUsersRequest$outboundSchema: z.ZodType<
  IamListUsersRequest$Outbound,
  z.ZodTypeDef,
  IamListUsersRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => IamListUsersQueryParamFilter$outboundSchema))
    .optional(),
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
export namespace IamListUsersRequest$ {
  /** @deprecated use `IamListUsersRequest$inboundSchema` instead. */
  export const inboundSchema = IamListUsersRequest$inboundSchema;
  /** @deprecated use `IamListUsersRequest$outboundSchema` instead. */
  export const outboundSchema = IamListUsersRequest$outboundSchema;
  /** @deprecated use `IamListUsersRequest$Outbound` instead. */
  export type Outbound = IamListUsersRequest$Outbound;
}

export function iamListUsersRequestToJSON(
  iamListUsersRequest: IamListUsersRequest,
): string {
  return JSON.stringify(
    IamListUsersRequest$outboundSchema.parse(iamListUsersRequest),
  );
}

export function iamListUsersRequestFromJSON(
  jsonString: string,
): SafeParseResult<IamListUsersRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamListUsersRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamListUsersRequest' from JSON`,
  );
}

/** @internal */
export const IamListUsersResponse$inboundSchema: z.ZodType<
  IamListUsersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  IamUsersPaginated: shared.IamUsersPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "IamUsersPaginated": "iamUsersPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type IamListUsersResponse$Outbound = {
  ContentType: string;
  IamUsersPaginated?: shared.IamUsersPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const IamListUsersResponse$outboundSchema: z.ZodType<
  IamListUsersResponse$Outbound,
  z.ZodTypeDef,
  IamListUsersResponse
> = z.object({
  contentType: z.string(),
  iamUsersPaginated: shared.IamUsersPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    iamUsersPaginated: "IamUsersPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamListUsersResponse$ {
  /** @deprecated use `IamListUsersResponse$inboundSchema` instead. */
  export const inboundSchema = IamListUsersResponse$inboundSchema;
  /** @deprecated use `IamListUsersResponse$outboundSchema` instead. */
  export const outboundSchema = IamListUsersResponse$outboundSchema;
  /** @deprecated use `IamListUsersResponse$Outbound` instead. */
  export type Outbound = IamListUsersResponse$Outbound;
}

export function iamListUsersResponseToJSON(
  iamListUsersResponse: IamListUsersResponse,
): string {
  return JSON.stringify(
    IamListUsersResponse$outboundSchema.parse(iamListUsersResponse),
  );
}

export function iamListUsersResponseFromJSON(
  jsonString: string,
): SafeParseResult<IamListUsersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamListUsersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamListUsersResponse' from JSON`,
  );
}
