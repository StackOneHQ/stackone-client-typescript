/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsGetApplicationDocumentRequest = {
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

export type AtsGetApplicationDocumentResponse = {
  /**
   * The document related to the application with the given identifiers was retrieved.
   */
  atsDocumentResult?: shared.AtsDocumentResult | undefined;
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
export const AtsGetApplicationDocumentRequest$inboundSchema: z.ZodType<
  AtsGetApplicationDocumentRequest,
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
export type AtsGetApplicationDocumentRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const AtsGetApplicationDocumentRequest$outboundSchema: z.ZodType<
  AtsGetApplicationDocumentRequest$Outbound,
  z.ZodTypeDef,
  AtsGetApplicationDocumentRequest
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
export namespace AtsGetApplicationDocumentRequest$ {
  /** @deprecated use `AtsGetApplicationDocumentRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetApplicationDocumentRequest$inboundSchema;
  /** @deprecated use `AtsGetApplicationDocumentRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetApplicationDocumentRequest$outboundSchema;
  /** @deprecated use `AtsGetApplicationDocumentRequest$Outbound` instead. */
  export type Outbound = AtsGetApplicationDocumentRequest$Outbound;
}

/** @internal */
export const AtsGetApplicationDocumentResponse$inboundSchema: z.ZodType<
  AtsGetApplicationDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsDocumentResult: shared.AtsDocumentResult$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "AtsDocumentResult": "atsDocumentResult",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetApplicationDocumentResponse$Outbound = {
  AtsDocumentResult?: shared.AtsDocumentResult$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetApplicationDocumentResponse$outboundSchema: z.ZodType<
  AtsGetApplicationDocumentResponse$Outbound,
  z.ZodTypeDef,
  AtsGetApplicationDocumentResponse
> = z.object({
  atsDocumentResult: shared.AtsDocumentResult$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    atsDocumentResult: "AtsDocumentResult",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetApplicationDocumentResponse$ {
  /** @deprecated use `AtsGetApplicationDocumentResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetApplicationDocumentResponse$inboundSchema;
  /** @deprecated use `AtsGetApplicationDocumentResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetApplicationDocumentResponse$outboundSchema;
  /** @deprecated use `AtsGetApplicationDocumentResponse$Outbound` instead. */
  export type Outbound = AtsGetApplicationDocumentResponse$Outbound;
}
