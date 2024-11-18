/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisCreateTimeOffRequestRequest = {
  hrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisCreateTimeOffRequestResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The time off request was created successfully.
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
export const HrisCreateTimeOffRequestRequest$inboundSchema: z.ZodType<
  HrisCreateTimeOffRequestRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisCreateTimeOffRequestDto": "hrisCreateTimeOffRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisCreateTimeOffRequestRequest$Outbound = {
  HrisCreateTimeOffRequestDto: shared.HrisCreateTimeOffRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const HrisCreateTimeOffRequestRequest$outboundSchema: z.ZodType<
  HrisCreateTimeOffRequestRequest$Outbound,
  z.ZodTypeDef,
  HrisCreateTimeOffRequestRequest
> = z.object({
  hrisCreateTimeOffRequestDto:
    shared.HrisCreateTimeOffRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisCreateTimeOffRequestDto: "HrisCreateTimeOffRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCreateTimeOffRequestRequest$ {
  /** @deprecated use `HrisCreateTimeOffRequestRequest$inboundSchema` instead. */
  export const inboundSchema = HrisCreateTimeOffRequestRequest$inboundSchema;
  /** @deprecated use `HrisCreateTimeOffRequestRequest$outboundSchema` instead. */
  export const outboundSchema = HrisCreateTimeOffRequestRequest$outboundSchema;
  /** @deprecated use `HrisCreateTimeOffRequestRequest$Outbound` instead. */
  export type Outbound = HrisCreateTimeOffRequestRequest$Outbound;
}

export function hrisCreateTimeOffRequestRequestToJSON(
  hrisCreateTimeOffRequestRequest: HrisCreateTimeOffRequestRequest,
): string {
  return JSON.stringify(
    HrisCreateTimeOffRequestRequest$outboundSchema.parse(
      hrisCreateTimeOffRequestRequest,
    ),
  );
}

export function hrisCreateTimeOffRequestRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisCreateTimeOffRequestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisCreateTimeOffRequestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCreateTimeOffRequestRequest' from JSON`,
  );
}

/** @internal */
export const HrisCreateTimeOffRequestResponse$inboundSchema: z.ZodType<
  HrisCreateTimeOffRequestResponse,
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
export type HrisCreateTimeOffRequestResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisCreateTimeOffRequestResponse$outboundSchema: z.ZodType<
  HrisCreateTimeOffRequestResponse$Outbound,
  z.ZodTypeDef,
  HrisCreateTimeOffRequestResponse
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
export namespace HrisCreateTimeOffRequestResponse$ {
  /** @deprecated use `HrisCreateTimeOffRequestResponse$inboundSchema` instead. */
  export const inboundSchema = HrisCreateTimeOffRequestResponse$inboundSchema;
  /** @deprecated use `HrisCreateTimeOffRequestResponse$outboundSchema` instead. */
  export const outboundSchema = HrisCreateTimeOffRequestResponse$outboundSchema;
  /** @deprecated use `HrisCreateTimeOffRequestResponse$Outbound` instead. */
  export type Outbound = HrisCreateTimeOffRequestResponse$Outbound;
}

export function hrisCreateTimeOffRequestResponseToJSON(
  hrisCreateTimeOffRequestResponse: HrisCreateTimeOffRequestResponse,
): string {
  return JSON.stringify(
    HrisCreateTimeOffRequestResponse$outboundSchema.parse(
      hrisCreateTimeOffRequestResponse,
    ),
  );
}

export function hrisCreateTimeOffRequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisCreateTimeOffRequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisCreateTimeOffRequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisCreateTimeOffRequestResponse' from JSON`,
  );
}
