/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type LmsUpdateCollectionRequest = {
  lmsCreateCollectionRequestDto: shared.LmsCreateCollectionRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type LmsUpdateCollectionResponse = {
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
   * The collection was updated successfully.
   */
  updateResult?: shared.UpdateResult | undefined;
};

/** @internal */
export const LmsUpdateCollectionRequest$inboundSchema: z.ZodType<
  LmsUpdateCollectionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  LmsCreateCollectionRequestDto:
    shared.LmsCreateCollectionRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "LmsCreateCollectionRequestDto": "lmsCreateCollectionRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type LmsUpdateCollectionRequest$Outbound = {
  LmsCreateCollectionRequestDto: shared.LmsCreateCollectionRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const LmsUpdateCollectionRequest$outboundSchema: z.ZodType<
  LmsUpdateCollectionRequest$Outbound,
  z.ZodTypeDef,
  LmsUpdateCollectionRequest
> = z.object({
  lmsCreateCollectionRequestDto:
    shared.LmsCreateCollectionRequestDto$outboundSchema,
  id: z.string(),
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
export namespace LmsUpdateCollectionRequest$ {
  /** @deprecated use `LmsUpdateCollectionRequest$inboundSchema` instead. */
  export const inboundSchema = LmsUpdateCollectionRequest$inboundSchema;
  /** @deprecated use `LmsUpdateCollectionRequest$outboundSchema` instead. */
  export const outboundSchema = LmsUpdateCollectionRequest$outboundSchema;
  /** @deprecated use `LmsUpdateCollectionRequest$Outbound` instead. */
  export type Outbound = LmsUpdateCollectionRequest$Outbound;
}

export function lmsUpdateCollectionRequestToJSON(
  lmsUpdateCollectionRequest: LmsUpdateCollectionRequest,
): string {
  return JSON.stringify(
    LmsUpdateCollectionRequest$outboundSchema.parse(lmsUpdateCollectionRequest),
  );
}

export function lmsUpdateCollectionRequestFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpdateCollectionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpdateCollectionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpdateCollectionRequest' from JSON`,
  );
}

/** @internal */
export const LmsUpdateCollectionResponse$inboundSchema: z.ZodType<
  LmsUpdateCollectionResponse,
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
export type LmsUpdateCollectionResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  UpdateResult?: shared.UpdateResult$Outbound | undefined;
};

/** @internal */
export const LmsUpdateCollectionResponse$outboundSchema: z.ZodType<
  LmsUpdateCollectionResponse$Outbound,
  z.ZodTypeDef,
  LmsUpdateCollectionResponse
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
export namespace LmsUpdateCollectionResponse$ {
  /** @deprecated use `LmsUpdateCollectionResponse$inboundSchema` instead. */
  export const inboundSchema = LmsUpdateCollectionResponse$inboundSchema;
  /** @deprecated use `LmsUpdateCollectionResponse$outboundSchema` instead. */
  export const outboundSchema = LmsUpdateCollectionResponse$outboundSchema;
  /** @deprecated use `LmsUpdateCollectionResponse$Outbound` instead. */
  export type Outbound = LmsUpdateCollectionResponse$Outbound;
}

export function lmsUpdateCollectionResponseToJSON(
  lmsUpdateCollectionResponse: LmsUpdateCollectionResponse,
): string {
  return JSON.stringify(
    LmsUpdateCollectionResponse$outboundSchema.parse(
      lmsUpdateCollectionResponse,
    ),
  );
}

export function lmsUpdateCollectionResponseFromJSON(
  jsonString: string,
): SafeParseResult<LmsUpdateCollectionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LmsUpdateCollectionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LmsUpdateCollectionResponse' from JSON`,
  );
}
