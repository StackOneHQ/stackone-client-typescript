/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type LmsCreateCollectionRequest = {
  lmsCreateCollectionRequestDto: shared.LmsCreateCollectionRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsCreateCollectionResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The collection was created successfully.
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
export const LmsCreateCollectionRequest$inboundSchema: z.ZodType<
  LmsCreateCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsCreateCollectionRequestDto:
    shared.LmsCreateCollectionRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsCreateCollectionRequestDto": "lmsCreateCollectionRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsCreateCollectionRequest$Outbound = {
  LmsCreateCollectionRequestDto: shared.LmsCreateCollectionRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const LmsCreateCollectionRequest$outboundSchema: z.ZodType<
  LmsCreateCollectionRequest$Outbound,
  z.ZodTypeDef,
  LmsCreateCollectionRequest
> = z.object({
  lmsCreateCollectionRequestDto:
    shared.LmsCreateCollectionRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    lmsCreateCollectionRequestDto: "LmsCreateCollectionRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LmsCreateCollectionRequest$ {
  /** @deprecated use `LmsCreateCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = LmsCreateCollectionRequest$inboundSchema;
  /** @deprecated use `LmsCreateCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = LmsCreateCollectionRequest$outboundSchema;
  /** @deprecated use `LmsCreateCollectionRequest$Outbound` instead. */
  export type Outbound = LmsCreateCollectionRequest$Outbound;
}

export function lmsCreateCollectionRequestToJSON(
  lmsCreateCollectionRequest: LmsCreateCollectionRequest,
): string {
  return JSON.stringify(
    LmsCreateCollectionRequest$outboundSchema.parse(lmsCreateCollectionRequest),
  );
}

export function lmsCreateCollectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateCollectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateCollectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateCollectionRequest' from JSON`,
  );
}

/** @internal */
export const LmsCreateCollectionResponse$inboundSchema: z.ZodType<
  LmsCreateCollectionResponse,
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
export type LmsCreateCollectionResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const LmsCreateCollectionResponse$outboundSchema: z.ZodType<
  LmsCreateCollectionResponse$Outbound,
  z.ZodTypeDef,
  LmsCreateCollectionResponse
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
export namespace LmsCreateCollectionResponse$ {
  /** @deprecated use `LmsCreateCollectionResponse$inboundSchema` instead. */
  export const inboundSchema = LmsCreateCollectionResponse$inboundSchema;
  /** @deprecated use `LmsCreateCollectionResponse$outboundSchema` instead. */
  export const outboundSchema = LmsCreateCollectionResponse$outboundSchema;
  /** @deprecated use `LmsCreateCollectionResponse$Outbound` instead. */
  export type Outbound = LmsCreateCollectionResponse$Outbound;
}

export function lmsCreateCollectionResponseToJSON(
  lmsCreateCollectionResponse: LmsCreateCollectionResponse,
): string {
  return JSON.stringify(
    LmsCreateCollectionResponse$outboundSchema.parse(
      lmsCreateCollectionResponse,
    ),
  );
}

export function lmsCreateCollectionResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsCreateCollectionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsCreateCollectionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsCreateCollectionResponse' from JSON`,
  );
}
