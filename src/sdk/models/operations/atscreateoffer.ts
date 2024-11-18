/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsCreateOfferRequest = {
  atsCreateOfferRequestDto: shared.AtsCreateOfferRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsCreateOfferResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The offer was created successfully.
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
export const AtsCreateOfferRequest$inboundSchema: z.ZodType<
  AtsCreateOfferRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsCreateOfferRequestDto: shared.AtsCreateOfferRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsCreateOfferRequestDto": "atsCreateOfferRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsCreateOfferRequest$Outbound = {
  AtsCreateOfferRequestDto: shared.AtsCreateOfferRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const AtsCreateOfferRequest$outboundSchema: z.ZodType<
  AtsCreateOfferRequest$Outbound,
  z.ZodTypeDef,
  AtsCreateOfferRequest
> = z.object({
  atsCreateOfferRequestDto: shared.AtsCreateOfferRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsCreateOfferRequestDto: "AtsCreateOfferRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateOfferRequest$ {
  /** @deprecated use `AtsCreateOfferRequest$inboundSchema` instead. */
  export const inboundSchema = AtsCreateOfferRequest$inboundSchema;
  /** @deprecated use `AtsCreateOfferRequest$outboundSchema` instead. */
  export const outboundSchema = AtsCreateOfferRequest$outboundSchema;
  /** @deprecated use `AtsCreateOfferRequest$Outbound` instead. */
  export type Outbound = AtsCreateOfferRequest$Outbound;
}

export function atsCreateOfferRequestToJSON(
  atsCreateOfferRequest: AtsCreateOfferRequest,
): string {
  return JSON.stringify(
    AtsCreateOfferRequest$outboundSchema.parse(atsCreateOfferRequest),
  );
}

export function atsCreateOfferRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsCreateOfferRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsCreateOfferRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsCreateOfferRequest' from JSON`,
  );
}

/** @internal */
export const AtsCreateOfferResponse$inboundSchema: z.ZodType<
  AtsCreateOfferResponse,
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
export type AtsCreateOfferResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsCreateOfferResponse$outboundSchema: z.ZodType<
  AtsCreateOfferResponse$Outbound,
  z.ZodTypeDef,
  AtsCreateOfferResponse
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
export namespace AtsCreateOfferResponse$ {
  /** @deprecated use `AtsCreateOfferResponse$inboundSchema` instead. */
  export const inboundSchema = AtsCreateOfferResponse$inboundSchema;
  /** @deprecated use `AtsCreateOfferResponse$outboundSchema` instead. */
  export const outboundSchema = AtsCreateOfferResponse$outboundSchema;
  /** @deprecated use `AtsCreateOfferResponse$Outbound` instead. */
  export type Outbound = AtsCreateOfferResponse$Outbound;
}

export function atsCreateOfferResponseToJSON(
  atsCreateOfferResponse: AtsCreateOfferResponse,
): string {
  return JSON.stringify(
    AtsCreateOfferResponse$outboundSchema.parse(atsCreateOfferResponse),
  );
}

export function atsCreateOfferResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsCreateOfferResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsCreateOfferResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsCreateOfferResponse' from JSON`,
  );
}
