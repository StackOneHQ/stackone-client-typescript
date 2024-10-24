/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type MarketingUpdateContentBlockRequest = {
  marketingCreateContentBlocksRequestDto:
    shared.MarketingCreateContentBlocksRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type MarketingUpdateContentBlockResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * Record updated successfully
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
export const MarketingUpdateContentBlockRequest$inboundSchema: z.ZodType<
  MarketingUpdateContentBlockRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingCreateContentBlocksRequestDto:
    shared.MarketingCreateContentBlocksRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "MarketingCreateContentBlocksRequestDto":
      "marketingCreateContentBlocksRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type MarketingUpdateContentBlockRequest$Outbound = {
  MarketingCreateContentBlocksRequestDto:
    shared.MarketingCreateContentBlocksRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const MarketingUpdateContentBlockRequest$outboundSchema: z.ZodType<
  MarketingUpdateContentBlockRequest$Outbound,
  z.ZodTypeDef,
  MarketingUpdateContentBlockRequest
> = z.object({
  marketingCreateContentBlocksRequestDto:
    shared.MarketingCreateContentBlocksRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    marketingCreateContentBlocksRequestDto:
      "MarketingCreateContentBlocksRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingUpdateContentBlockRequest$ {
  /** @deprecated use `MarketingUpdateContentBlockRequest$inboundSchema` instead. */
  export const inboundSchema = MarketingUpdateContentBlockRequest$inboundSchema;
  /** @deprecated use `MarketingUpdateContentBlockRequest$outboundSchema` instead. */
  export const outboundSchema =
    MarketingUpdateContentBlockRequest$outboundSchema;
  /** @deprecated use `MarketingUpdateContentBlockRequest$Outbound` instead. */
  export type Outbound = MarketingUpdateContentBlockRequest$Outbound;
}

/** @internal */
export const MarketingUpdateContentBlockResponse$inboundSchema: z.ZodType<
  MarketingUpdateContentBlockResponse,
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
export type MarketingUpdateContentBlockResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingUpdateContentBlockResponse$outboundSchema: z.ZodType<
  MarketingUpdateContentBlockResponse$Outbound,
  z.ZodTypeDef,
  MarketingUpdateContentBlockResponse
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
export namespace MarketingUpdateContentBlockResponse$ {
  /** @deprecated use `MarketingUpdateContentBlockResponse$inboundSchema` instead. */
  export const inboundSchema =
    MarketingUpdateContentBlockResponse$inboundSchema;
  /** @deprecated use `MarketingUpdateContentBlockResponse$outboundSchema` instead. */
  export const outboundSchema =
    MarketingUpdateContentBlockResponse$outboundSchema;
  /** @deprecated use `MarketingUpdateContentBlockResponse$Outbound` instead. */
  export type Outbound = MarketingUpdateContentBlockResponse$Outbound;
}
