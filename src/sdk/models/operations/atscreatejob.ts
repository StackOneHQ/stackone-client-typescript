/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsCreateJobRequest = {
  atsCreateJobRequestDto: shared.AtsCreateJobRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsCreateJobResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The job was successfully created.
   */
  createResult?: shared.CreateResult | undefined;
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
export const AtsCreateJobRequest$inboundSchema: z.ZodType<
  AtsCreateJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsCreateJobRequestDto: shared.AtsCreateJobRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsCreateJobRequestDto": "atsCreateJobRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsCreateJobRequest$Outbound = {
  AtsCreateJobRequestDto: shared.AtsCreateJobRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const AtsCreateJobRequest$outboundSchema: z.ZodType<
  AtsCreateJobRequest$Outbound,
  z.ZodTypeDef,
  AtsCreateJobRequest
> = z.object({
  atsCreateJobRequestDto: shared.AtsCreateJobRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsCreateJobRequestDto: "AtsCreateJobRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateJobRequest$ {
  /** @deprecated use `AtsCreateJobRequest$inboundSchema` instead. */
  export const inboundSchema = AtsCreateJobRequest$inboundSchema;
  /** @deprecated use `AtsCreateJobRequest$outboundSchema` instead. */
  export const outboundSchema = AtsCreateJobRequest$outboundSchema;
  /** @deprecated use `AtsCreateJobRequest$Outbound` instead. */
  export type Outbound = AtsCreateJobRequest$Outbound;
}

/** @internal */
export const AtsCreateJobResponse$inboundSchema: z.ZodType<
  AtsCreateJobResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CreateResult: shared.CreateResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CreateResult": "createResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsCreateJobResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsCreateJobResponse$outboundSchema: z.ZodType<
  AtsCreateJobResponse$Outbound,
  z.ZodTypeDef,
  AtsCreateJobResponse
> = z.object({
  contentType: z.string(),
  createResult: shared.CreateResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    createResult: "CreateResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateJobResponse$ {
  /** @deprecated use `AtsCreateJobResponse$inboundSchema` instead. */
  export const inboundSchema = AtsCreateJobResponse$inboundSchema;
  /** @deprecated use `AtsCreateJobResponse$outboundSchema` instead. */
  export const outboundSchema = AtsCreateJobResponse$outboundSchema;
  /** @deprecated use `AtsCreateJobResponse$Outbound` instead. */
  export type Outbound = AtsCreateJobResponse$Outbound;
}