/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type HrisGetEmployeeDocumentRequest = {
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
  subResourceId: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisGetEmployeeDocumentResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The document related to the employee with the given identifiers was retrieved.
   */
  hrisDocumentResult?: shared.HrisDocumentResult | undefined;
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
export const HrisGetEmployeeDocumentRequest$inboundSchema: z.ZodType<
  HrisGetEmployeeDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  subResourceId: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisGetEmployeeDocumentRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeeDocumentRequest$outboundSchema: z.ZodType<
  HrisGetEmployeeDocumentRequest$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeDocumentRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  subResourceId: z.string(),
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
export namespace HrisGetEmployeeDocumentRequest$ {
  /** @deprecated use `HrisGetEmployeeDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetEmployeeDocumentRequest$inboundSchema;
  /** @deprecated use `HrisGetEmployeeDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetEmployeeDocumentRequest$outboundSchema;
  /** @deprecated use `HrisGetEmployeeDocumentRequest$Outbound` instead. */
  export type Outbound = HrisGetEmployeeDocumentRequest$Outbound;
}

/** @internal */
export const HrisGetEmployeeDocumentResponse$inboundSchema: z.ZodType<
  HrisGetEmployeeDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HrisDocumentResult: shared.HrisDocumentResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HrisDocumentResult": "hrisDocumentResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetEmployeeDocumentResponse$Outbound = {
  ContentType: string;
  HrisDocumentResult?: shared.HrisDocumentResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetEmployeeDocumentResponse$outboundSchema: z.ZodType<
  HrisGetEmployeeDocumentResponse$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeDocumentResponse
> = z.object({
  contentType: z.string(),
  hrisDocumentResult: shared.HrisDocumentResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisDocumentResult: "HrisDocumentResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeeDocumentResponse$ {
  /** @deprecated use `HrisGetEmployeeDocumentResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetEmployeeDocumentResponse$inboundSchema;
  /** @deprecated use `HrisGetEmployeeDocumentResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetEmployeeDocumentResponse$outboundSchema;
  /** @deprecated use `HrisGetEmployeeDocumentResponse$Outbound` instead. */
  export type Outbound = HrisGetEmployeeDocumentResponse$Outbound;
}
