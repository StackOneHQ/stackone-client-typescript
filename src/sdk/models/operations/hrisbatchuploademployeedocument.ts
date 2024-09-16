/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type HrisBatchUploadEmployeeDocumentRequest = {
  hrisBatchDocumentUploadRequestDto: shared.HrisBatchDocumentUploadRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisBatchUploadEmployeeDocumentResponse = {
  /**
   * Batch operation accepted
   */
  batchResultApiModel?: shared.BatchResultApiModel | undefined;
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
export const HrisBatchUploadEmployeeDocumentRequest$inboundSchema: z.ZodType<
  HrisBatchUploadEmployeeDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisBatchDocumentUploadRequestDto:
    shared.HrisBatchDocumentUploadRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisBatchDocumentUploadRequestDto": "hrisBatchDocumentUploadRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisBatchUploadEmployeeDocumentRequest$Outbound = {
  HrisBatchDocumentUploadRequestDto:
    shared.HrisBatchDocumentUploadRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const HrisBatchUploadEmployeeDocumentRequest$outboundSchema: z.ZodType<
  HrisBatchUploadEmployeeDocumentRequest$Outbound,
  z.ZodTypeDef,
  HrisBatchUploadEmployeeDocumentRequest
> = z.object({
  hrisBatchDocumentUploadRequestDto:
    shared.HrisBatchDocumentUploadRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisBatchDocumentUploadRequestDto: "HrisBatchDocumentUploadRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisBatchUploadEmployeeDocumentRequest$ {
  /** @deprecated use `HrisBatchUploadEmployeeDocumentRequest$inboundSchema` instead. */
  export const inboundSchema =
    HrisBatchUploadEmployeeDocumentRequest$inboundSchema;
  /** @deprecated use `HrisBatchUploadEmployeeDocumentRequest$outboundSchema` instead. */
  export const outboundSchema =
    HrisBatchUploadEmployeeDocumentRequest$outboundSchema;
  /** @deprecated use `HrisBatchUploadEmployeeDocumentRequest$Outbound` instead. */
  export type Outbound = HrisBatchUploadEmployeeDocumentRequest$Outbound;
}

/** @internal */
export const HrisBatchUploadEmployeeDocumentResponse$inboundSchema: z.ZodType<
  HrisBatchUploadEmployeeDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BatchResultApiModel: shared.BatchResultApiModel$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BatchResultApiModel": "batchResultApiModel",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisBatchUploadEmployeeDocumentResponse$Outbound = {
  BatchResultApiModel?: shared.BatchResultApiModel$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisBatchUploadEmployeeDocumentResponse$outboundSchema: z.ZodType<
  HrisBatchUploadEmployeeDocumentResponse$Outbound,
  z.ZodTypeDef,
  HrisBatchUploadEmployeeDocumentResponse
> = z.object({
  batchResultApiModel: shared.BatchResultApiModel$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    batchResultApiModel: "BatchResultApiModel",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisBatchUploadEmployeeDocumentResponse$ {
  /** @deprecated use `HrisBatchUploadEmployeeDocumentResponse$inboundSchema` instead. */
  export const inboundSchema =
    HrisBatchUploadEmployeeDocumentResponse$inboundSchema;
  /** @deprecated use `HrisBatchUploadEmployeeDocumentResponse$outboundSchema` instead. */
  export const outboundSchema =
    HrisBatchUploadEmployeeDocumentResponse$outboundSchema;
  /** @deprecated use `HrisBatchUploadEmployeeDocumentResponse$Outbound` instead. */
  export type Outbound = HrisBatchUploadEmployeeDocumentResponse$Outbound;
}
