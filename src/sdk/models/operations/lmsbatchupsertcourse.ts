/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type LmsBatchUpsertCourseRequest = {
  lmsBatchUpsertCourseRequestDto: shared.LmsBatchUpsertCourseRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsBatchUpsertCourseResponse = {
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
export const LmsBatchUpsertCourseRequest$inboundSchema: z.ZodType<
  LmsBatchUpsertCourseRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsBatchUpsertCourseRequestDto:
    shared.LmsBatchUpsertCourseRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsBatchUpsertCourseRequestDto": "lmsBatchUpsertCourseRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsBatchUpsertCourseRequest$Outbound = {
  LmsBatchUpsertCourseRequestDto:
    shared.LmsBatchUpsertCourseRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const LmsBatchUpsertCourseRequest$outboundSchema: z.ZodType<
  LmsBatchUpsertCourseRequest$Outbound,
  z.ZodTypeDef,
  LmsBatchUpsertCourseRequest
> = z.object({
  lmsBatchUpsertCourseRequestDto:
    shared.LmsBatchUpsertCourseRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsBatchUpsertCourseRequestDto: "LmsBatchUpsertCourseRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsBatchUpsertCourseRequest$ {
  /** @deprecated use `LmsBatchUpsertCourseRequest$inboundSchema` instead. */
  export const inboundSchema = LmsBatchUpsertCourseRequest$inboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseRequest$outboundSchema` instead. */
  export const outboundSchema = LmsBatchUpsertCourseRequest$outboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseRequest$Outbound` instead. */
  export type Outbound = LmsBatchUpsertCourseRequest$Outbound;
}

/** @internal */
export const LmsBatchUpsertCourseResponse$inboundSchema: z.ZodType<
  LmsBatchUpsertCourseResponse,
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
export type LmsBatchUpsertCourseResponse$Outbound = {
  BatchResultApiModel?: shared.BatchResultApiModel$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsBatchUpsertCourseResponse$outboundSchema: z.ZodType<
  LmsBatchUpsertCourseResponse$Outbound,
  z.ZodTypeDef,
  LmsBatchUpsertCourseResponse
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
export namespace LmsBatchUpsertCourseResponse$ {
  /** @deprecated use `LmsBatchUpsertCourseResponse$inboundSchema` instead. */
  export const inboundSchema = LmsBatchUpsertCourseResponse$inboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseResponse$outboundSchema` instead. */
  export const outboundSchema = LmsBatchUpsertCourseResponse$outboundSchema;
  /** @deprecated use `LmsBatchUpsertCourseResponse$Outbound` instead. */
  export type Outbound = LmsBatchUpsertCourseResponse$Outbound;
}
