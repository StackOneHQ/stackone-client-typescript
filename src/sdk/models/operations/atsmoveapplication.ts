/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type AtsMoveApplicationRequest = {
  atsMoveApplicationRequestDto: shared.AtsMoveApplicationRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsMoveApplicationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The application was moved successfully.
   */
  moveApplicationResult?: shared.MoveApplicationResult | undefined;
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
export const AtsMoveApplicationRequest$inboundSchema: z.ZodType<
  AtsMoveApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsMoveApplicationRequestDto:
    shared.AtsMoveApplicationRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsMoveApplicationRequestDto": "atsMoveApplicationRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsMoveApplicationRequest$Outbound = {
  AtsMoveApplicationRequestDto: shared.AtsMoveApplicationRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const AtsMoveApplicationRequest$outboundSchema: z.ZodType<
  AtsMoveApplicationRequest$Outbound,
  z.ZodTypeDef,
  AtsMoveApplicationRequest
> = z.object({
  atsMoveApplicationRequestDto:
    shared.AtsMoveApplicationRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsMoveApplicationRequestDto: "AtsMoveApplicationRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsMoveApplicationRequest$ {
  /** @deprecated use `AtsMoveApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = AtsMoveApplicationRequest$inboundSchema;
  /** @deprecated use `AtsMoveApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = AtsMoveApplicationRequest$outboundSchema;
  /** @deprecated use `AtsMoveApplicationRequest$Outbound` instead. */
  export type Outbound = AtsMoveApplicationRequest$Outbound;
}

/** @internal */
export const AtsMoveApplicationResponse$inboundSchema: z.ZodType<
  AtsMoveApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  MoveApplicationResult: shared.MoveApplicationResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "MoveApplicationResult": "moveApplicationResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsMoveApplicationResponse$Outbound = {
  ContentType: string;
  MoveApplicationResult?: shared.MoveApplicationResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsMoveApplicationResponse$outboundSchema: z.ZodType<
  AtsMoveApplicationResponse$Outbound,
  z.ZodTypeDef,
  AtsMoveApplicationResponse
> = z.object({
  contentType: z.string(),
  moveApplicationResult: shared.MoveApplicationResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    moveApplicationResult: "MoveApplicationResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsMoveApplicationResponse$ {
  /** @deprecated use `AtsMoveApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = AtsMoveApplicationResponse$inboundSchema;
  /** @deprecated use `AtsMoveApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = AtsMoveApplicationResponse$outboundSchema;
  /** @deprecated use `AtsMoveApplicationResponse$Outbound` instead. */
  export type Outbound = AtsMoveApplicationResponse$Outbound;
}