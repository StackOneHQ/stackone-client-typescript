/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsUploadApplicationDocumentRequest = {
  unifiedUploadRequestDto: shared.UnifiedUploadRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsUploadApplicationDocumentResponse = {
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
  /**
   * The document related to the application with the given identifier was uploaded.
   */
  writeResultApiModel?: shared.WriteResultApiModel | undefined;
};

/** @internal */
export const AtsUploadApplicationDocumentRequest$inboundSchema: z.ZodType<
  AtsUploadApplicationDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UnifiedUploadRequestDto: shared.UnifiedUploadRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "UnifiedUploadRequestDto": "unifiedUploadRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsUploadApplicationDocumentRequest$Outbound = {
  UnifiedUploadRequestDto: shared.UnifiedUploadRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const AtsUploadApplicationDocumentRequest$outboundSchema: z.ZodType<
  AtsUploadApplicationDocumentRequest$Outbound,
  z.ZodTypeDef,
  AtsUploadApplicationDocumentRequest
> = z.object({
  unifiedUploadRequestDto: shared.UnifiedUploadRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    unifiedUploadRequestDto: "UnifiedUploadRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUploadApplicationDocumentRequest$ {
  /** @deprecated use `AtsUploadApplicationDocumentRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsUploadApplicationDocumentRequest$inboundSchema;
  /** @deprecated use `AtsUploadApplicationDocumentRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsUploadApplicationDocumentRequest$outboundSchema;
  /** @deprecated use `AtsUploadApplicationDocumentRequest$Outbound` instead. */
  export type Outbound = AtsUploadApplicationDocumentRequest$Outbound;
}

/** @internal */
export const AtsUploadApplicationDocumentResponse$inboundSchema: z.ZodType<
  AtsUploadApplicationDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WriteResultApiModel: shared.WriteResultApiModel$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WriteResultApiModel": "writeResultApiModel",
  });
});

/** @internal */
export type AtsUploadApplicationDocumentResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  WriteResultApiModel?: shared.WriteResultApiModel$Outbound | undefined;
};

/** @internal */
export const AtsUploadApplicationDocumentResponse$outboundSchema: z.ZodType<
  AtsUploadApplicationDocumentResponse$Outbound,
  z.ZodTypeDef,
  AtsUploadApplicationDocumentResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  writeResultApiModel: shared.WriteResultApiModel$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    writeResultApiModel: "WriteResultApiModel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUploadApplicationDocumentResponse$ {
  /** @deprecated use `AtsUploadApplicationDocumentResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsUploadApplicationDocumentResponse$inboundSchema;
  /** @deprecated use `AtsUploadApplicationDocumentResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsUploadApplicationDocumentResponse$outboundSchema;
  /** @deprecated use `AtsUploadApplicationDocumentResponse$Outbound` instead. */
  export type Outbound = AtsUploadApplicationDocumentResponse$Outbound;
}
