/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsRejectApplicationRequest = {
  atsRejectApplicationRequestDto: shared.AtsRejectApplicationRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsRejectApplicationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The application was rejected successfully.
   */
  rejectApplicationResult?: shared.RejectApplicationResult | undefined;
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
export const AtsRejectApplicationRequest$inboundSchema: z.ZodType<
  AtsRejectApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsRejectApplicationRequestDto:
    shared.AtsRejectApplicationRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsRejectApplicationRequestDto": "atsRejectApplicationRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsRejectApplicationRequest$Outbound = {
  AtsRejectApplicationRequestDto:
    shared.AtsRejectApplicationRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const AtsRejectApplicationRequest$outboundSchema: z.ZodType<
  AtsRejectApplicationRequest$Outbound,
  z.ZodTypeDef,
  AtsRejectApplicationRequest
> = z.object({
  atsRejectApplicationRequestDto:
    shared.AtsRejectApplicationRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsRejectApplicationRequestDto: "AtsRejectApplicationRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsRejectApplicationRequest$ {
  /** @deprecated use `AtsRejectApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = AtsRejectApplicationRequest$inboundSchema;
  /** @deprecated use `AtsRejectApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = AtsRejectApplicationRequest$outboundSchema;
  /** @deprecated use `AtsRejectApplicationRequest$Outbound` instead. */
  export type Outbound = AtsRejectApplicationRequest$Outbound;
}

/** @internal */
export const AtsRejectApplicationResponse$inboundSchema: z.ZodType<
  AtsRejectApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  RejectApplicationResult: shared.RejectApplicationResult$inboundSchema
    .optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "RejectApplicationResult": "rejectApplicationResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsRejectApplicationResponse$Outbound = {
  ContentType: string;
  RejectApplicationResult?: shared.RejectApplicationResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsRejectApplicationResponse$outboundSchema: z.ZodType<
  AtsRejectApplicationResponse$Outbound,
  z.ZodTypeDef,
  AtsRejectApplicationResponse
> = z.object({
  contentType: z.string(),
  rejectApplicationResult: shared.RejectApplicationResult$outboundSchema
    .optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    rejectApplicationResult: "RejectApplicationResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsRejectApplicationResponse$ {
  /** @deprecated use `AtsRejectApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = AtsRejectApplicationResponse$inboundSchema;
  /** @deprecated use `AtsRejectApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = AtsRejectApplicationResponse$outboundSchema;
  /** @deprecated use `AtsRejectApplicationResponse$Outbound` instead. */
  export type Outbound = AtsRejectApplicationResponse$Outbound;
}
