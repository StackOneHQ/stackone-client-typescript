/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

/**
 * The status of the job
 */
export enum Status {
  Open = "open",
}

/**
 * ATS Jobs filters
 */
export type AtsListJobsQueryParamFilter = {
  /**
   * The status of the job
   */
  status?: Status | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsListJobsRequest = {
  /**
   * The comma separated list of fields that will be expanded in the response
   */
  expand?: string | null | undefined;
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * ATS Jobs filters
   */
  filter?: AtsListJobsQueryParamFilter | null | undefined;
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

export type AtsListJobsResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The list of jobs was retrieved.
   */
  jobsPaginated?: shared.JobsPaginated | undefined;
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
export const Status$inboundSchema: z.ZodNativeEnum<typeof Status> = z
  .nativeEnum(Status);

/** @internal */
export const Status$outboundSchema: z.ZodNativeEnum<typeof Status> =
  Status$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Status$ {
  /** @deprecated use `Status$inboundSchema` instead. */
  export const inboundSchema = Status$inboundSchema;
  /** @deprecated use `Status$outboundSchema` instead. */
  export const outboundSchema = Status$outboundSchema;
}

/** @internal */
export const AtsListJobsQueryParamFilter$inboundSchema: z.ZodType<
  AtsListJobsQueryParamFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.nullable(Status$inboundSchema).optional(),
  updated_after: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "updated_after": "updatedAfter",
  });
});

/** @internal */
export type AtsListJobsQueryParamFilter$Outbound = {
  status?: string | null | undefined;
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsListJobsQueryParamFilter$outboundSchema: z.ZodType<
  AtsListJobsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  AtsListJobsQueryParamFilter
> = z.object({
  status: z.nullable(Status$outboundSchema).optional(),
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
export namespace AtsListJobsQueryParamFilter$ {
  /** @deprecated use `AtsListJobsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema = AtsListJobsQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsListJobsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema = AtsListJobsQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsListJobsQueryParamFilter$Outbound` instead. */
  export type Outbound = AtsListJobsQueryParamFilter$Outbound;
}

/** @internal */
export const AtsListJobsRequest$inboundSchema: z.ZodType<
  AtsListJobsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => AtsListJobsQueryParamFilter$inboundSchema))
    .optional(),
  include: z.nullable(z.string()).optional(),
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
export type AtsListJobsRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  filter?: AtsListJobsQueryParamFilter$Outbound | null | undefined;
  include?: string | null | undefined;
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
export const AtsListJobsRequest$outboundSchema: z.ZodType<
  AtsListJobsRequest$Outbound,
  z.ZodTypeDef,
  AtsListJobsRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(z.lazy(() => AtsListJobsQueryParamFilter$outboundSchema))
    .optional(),
  include: z.nullable(z.string()).optional(),
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
export namespace AtsListJobsRequest$ {
  /** @deprecated use `AtsListJobsRequest$inboundSchema` instead. */
  export const inboundSchema = AtsListJobsRequest$inboundSchema;
  /** @deprecated use `AtsListJobsRequest$outboundSchema` instead. */
  export const outboundSchema = AtsListJobsRequest$outboundSchema;
  /** @deprecated use `AtsListJobsRequest$Outbound` instead. */
  export type Outbound = AtsListJobsRequest$Outbound;
}

/** @internal */
export const AtsListJobsResponse$inboundSchema: z.ZodType<
  AtsListJobsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  JobsPaginated: shared.JobsPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "JobsPaginated": "jobsPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsListJobsResponse$Outbound = {
  ContentType: string;
  JobsPaginated?: shared.JobsPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsListJobsResponse$outboundSchema: z.ZodType<
  AtsListJobsResponse$Outbound,
  z.ZodTypeDef,
  AtsListJobsResponse
> = z.object({
  contentType: z.string(),
  jobsPaginated: shared.JobsPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    jobsPaginated: "JobsPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsListJobsResponse$ {
  /** @deprecated use `AtsListJobsResponse$inboundSchema` instead. */
  export const inboundSchema = AtsListJobsResponse$inboundSchema;
  /** @deprecated use `AtsListJobsResponse$outboundSchema` instead. */
  export const outboundSchema = AtsListJobsResponse$outboundSchema;
  /** @deprecated use `AtsListJobsResponse$Outbound` instead. */
  export type Outbound = AtsListJobsResponse$Outbound;
}
