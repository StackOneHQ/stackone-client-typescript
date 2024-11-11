/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type MarketingGetInAppTemplateRequest = {
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
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type MarketingGetInAppTemplateResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The in-app template with the given identifier was retrieved.
   */
  inAppTemplateResult?: shared.InAppTemplateResult | undefined;
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
export const MarketingGetInAppTemplateRequest$inboundSchema: z.ZodType<
  MarketingGetInAppTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type MarketingGetInAppTemplateRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const MarketingGetInAppTemplateRequest$outboundSchema: z.ZodType<
  MarketingGetInAppTemplateRequest$Outbound,
  z.ZodTypeDef,
  MarketingGetInAppTemplateRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
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
export namespace MarketingGetInAppTemplateRequest$ {
  /** @deprecated use `MarketingGetInAppTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = MarketingGetInAppTemplateRequest$inboundSchema;
  /** @deprecated use `MarketingGetInAppTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = MarketingGetInAppTemplateRequest$outboundSchema;
  /** @deprecated use `MarketingGetInAppTemplateRequest$Outbound` instead. */
  export type Outbound = MarketingGetInAppTemplateRequest$Outbound;
}

/** @internal */
export const MarketingGetInAppTemplateResponse$inboundSchema: z.ZodType<
  MarketingGetInAppTemplateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  InAppTemplateResult: shared.InAppTemplateResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "InAppTemplateResult": "inAppTemplateResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type MarketingGetInAppTemplateResponse$Outbound = {
  ContentType: string;
  InAppTemplateResult?: shared.InAppTemplateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingGetInAppTemplateResponse$outboundSchema: z.ZodType<
  MarketingGetInAppTemplateResponse$Outbound,
  z.ZodTypeDef,
  MarketingGetInAppTemplateResponse
> = z.object({
  contentType: z.string(),
  inAppTemplateResult: shared.InAppTemplateResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    inAppTemplateResult: "InAppTemplateResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingGetInAppTemplateResponse$ {
  /** @deprecated use `MarketingGetInAppTemplateResponse$inboundSchema` instead. */
  export const inboundSchema = MarketingGetInAppTemplateResponse$inboundSchema;
  /** @deprecated use `MarketingGetInAppTemplateResponse$outboundSchema` instead. */
  export const outboundSchema =
    MarketingGetInAppTemplateResponse$outboundSchema;
  /** @deprecated use `MarketingGetInAppTemplateResponse$Outbound` instead. */
  export type Outbound = MarketingGetInAppTemplateResponse$Outbound;
}
