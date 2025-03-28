/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsCreateApplicationRequest = {
  atsCreateApplicationRequestDto: shared.AtsCreateApplicationRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsCreateApplicationResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The application was created successfully.
   */
  createResult?: shared.CreateResult | undefined;
  headers: { [k: string]: Array<string> };
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
export const AtsCreateApplicationRequest$inboundSchema: z.ZodType<
  AtsCreateApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsCreateApplicationRequestDto:
    shared.AtsCreateApplicationRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsCreateApplicationRequestDto": "atsCreateApplicationRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsCreateApplicationRequest$Outbound = {
  AtsCreateApplicationRequestDto:
    shared.AtsCreateApplicationRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const AtsCreateApplicationRequest$outboundSchema: z.ZodType<
  AtsCreateApplicationRequest$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationRequest
> = z.object({
  atsCreateApplicationRequestDto:
    shared.AtsCreateApplicationRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsCreateApplicationRequestDto: "AtsCreateApplicationRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationRequest$ {
  /** @deprecated use `AtsCreateApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = AtsCreateApplicationRequest$inboundSchema;
  /** @deprecated use `AtsCreateApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = AtsCreateApplicationRequest$outboundSchema;
  /** @deprecated use `AtsCreateApplicationRequest$Outbound` instead. */
  export type Outbound = AtsCreateApplicationRequest$Outbound;
}

export function atsCreateApplicationRequestToJSON(
  atsCreateApplicationRequest: AtsCreateApplicationRequest,
): string {
  return JSON.stringify(
    AtsCreateApplicationRequest$outboundSchema.parse(
      atsCreateApplicationRequest,
    ),
  );
}

export function atsCreateApplicationRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsCreateApplicationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsCreateApplicationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsCreateApplicationRequest' from JSON`,
  );
}

/** @internal */
export const AtsCreateApplicationResponse$inboundSchema: z.ZodType<
  AtsCreateApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CreateResult: shared.CreateResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CreateResult": "createResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsCreateApplicationResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsCreateApplicationResponse$outboundSchema: z.ZodType<
  AtsCreateApplicationResponse$Outbound,
  z.ZodTypeDef,
  AtsCreateApplicationResponse
> = z.object({
  contentType: z.string(),
  createResult: shared.CreateResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    createResult: "CreateResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsCreateApplicationResponse$ {
  /** @deprecated use `AtsCreateApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = AtsCreateApplicationResponse$inboundSchema;
  /** @deprecated use `AtsCreateApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = AtsCreateApplicationResponse$outboundSchema;
  /** @deprecated use `AtsCreateApplicationResponse$Outbound` instead. */
  export type Outbound = AtsCreateApplicationResponse$Outbound;
}

export function atsCreateApplicationResponseToJSON(
  atsCreateApplicationResponse: AtsCreateApplicationResponse,
): string {
  return JSON.stringify(
    AtsCreateApplicationResponse$outboundSchema.parse(
      atsCreateApplicationResponse,
    ),
  );
}

export function atsCreateApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsCreateApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsCreateApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsCreateApplicationResponse' from JSON`,
  );
}
