/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsGetRejectedReasonRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
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

export type AtsGetRejectedReasonResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The rejected reason with the given identifier was retrieved.
   */
  rejectedReasonResult?: shared.RejectedReasonResult | undefined;
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
export const AtsGetRejectedReasonRequest$inboundSchema: z.ZodType<
  AtsGetRejectedReasonRequest,
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
export type AtsGetRejectedReasonRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetRejectedReasonRequest$outboundSchema: z.ZodType<
  AtsGetRejectedReasonRequest$Outbound,
  z.ZodTypeDef,
  AtsGetRejectedReasonRequest
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
export namespace AtsGetRejectedReasonRequest$ {
  /** @deprecated use `AtsGetRejectedReasonRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetRejectedReasonRequest$inboundSchema;
  /** @deprecated use `AtsGetRejectedReasonRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetRejectedReasonRequest$outboundSchema;
  /** @deprecated use `AtsGetRejectedReasonRequest$Outbound` instead. */
  export type Outbound = AtsGetRejectedReasonRequest$Outbound;
}

/** @internal */
export const AtsGetRejectedReasonResponse$inboundSchema: z.ZodType<
  AtsGetRejectedReasonResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  RejectedReasonResult: shared.RejectedReasonResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "RejectedReasonResult": "rejectedReasonResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetRejectedReasonResponse$Outbound = {
  ContentType: string;
  RejectedReasonResult?: shared.RejectedReasonResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetRejectedReasonResponse$outboundSchema: z.ZodType<
  AtsGetRejectedReasonResponse$Outbound,
  z.ZodTypeDef,
  AtsGetRejectedReasonResponse
> = z.object({
  contentType: z.string(),
  rejectedReasonResult: shared.RejectedReasonResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    rejectedReasonResult: "RejectedReasonResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetRejectedReasonResponse$ {
  /** @deprecated use `AtsGetRejectedReasonResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetRejectedReasonResponse$inboundSchema;
  /** @deprecated use `AtsGetRejectedReasonResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetRejectedReasonResponse$outboundSchema;
  /** @deprecated use `AtsGetRejectedReasonResponse$Outbound` instead. */
  export type Outbound = AtsGetRejectedReasonResponse$Outbound;
}
