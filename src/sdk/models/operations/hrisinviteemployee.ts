/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisInviteEmployeeRequest = {
  hrisInviteEmployeeRequestDto: shared.HrisInviteEmployeeRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisInviteEmployeeResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * Record invited successfully
   */
  inviteEmployeeResult?: shared.InviteEmployeeResult | undefined;
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
export const HrisInviteEmployeeRequest$inboundSchema: z.ZodType<
  HrisInviteEmployeeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  HrisInviteEmployeeRequestDto:
    shared.HrisInviteEmployeeRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "HrisInviteEmployeeRequestDto": "hrisInviteEmployeeRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisInviteEmployeeRequest$Outbound = {
  HrisInviteEmployeeRequestDto: shared.HrisInviteEmployeeRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const HrisInviteEmployeeRequest$outboundSchema: z.ZodType<
  HrisInviteEmployeeRequest$Outbound,
  z.ZodTypeDef,
  HrisInviteEmployeeRequest
> = z.object({
  hrisInviteEmployeeRequestDto:
    shared.HrisInviteEmployeeRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    hrisInviteEmployeeRequestDto: "HrisInviteEmployeeRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisInviteEmployeeRequest$ {
  /** @deprecated use `HrisInviteEmployeeRequest$inboundSchema` instead. */
  export const inboundSchema = HrisInviteEmployeeRequest$inboundSchema;
  /** @deprecated use `HrisInviteEmployeeRequest$outboundSchema` instead. */
  export const outboundSchema = HrisInviteEmployeeRequest$outboundSchema;
  /** @deprecated use `HrisInviteEmployeeRequest$Outbound` instead. */
  export type Outbound = HrisInviteEmployeeRequest$Outbound;
}

export function hrisInviteEmployeeRequestToJSON(
  hrisInviteEmployeeRequest: HrisInviteEmployeeRequest,
): string {
  return JSON.stringify(
    HrisInviteEmployeeRequest$outboundSchema.parse(hrisInviteEmployeeRequest),
  );
}

export function hrisInviteEmployeeRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisInviteEmployeeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisInviteEmployeeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisInviteEmployeeRequest' from JSON`,
  );
}

/** @internal */
export const HrisInviteEmployeeResponse$inboundSchema: z.ZodType<
  HrisInviteEmployeeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  InviteEmployeeResult: shared.InviteEmployeeResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "InviteEmployeeResult": "inviteEmployeeResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisInviteEmployeeResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  InviteEmployeeResult?: shared.InviteEmployeeResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisInviteEmployeeResponse$outboundSchema: z.ZodType<
  HrisInviteEmployeeResponse$Outbound,
  z.ZodTypeDef,
  HrisInviteEmployeeResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  inviteEmployeeResult: shared.InviteEmployeeResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    inviteEmployeeResult: "InviteEmployeeResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisInviteEmployeeResponse$ {
  /** @deprecated use `HrisInviteEmployeeResponse$inboundSchema` instead. */
  export const inboundSchema = HrisInviteEmployeeResponse$inboundSchema;
  /** @deprecated use `HrisInviteEmployeeResponse$outboundSchema` instead. */
  export const outboundSchema = HrisInviteEmployeeResponse$outboundSchema;
  /** @deprecated use `HrisInviteEmployeeResponse$Outbound` instead. */
  export type Outbound = HrisInviteEmployeeResponse$Outbound;
}

export function hrisInviteEmployeeResponseToJSON(
  hrisInviteEmployeeResponse: HrisInviteEmployeeResponse,
): string {
  return JSON.stringify(
    HrisInviteEmployeeResponse$outboundSchema.parse(hrisInviteEmployeeResponse),
  );
}

export function hrisInviteEmployeeResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisInviteEmployeeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisInviteEmployeeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisInviteEmployeeResponse' from JSON`,
  );
}
