/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type LmsUpsertContentRequest = {
  lmsUpsertContentRequestDto: shared.LmsUpsertContentRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsUpsertContentResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * HTTP response status code for this operation
   */
  statusCode: number;
  /**
   * Raw HTTP response; suitable for custom response parsing
   */
  rawResponse: Response;
  /**
   * The content was upserted successfully.
   */
  upsertResult?: shared.UpsertResult | undefined;
};

/** @internal */
export const LmsUpsertContentRequest$inboundSchema: z.ZodType<
  LmsUpsertContentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsUpsertContentRequestDto: shared.LmsUpsertContentRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsUpsertContentRequestDto": "lmsUpsertContentRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsUpsertContentRequest$Outbound = {
  LmsUpsertContentRequestDto: shared.LmsUpsertContentRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const LmsUpsertContentRequest$outboundSchema: z.ZodType<
  LmsUpsertContentRequest$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentRequest
> = z.object({
  lmsUpsertContentRequestDto: shared.LmsUpsertContentRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsUpsertContentRequestDto: "LmsUpsertContentRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentRequest$ {
  /** @deprecated use `LmsUpsertContentRequest$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertContentRequest$inboundSchema;
  /** @deprecated use `LmsUpsertContentRequest$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertContentRequest$outboundSchema;
  /** @deprecated use `LmsUpsertContentRequest$Outbound` instead. */
  export type Outbound = LmsUpsertContentRequest$Outbound;
}

export function lmsUpsertContentRequestToJSON(
  lmsUpsertContentRequest: LmsUpsertContentRequest,
): string {
  return JSON.stringify(
    LmsUpsertContentRequest$outboundSchema.parse(lmsUpsertContentRequest),
  );
}

export function lmsUpsertContentRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpsertContentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentRequest' from JSON`,
  );
}

/** @internal */
export const LmsUpsertContentResponse$inboundSchema: z.ZodType<
  LmsUpsertContentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  UpsertResult: shared.UpsertResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "UpsertResult": "upsertResult",
  });
});

/** @internal */
export type LmsUpsertContentResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  UpsertResult?: shared.UpsertResult$Outbound | undefined;
};

/** @internal */
export const LmsUpsertContentResponse$outboundSchema: z.ZodType<
  LmsUpsertContentResponse$Outbound,
  z.ZodTypeDef,
  LmsUpsertContentResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  upsertResult: shared.UpsertResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    upsertResult: "UpsertResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsUpsertContentResponse$ {
  /** @deprecated use `LmsUpsertContentResponse$inboundSchema` instead. */
  export const inboundSchema = LmsUpsertContentResponse$inboundSchema;
  /** @deprecated use `LmsUpsertContentResponse$outboundSchema` instead. */
  export const outboundSchema = LmsUpsertContentResponse$outboundSchema;
  /** @deprecated use `LmsUpsertContentResponse$Outbound` instead. */
  export type Outbound = LmsUpsertContentResponse$Outbound;
}

export function lmsUpsertContentResponseToJSON(
  lmsUpsertContentResponse: LmsUpsertContentResponse,
): string {
  return JSON.stringify(
    LmsUpsertContentResponse$outboundSchema.parse(lmsUpsertContentResponse),
  );
}

export function lmsUpsertContentResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpsertContentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpsertContentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpsertContentResponse' from JSON`,
  );
}
