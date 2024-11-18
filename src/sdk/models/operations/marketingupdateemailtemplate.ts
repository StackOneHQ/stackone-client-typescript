/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type MarketingUpdateEmailTemplateRequest = {
  marketingCreateEmailTemplateRequestDto:
    shared.MarketingCreateEmailTemplateRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type MarketingUpdateEmailTemplateResponse = {
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
export const MarketingUpdateEmailTemplateRequest$inboundSchema: z.ZodType<
  MarketingUpdateEmailTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  MarketingCreateEmailTemplateRequestDto:
    shared.MarketingCreateEmailTemplateRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "MarketingCreateEmailTemplateRequestDto":
      "marketingCreateEmailTemplateRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type MarketingUpdateEmailTemplateRequest$Outbound = {
  MarketingCreateEmailTemplateRequestDto:
    shared.MarketingCreateEmailTemplateRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const MarketingUpdateEmailTemplateRequest$outboundSchema: z.ZodType<
  MarketingUpdateEmailTemplateRequest$Outbound,
  z.ZodTypeDef,
  MarketingUpdateEmailTemplateRequest
> = z.object({
  marketingCreateEmailTemplateRequestDto:
    shared.MarketingCreateEmailTemplateRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    marketingCreateEmailTemplateRequestDto:
      "MarketingCreateEmailTemplateRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingUpdateEmailTemplateRequest$ {
  /** @deprecated use `MarketingUpdateEmailTemplateRequest$inboundSchema` instead. */
  export const inboundSchema =
    MarketingUpdateEmailTemplateRequest$inboundSchema;
  /** @deprecated use `MarketingUpdateEmailTemplateRequest$outboundSchema` instead. */
  export const outboundSchema =
    MarketingUpdateEmailTemplateRequest$outboundSchema;
  /** @deprecated use `MarketingUpdateEmailTemplateRequest$Outbound` instead. */
  export type Outbound = MarketingUpdateEmailTemplateRequest$Outbound;
}

export function marketingUpdateEmailTemplateRequestToJSON(
  marketingUpdateEmailTemplateRequest: MarketingUpdateEmailTemplateRequest,
): string {
  return JSON.stringify(
    MarketingUpdateEmailTemplateRequest$outboundSchema.parse(
      marketingUpdateEmailTemplateRequest,
    ),
  );
}

export function marketingUpdateEmailTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<MarketingUpdateEmailTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MarketingUpdateEmailTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingUpdateEmailTemplateRequest' from JSON`,
  );
}

/** @internal */
export const MarketingUpdateEmailTemplateResponse$inboundSchema: z.ZodType<
  MarketingUpdateEmailTemplateResponse,
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
export type MarketingUpdateEmailTemplateResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingUpdateEmailTemplateResponse$outboundSchema: z.ZodType<
  MarketingUpdateEmailTemplateResponse$Outbound,
  z.ZodTypeDef,
  MarketingUpdateEmailTemplateResponse
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
export namespace MarketingUpdateEmailTemplateResponse$ {
  /** @deprecated use `MarketingUpdateEmailTemplateResponse$inboundSchema` instead. */
  export const inboundSchema =
    MarketingUpdateEmailTemplateResponse$inboundSchema;
  /** @deprecated use `MarketingUpdateEmailTemplateResponse$outboundSchema` instead. */
  export const outboundSchema =
    MarketingUpdateEmailTemplateResponse$outboundSchema;
  /** @deprecated use `MarketingUpdateEmailTemplateResponse$Outbound` instead. */
  export type Outbound = MarketingUpdateEmailTemplateResponse$Outbound;
}

export function marketingUpdateEmailTemplateResponseToJSON(
  marketingUpdateEmailTemplateResponse: MarketingUpdateEmailTemplateResponse,
): string {
  return JSON.stringify(
    MarketingUpdateEmailTemplateResponse$outboundSchema.parse(
      marketingUpdateEmailTemplateResponse,
    ),
  );
}

export function marketingUpdateEmailTemplateResponseFromJSON(
  jsonString: string,
): SafeParseResult<MarketingUpdateEmailTemplateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      MarketingUpdateEmailTemplateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingUpdateEmailTemplateResponse' from JSON`,
  );
}
