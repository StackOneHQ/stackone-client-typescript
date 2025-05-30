/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisUpdateEmployeeRequest = {
  hrisUpdateEmployeeRequestDto: shared.HrisUpdateEmployeeRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisUpdateEmployeeResponse = {
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
   * Record updated successfully
   */
  updateResult?: shared.UpdateResult | undefined;
};

/** @internal */
export const HrisUpdateEmployeeRequest$inboundSchema: z.ZodType<
  HrisUpdateEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisUpdateEmployeeRequestDto:
    shared.HrisUpdateEmployeeRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisUpdateEmployeeRequestDto": "hrisUpdateEmployeeRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisUpdateEmployeeRequest$Outbound = {
  HrisUpdateEmployeeRequestDto: shared.HrisUpdateEmployeeRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const HrisUpdateEmployeeRequest$outboundSchema: z.ZodType<
  HrisUpdateEmployeeRequest$Outbound,
  z.ZodTypeDef,
  HrisUpdateEmployeeRequest
> = z.object({
  hrisUpdateEmployeeRequestDto:
    shared.HrisUpdateEmployeeRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisUpdateEmployeeRequestDto: "HrisUpdateEmployeeRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeRequest$ {
  /** @deprecated use `HrisUpdateEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = HrisUpdateEmployeeRequest$inboundSchema;
  /** @deprecated use `HrisUpdateEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = HrisUpdateEmployeeRequest$outboundSchema;
  /** @deprecated use `HrisUpdateEmployeeRequest$Outbound` instead. */
  export type Outbound = HrisUpdateEmployeeRequest$Outbound;
}

export function hrisUpdateEmployeeRequestToJSON(
  hrisUpdateEmployeeRequest: HrisUpdateEmployeeRequest,
): string {
  return JSON.stringify(
    HrisUpdateEmployeeRequest$outboundSchema.parse(hrisUpdateEmployeeRequest),
  );
}

export function hrisUpdateEmployeeRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisUpdateEmployeeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisUpdateEmployeeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisUpdateEmployeeRequest' from JSON`,
  );
}

/** @internal */
export const HrisUpdateEmployeeResponse$inboundSchema: z.ZodType<
  HrisUpdateEmployeeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  UpdateResult: shared.UpdateResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "UpdateResult": "updateResult",
  });
});

/** @internal */
export type HrisUpdateEmployeeResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  UpdateResult?: shared.UpdateResult$Outbound | undefined;
};

/** @internal */
export const HrisUpdateEmployeeResponse$outboundSchema: z.ZodType<
  HrisUpdateEmployeeResponse$Outbound,
  z.ZodTypeDef,
  HrisUpdateEmployeeResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  updateResult: shared.UpdateResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    updateResult: "UpdateResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisUpdateEmployeeResponse$ {
  /** @deprecated use `HrisUpdateEmployeeResponse$inboundSchema` instead. */
  export const inboundSchema = HrisUpdateEmployeeResponse$inboundSchema;
  /** @deprecated use `HrisUpdateEmployeeResponse$outboundSchema` instead. */
  export const outboundSchema = HrisUpdateEmployeeResponse$outboundSchema;
  /** @deprecated use `HrisUpdateEmployeeResponse$Outbound` instead. */
  export type Outbound = HrisUpdateEmployeeResponse$Outbound;
}

export function hrisUpdateEmployeeResponseToJSON(
  hrisUpdateEmployeeResponse: HrisUpdateEmployeeResponse,
): string {
  return JSON.stringify(
    HrisUpdateEmployeeResponse$outboundSchema.parse(hrisUpdateEmployeeResponse),
  );
}

export function hrisUpdateEmployeeResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisUpdateEmployeeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisUpdateEmployeeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisUpdateEmployeeResponse' from JSON`,
  );
}
