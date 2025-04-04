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
 * Filter to select assignment by status
 */
export enum LmsListUserAssignmentsQueryParamStatus {
  Pending = "pending",
  InProgress = "in_progress",
  Completed = "completed",
}

/**
 * LMS Assignment Filter
 */
export type LmsListUserAssignmentsQueryParamFilter = {
  /**
   * Filter to select assignment by status
   */
  status?: LmsListUserAssignmentsQueryParamStatus | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type LmsListUserAssignmentsRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * LMS Assignment Filter
   */
  filter?: LmsListUserAssignmentsQueryParamFilter | null | undefined;
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

export type LmsListUserAssignmentsResponse = {
  /**
   * The assignments related to the employee with the given identifier were retrieved.
   */
  assignmentsPaginated?: shared.AssignmentsPaginated | undefined;
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
export const LmsListUserAssignmentsQueryParamStatus$inboundSchema:
  z.ZodNativeEnum<typeof LmsListUserAssignmentsQueryParamStatus> = z.nativeEnum(
    LmsListUserAssignmentsQueryParamStatus,
  );

/** @internal */
export const LmsListUserAssignmentsQueryParamStatus$outboundSchema:
  z.ZodNativeEnum<typeof LmsListUserAssignmentsQueryParamStatus> =
    LmsListUserAssignmentsQueryParamStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsListUserAssignmentsQueryParamStatus$ {
  /** @deprecated use `LmsListUserAssignmentsQueryParamStatus$inboundSchema` instead. */
  export const inboundSchema =
    LmsListUserAssignmentsQueryParamStatus$inboundSchema;
  /** @deprecated use `LmsListUserAssignmentsQueryParamStatus$outboundSchema` instead. */
  export const outboundSchema =
    LmsListUserAssignmentsQueryParamStatus$outboundSchema;
}

/** @internal */
export const LmsListUserAssignmentsQueryParamFilter$inboundSchema: z.ZodType<
  LmsListUserAssignmentsQueryParamFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  status: z.nullable(LmsListUserAssignmentsQueryParamStatus$inboundSchema)
    .optional(),
  updated_after: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "updated_after": "updatedAfter",
  });
});

/** @internal */
export type LmsListUserAssignmentsQueryParamFilter$Outbound = {
  status?: string | null | undefined;
  updated_after?: string | null | undefined;
};

/** @internal */
export const LmsListUserAssignmentsQueryParamFilter$outboundSchema: z.ZodType<
  LmsListUserAssignmentsQueryParamFilter$Outbound,
  z.ZodTypeDef,
  LmsListUserAssignmentsQueryParamFilter
> = z.object({
  status: z.nullable(LmsListUserAssignmentsQueryParamStatus$outboundSchema)
    .optional(),
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
export namespace LmsListUserAssignmentsQueryParamFilter$ {
  /** @deprecated use `LmsListUserAssignmentsQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    LmsListUserAssignmentsQueryParamFilter$inboundSchema;
  /** @deprecated use `LmsListUserAssignmentsQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    LmsListUserAssignmentsQueryParamFilter$outboundSchema;
  /** @deprecated use `LmsListUserAssignmentsQueryParamFilter$Outbound` instead. */
  export type Outbound = LmsListUserAssignmentsQueryParamFilter$Outbound;
}

export function lmsListUserAssignmentsQueryParamFilterToJSON(
  lmsListUserAssignmentsQueryParamFilter:
    LmsListUserAssignmentsQueryParamFilter,
): string {
  return JSON.stringify(
    LmsListUserAssignmentsQueryParamFilter$outboundSchema.parse(
      lmsListUserAssignmentsQueryParamFilter,
    ),
  );
}

export function lmsListUserAssignmentsQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<LmsListUserAssignmentsQueryParamFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      LmsListUserAssignmentsQueryParamFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListUserAssignmentsQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const LmsListUserAssignmentsRequest$inboundSchema: z.ZodType<
  LmsListUserAssignmentsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListUserAssignmentsQueryParamFilter$inboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export type LmsListUserAssignmentsRequest$Outbound = {
  fields?: string | null | undefined;
  filter?: LmsListUserAssignmentsQueryParamFilter$Outbound | null | undefined;
  id: string;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  remote_user_id?: string | null | undefined;
  updated_after?: string | null | undefined;
  user_id?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const LmsListUserAssignmentsRequest$outboundSchema: z.ZodType<
  LmsListUserAssignmentsRequest$Outbound,
  z.ZodTypeDef,
  LmsListUserAssignmentsRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => LmsListUserAssignmentsQueryParamFilter$outboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace LmsListUserAssignmentsRequest$ {
  /** @deprecated use `LmsListUserAssignmentsRequest$inboundSchema` instead. */
  export const inboundSchema = LmsListUserAssignmentsRequest$inboundSchema;
  /** @deprecated use `LmsListUserAssignmentsRequest$outboundSchema` instead. */
  export const outboundSchema = LmsListUserAssignmentsRequest$outboundSchema;
  /** @deprecated use `LmsListUserAssignmentsRequest$Outbound` instead. */
  export type Outbound = LmsListUserAssignmentsRequest$Outbound;
}

export function lmsListUserAssignmentsRequestToJSON(
  lmsListUserAssignmentsRequest: LmsListUserAssignmentsRequest,
): string {
  return JSON.stringify(
    LmsListUserAssignmentsRequest$outboundSchema.parse(
      lmsListUserAssignmentsRequest,
    ),
  );
}

export function lmsListUserAssignmentsRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsListUserAssignmentsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListUserAssignmentsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListUserAssignmentsRequest' from JSON`,
  );
}

/** @internal */
export const LmsListUserAssignmentsResponse$inboundSchema: z.ZodType<
  LmsListUserAssignmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AssignmentsPaginated: shared.AssignmentsPaginated$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AssignmentsPaginated": "assignmentsPaginated",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsListUserAssignmentsResponse$Outbound = {
  AssignmentsPaginated?: shared.AssignmentsPaginated$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsListUserAssignmentsResponse$outboundSchema: z.ZodType<
  LmsListUserAssignmentsResponse$Outbound,
  z.ZodTypeDef,
  LmsListUserAssignmentsResponse
> = z.object({
  assignmentsPaginated: shared.AssignmentsPaginated$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    assignmentsPaginated: "AssignmentsPaginated",
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
export namespace LmsListUserAssignmentsResponse$ {
  /** @deprecated use `LmsListUserAssignmentsResponse$inboundSchema` instead. */
  export const inboundSchema = LmsListUserAssignmentsResponse$inboundSchema;
  /** @deprecated use `LmsListUserAssignmentsResponse$outboundSchema` instead. */
  export const outboundSchema = LmsListUserAssignmentsResponse$outboundSchema;
  /** @deprecated use `LmsListUserAssignmentsResponse$Outbound` instead. */
  export type Outbound = LmsListUserAssignmentsResponse$Outbound;
}

export function lmsListUserAssignmentsResponseToJSON(
  lmsListUserAssignmentsResponse: LmsListUserAssignmentsResponse,
): string {
  return JSON.stringify(
    LmsListUserAssignmentsResponse$outboundSchema.parse(
      lmsListUserAssignmentsResponse,
    ),
  );
}

export function lmsListUserAssignmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsListUserAssignmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsListUserAssignmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsListUserAssignmentsResponse' from JSON`,
  );
}
