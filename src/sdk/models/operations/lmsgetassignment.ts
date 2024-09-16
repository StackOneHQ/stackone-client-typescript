/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type LmsGetAssignmentRequest = {
  /**
   * The comma separated list of fields to return in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  id: string;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result is returned
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsGetAssignmentResponse = {
  /**
   * The assignment with the given identifier was retrieved.
   */
  assignmentResult?: shared.AssignmentResult | undefined;
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
export const LmsGetAssignmentRequest$inboundSchema: z.ZodType<
  LmsGetAssignmentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsGetAssignmentRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const LmsGetAssignmentRequest$outboundSchema: z.ZodType<
  LmsGetAssignmentRequest$Outbound,
  z.ZodTypeDef,
  LmsGetAssignmentRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsGetAssignmentRequest$ {
  /** @deprecated use `LmsGetAssignmentRequest$inboundSchema` instead. */
  export const inboundSchema = LmsGetAssignmentRequest$inboundSchema;
  /** @deprecated use `LmsGetAssignmentRequest$outboundSchema` instead. */
  export const outboundSchema = LmsGetAssignmentRequest$outboundSchema;
  /** @deprecated use `LmsGetAssignmentRequest$Outbound` instead. */
  export type Outbound = LmsGetAssignmentRequest$Outbound;
}

/** @internal */
export const LmsGetAssignmentResponse$inboundSchema: z.ZodType<
  LmsGetAssignmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AssignmentResult: shared.AssignmentResult$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AssignmentResult": "assignmentResult",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type LmsGetAssignmentResponse$Outbound = {
  AssignmentResult?: shared.AssignmentResult$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsGetAssignmentResponse$outboundSchema: z.ZodType<
  LmsGetAssignmentResponse$Outbound,
  z.ZodTypeDef,
  LmsGetAssignmentResponse
> = z.object({
  assignmentResult: shared.AssignmentResult$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    assignmentResult: "AssignmentResult",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsGetAssignmentResponse$ {
  /** @deprecated use `LmsGetAssignmentResponse$inboundSchema` instead. */
  export const inboundSchema = LmsGetAssignmentResponse$inboundSchema;
  /** @deprecated use `LmsGetAssignmentResponse$outboundSchema` instead. */
  export const outboundSchema = LmsGetAssignmentResponse$outboundSchema;
  /** @deprecated use `LmsGetAssignmentResponse$Outbound` instead. */
  export type Outbound = LmsGetAssignmentResponse$Outbound;
}
