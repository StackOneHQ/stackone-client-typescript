/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type MarketingGetSmsTemplateRequest = {
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
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type MarketingGetSmsTemplateResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The SMS template with the given identifier was retrieved.
   */
  smsTemplateResult?: shared.SmsTemplateResult | undefined;
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
export const MarketingGetSmsTemplateRequest$inboundSchema: z.ZodType<
  MarketingGetSmsTemplateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type MarketingGetSmsTemplateRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const MarketingGetSmsTemplateRequest$outboundSchema: z.ZodType<
  MarketingGetSmsTemplateRequest$Outbound,
  z.ZodTypeDef,
  MarketingGetSmsTemplateRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace MarketingGetSmsTemplateRequest$ {
  /** @deprecated use `MarketingGetSmsTemplateRequest$inboundSchema` instead. */
  export const inboundSchema = MarketingGetSmsTemplateRequest$inboundSchema;
  /** @deprecated use `MarketingGetSmsTemplateRequest$outboundSchema` instead. */
  export const outboundSchema = MarketingGetSmsTemplateRequest$outboundSchema;
  /** @deprecated use `MarketingGetSmsTemplateRequest$Outbound` instead. */
  export type Outbound = MarketingGetSmsTemplateRequest$Outbound;
}

export function marketingGetSmsTemplateRequestToJSON(
  marketingGetSmsTemplateRequest: MarketingGetSmsTemplateRequest,
): string {
  return JSON.stringify(
    MarketingGetSmsTemplateRequest$outboundSchema.parse(
      marketingGetSmsTemplateRequest,
    ),
  );
}

export function marketingGetSmsTemplateRequestFromJSON(
  jsonString: string,
): SafeParseResult<MarketingGetSmsTemplateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MarketingGetSmsTemplateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingGetSmsTemplateRequest' from JSON`,
  );
}

/** @internal */
export const MarketingGetSmsTemplateResponse$inboundSchema: z.ZodType<
  MarketingGetSmsTemplateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  SmsTemplateResult: shared.SmsTemplateResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "SmsTemplateResult": "smsTemplateResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type MarketingGetSmsTemplateResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  SmsTemplateResult?: shared.SmsTemplateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingGetSmsTemplateResponse$outboundSchema: z.ZodType<
  MarketingGetSmsTemplateResponse$Outbound,
  z.ZodTypeDef,
  MarketingGetSmsTemplateResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  smsTemplateResult: shared.SmsTemplateResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    smsTemplateResult: "SmsTemplateResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingGetSmsTemplateResponse$ {
  /** @deprecated use `MarketingGetSmsTemplateResponse$inboundSchema` instead. */
  export const inboundSchema = MarketingGetSmsTemplateResponse$inboundSchema;
  /** @deprecated use `MarketingGetSmsTemplateResponse$outboundSchema` instead. */
  export const outboundSchema = MarketingGetSmsTemplateResponse$outboundSchema;
  /** @deprecated use `MarketingGetSmsTemplateResponse$Outbound` instead. */
  export type Outbound = MarketingGetSmsTemplateResponse$Outbound;
}

export function marketingGetSmsTemplateResponseToJSON(
  marketingGetSmsTemplateResponse: MarketingGetSmsTemplateResponse,
): string {
  return JSON.stringify(
    MarketingGetSmsTemplateResponse$outboundSchema.parse(
      marketingGetSmsTemplateResponse,
    ),
  );
}

export function marketingGetSmsTemplateResponseFromJSON(
  jsonString: string,
): SafeParseResult<MarketingGetSmsTemplateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MarketingGetSmsTemplateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingGetSmsTemplateResponse' from JSON`,
  );
}
