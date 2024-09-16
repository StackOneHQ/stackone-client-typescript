/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type LmsListAssignmentsQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type LmsListAssignmentsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: LmsListAssignmentsQueryParamFilter | null | undefined;
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
   * Provider's unique identifier of the user related to the assignment
   */
  remoteUserId?: string | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  updatedAfter?: string | null | undefined;
  /**
   * The user ID associated with this assignment
   */
  userId?: string | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsListAssignmentsResponse = {
  /**
   * The list of assignments was retrieved.
   */
  assignmentsPaginated?: shared.AssignmentsPaginated | undefined;
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
export const LmsListAssignmentsQueryParamFilter$inboundSchema: z.ZodType<
  LmsListAssignmentsQueryParamFilter,
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
export type LmsListAssignmentsQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const LmsListAssignmentsQueryParamFilter$outboundSchema: z.ZodType<
  LmsListAssignmentsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  LmsListAssignmentsQueryParamFilter
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
export namespace LmsListAssignmentsQueryParamFilter$ {
  /** @deprecated use `LmsListAssignmentsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = LmsListAssignmentsQueryParamFilter$inboundSchema;
  /** @deprecated use `LmsListAssignmentsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    LmsListAssignmentsQueryParamFilter$outboundSchema;
  /** @deprecated use `LmsListAssignmentsQueryParamFilter$Outbound` instead. */
  export type Outbound = LmsListAssignmentsQueryParamFilter$Outbound;
}

/** @internal */
export const LmsListAssignmentsRequest$inboundSchema: z.ZodType<
  LmsListAssignmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListAssignmentsQueryParamFilter$inboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  remote_user_id: z.nullable(z.string()).optional(),
  updated_after: z.nullable(z.string()).optional(),
  user_id: z.nullable(z.string()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "remote_user_id": "remoteUserId",
    "updated_after": "updatedAfter",
    "user_id": "userId",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsListAssignmentsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: LmsListAssignmentsQueryParamFilter$Outbound | null | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size: string | null;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  remote_user_id?: string | null | undefined;
  updated_after?: string | null | undefined;
  user_id?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsListAssignmentsRequest$outboundSchema: z.ZodType<
  LmsListAssignmentsRequest$Outbound,
  z.ZodTypeDef,
  LmsListAssignmentsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListAssignmentsQueryParamFilter$outboundSchema),
  ).optional(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string().default("25")),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  remoteUserId: z.nullable(z.string()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
  userId: z.nullable(z.string()).optional(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    remoteUserId: "remote_user_id",
    updatedAfter: "updated_after",
    userId: "user_id",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListAssignmentsRequest$ {
  /** @deprecated use `LmsListAssignmentsRequest$inboundSchema` instead. */
  export const inboundSchema = LmsListAssignmentsRequest$inboundSchema;
  /** @deprecated use `LmsListAssignmentsRequest$outboundSchema` instead. */
  export const outboundSchema = LmsListAssignmentsRequest$outboundSchema;
  /** @deprecated use `LmsListAssignmentsRequest$Outbound` instead. */
  export type Outbound = LmsListAssignmentsRequest$Outbound;
}

/** @internal */
export const LmsListAssignmentsResponse$inboundSchema: z.ZodType<
  LmsListAssignmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AssignmentsPaginated: shared.AssignmentsPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AssignmentsPaginated": "assignmentsPaginated",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsListAssignmentsResponse$Outbound = {
  AssignmentsPaginated?: shared.AssignmentsPaginated$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsListAssignmentsResponse$outboundSchema: z.ZodType<
  LmsListAssignmentsResponse$Outbound,
  z.ZodTypeDef,
  LmsListAssignmentsResponse
> = z.object({
  assignmentsPaginated: shared.AssignmentsPaginated$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    assignmentsPaginated: "AssignmentsPaginated",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListAssignmentsResponse$ {
  /** @deprecated use `LmsListAssignmentsResponse$inboundSchema` instead. */
  export const inboundSchema = LmsListAssignmentsResponse$inboundSchema;
  /** @deprecated use `LmsListAssignmentsResponse$outboundSchema` instead. */
  export const outboundSchema = LmsListAssignmentsResponse$outboundSchema;
  /** @deprecated use `LmsListAssignmentsResponse$Outbound` instead. */
  export type Outbound = LmsListAssignmentsResponse$Outbound;
}
