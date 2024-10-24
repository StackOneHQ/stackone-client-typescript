/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type LmsBatchUpsertContentRequest = {
  lmsBatchUpsertContentRequestDto: shared.LmsBatchUpsertContentRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsBatchUpsertContentResponse = {
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
export const LmsBatchUpsertContentRequest$inboundSchema: z.ZodType<
  LmsBatchUpsertContentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsBatchUpsertContentRequestDto:
    shared.LmsBatchUpsertContentRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsBatchUpsertContentRequestDto": "lmsBatchUpsertContentRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsBatchUpsertContentRequest$Outbound = {
  LmsBatchUpsertContentRequestDto:
    shared.LmsBatchUpsertContentRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const LmsBatchUpsertContentRequest$outboundSchema: z.ZodType<
  LmsBatchUpsertContentRequest$Outbound,
  z.ZodTypeDef,
  LmsBatchUpsertContentRequest
> = z.object({
  lmsBatchUpsertContentRequestDto:
    shared.LmsBatchUpsertContentRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsBatchUpsertContentRequestDto: "LmsBatchUpsertContentRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsBatchUpsertContentRequest$ {
  /** @deprecated use `LmsBatchUpsertContentRequest$inboundSchema` instead. */
  export const inboundSchema = LmsBatchUpsertContentRequest$inboundSchema;
  /** @deprecated use `LmsBatchUpsertContentRequest$outboundSchema` instead. */
  export const outboundSchema = LmsBatchUpsertContentRequest$outboundSchema;
  /** @deprecated use `LmsBatchUpsertContentRequest$Outbound` instead. */
  export type Outbound = LmsBatchUpsertContentRequest$Outbound;
}

/** @internal */
export const LmsBatchUpsertContentResponse$inboundSchema: z.ZodType<
  LmsBatchUpsertContentResponse,
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
export type LmsBatchUpsertContentResponse$Outbound = {
  BatchResultApiModel?: shared.BatchResultApiModel$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsBatchUpsertContentResponse$outboundSchema: z.ZodType<
  LmsBatchUpsertContentResponse$Outbound,
  z.ZodTypeDef,
  LmsBatchUpsertContentResponse
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
export namespace LmsBatchUpsertContentResponse$ {
  /** @deprecated use `LmsBatchUpsertContentResponse$inboundSchema` instead. */
  export const inboundSchema = LmsBatchUpsertContentResponse$inboundSchema;
  /** @deprecated use `LmsBatchUpsertContentResponse$outboundSchema` instead. */
  export const outboundSchema = LmsBatchUpsertContentResponse$outboundSchema;
  /** @deprecated use `LmsBatchUpsertContentResponse$Outbound` instead. */
  export type Outbound = LmsBatchUpsertContentResponse$Outbound;
}
