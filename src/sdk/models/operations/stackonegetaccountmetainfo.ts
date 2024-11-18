/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type StackoneGetAccountMetaInfoRequest = {
  id: string;
};

export type StackoneGetAccountMetaInfoResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The meta information of the account was retrieved
   */
  linkedAccountMeta?: shared.LinkedAccountMeta | undefined;
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
export const StackoneGetAccountMetaInfoRequest$inboundSchema: z.ZodType<
  StackoneGetAccountMetaInfoRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type StackoneGetAccountMetaInfoRequest$Outbound = {
  id: string;
};

/** @internal */
export const StackoneGetAccountMetaInfoRequest$outboundSchema: z.ZodType<
  StackoneGetAccountMetaInfoRequest$Outbound,
  z.ZodTypeDef,
  StackoneGetAccountMetaInfoRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetAccountMetaInfoRequest$ {
  /** @deprecated use `StackoneGetAccountMetaInfoRequest$inboundSchema` instead. */
  export const inboundSchema = StackoneGetAccountMetaInfoRequest$inboundSchema;
  /** @deprecated use `StackoneGetAccountMetaInfoRequest$outboundSchema` instead. */
  export const outboundSchema =
    StackoneGetAccountMetaInfoRequest$outboundSchema;
  /** @deprecated use `StackoneGetAccountMetaInfoRequest$Outbound` instead. */
  export type Outbound = StackoneGetAccountMetaInfoRequest$Outbound;
}

export function stackoneGetAccountMetaInfoRequestToJSON(
  stackoneGetAccountMetaInfoRequest: StackoneGetAccountMetaInfoRequest,
): string {
  return JSON.stringify(
    StackoneGetAccountMetaInfoRequest$outboundSchema.parse(
      stackoneGetAccountMetaInfoRequest,
    ),
  );
}

export function stackoneGetAccountMetaInfoRequestFromJSON(
  jsonString: string,
): SafeParseResult<StackoneGetAccountMetaInfoRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StackoneGetAccountMetaInfoRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StackoneGetAccountMetaInfoRequest' from JSON`,
  );
}

/** @internal */
export const StackoneGetAccountMetaInfoResponse$inboundSchema: z.ZodType<
  StackoneGetAccountMetaInfoResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  LinkedAccountMeta: shared.LinkedAccountMeta$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "LinkedAccountMeta": "linkedAccountMeta",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type StackoneGetAccountMetaInfoResponse$Outbound = {
  ContentType: string;
  LinkedAccountMeta?: shared.LinkedAccountMeta$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const StackoneGetAccountMetaInfoResponse$outboundSchema: z.ZodType<
  StackoneGetAccountMetaInfoResponse$Outbound,
  z.ZodTypeDef,
  StackoneGetAccountMetaInfoResponse
> = z.object({
  contentType: z.string(),
  linkedAccountMeta: shared.LinkedAccountMeta$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    linkedAccountMeta: "LinkedAccountMeta",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneGetAccountMetaInfoResponse$ {
  /** @deprecated use `StackoneGetAccountMetaInfoResponse$inboundSchema` instead. */
  export const inboundSchema = StackoneGetAccountMetaInfoResponse$inboundSchema;
  /** @deprecated use `StackoneGetAccountMetaInfoResponse$outboundSchema` instead. */
  export const outboundSchema =
    StackoneGetAccountMetaInfoResponse$outboundSchema;
  /** @deprecated use `StackoneGetAccountMetaInfoResponse$Outbound` instead. */
  export type Outbound = StackoneGetAccountMetaInfoResponse$Outbound;
}

export function stackoneGetAccountMetaInfoResponseToJSON(
  stackoneGetAccountMetaInfoResponse: StackoneGetAccountMetaInfoResponse,
): string {
  return JSON.stringify(
    StackoneGetAccountMetaInfoResponse$outboundSchema.parse(
      stackoneGetAccountMetaInfoResponse,
    ),
  );
}

export function stackoneGetAccountMetaInfoResponseFromJSON(
  jsonString: string,
): SafeParseResult<StackoneGetAccountMetaInfoResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      StackoneGetAccountMetaInfoResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StackoneGetAccountMetaInfoResponse' from JSON`,
  );
}
