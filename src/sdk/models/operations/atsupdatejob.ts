/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsUpdateJobRequest = {
  atsUpdateJobRequestDto: shared.AtsUpdateJobRequestDto;
  id: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsUpdateJobResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The job was successfully updated.
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
export const AtsUpdateJobRequest$inboundSchema: z.ZodType<
  AtsUpdateJobRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  AtsUpdateJobRequestDto: shared.AtsUpdateJobRequestDto$inboundSchema,
  id: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "AtsUpdateJobRequestDto": "atsUpdateJobRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsUpdateJobRequest$Outbound = {
  AtsUpdateJobRequestDto: shared.AtsUpdateJobRequestDto$Outbound;
  id: string;
  "x-account-id": string;
};

/** @internal */
export const AtsUpdateJobRequest$outboundSchema: z.ZodType<
  AtsUpdateJobRequest$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobRequest
> = z.object({
  atsUpdateJobRequestDto: shared.AtsUpdateJobRequestDto$outboundSchema,
  id: z.string(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    atsUpdateJobRequestDto: "AtsUpdateJobRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsUpdateJobRequest$ {
  /** @deprecated use `AtsUpdateJobRequest$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobRequest$inboundSchema;
  /** @deprecated use `AtsUpdateJobRequest$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobRequest$outboundSchema;
  /** @deprecated use `AtsUpdateJobRequest$Outbound` instead. */
  export type Outbound = AtsUpdateJobRequest$Outbound;
}

export function atsUpdateJobRequestToJSON(
  atsUpdateJobRequest: AtsUpdateJobRequest,
): string {
  return JSON.stringify(
    AtsUpdateJobRequest$outboundSchema.parse(atsUpdateJobRequest),
  );
}

export function atsUpdateJobRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateJobRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsUpdateJobRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateJobRequest' from JSON`,
  );
}

/** @internal */
export const AtsUpdateJobResponse$inboundSchema: z.ZodType<
  AtsUpdateJobResponse,
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
export type AtsUpdateJobResponse$Outbound = {
  ContentType: string;
  CreateResult?: shared.CreateResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsUpdateJobResponse$outboundSchema: z.ZodType<
  AtsUpdateJobResponse$Outbound,
  z.ZodTypeDef,
  AtsUpdateJobResponse
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
export namespace AtsUpdateJobResponse$ {
  /** @deprecated use `AtsUpdateJobResponse$inboundSchema` instead. */
  export const inboundSchema = AtsUpdateJobResponse$inboundSchema;
  /** @deprecated use `AtsUpdateJobResponse$outboundSchema` instead. */
  export const outboundSchema = AtsUpdateJobResponse$outboundSchema;
  /** @deprecated use `AtsUpdateJobResponse$Outbound` instead. */
  export type Outbound = AtsUpdateJobResponse$Outbound;
}

export function atsUpdateJobResponseToJSON(
  atsUpdateJobResponse: AtsUpdateJobResponse,
): string {
  return JSON.stringify(
    AtsUpdateJobResponse$outboundSchema.parse(atsUpdateJobResponse),
  );
}

export function atsUpdateJobResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsUpdateJobResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsUpdateJobResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsUpdateJobResponse' from JSON`,
  );
}
