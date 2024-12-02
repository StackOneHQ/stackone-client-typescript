/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetBackgroundCheckRequestRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  id: string;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result is returned
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsGetBackgroundCheckRequestResponse = {
  /**
   * The background check order with the given identifier was retrieved.
   */
  backgroundCheckOrderResult?: shared.BackgroundCheckOrderResult | undefined;
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
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
export const AtsGetBackgroundCheckRequestRequest$inboundSchema: z.ZodType<
  AtsGetBackgroundCheckRequestRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetBackgroundCheckRequestRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetBackgroundCheckRequestRequest$outboundSchema: z.ZodType<
  AtsGetBackgroundCheckRequestRequest$Outbound,
  z.ZodTypeDef,
  AtsGetBackgroundCheckRequestRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean().default(false)),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetBackgroundCheckRequestRequest$ {
  /** @deprecated use `AtsGetBackgroundCheckRequestRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetBackgroundCheckRequestRequest$inboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckRequestRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetBackgroundCheckRequestRequest$outboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckRequestRequest$Outbound` instead. */
  export type Outbound = AtsGetBackgroundCheckRequestRequest$Outbound;
}

export function atsGetBackgroundCheckRequestRequestToJSON(
  atsGetBackgroundCheckRequestRequest: AtsGetBackgroundCheckRequestRequest,
): string {
  return JSON.stringify(
    AtsGetBackgroundCheckRequestRequest$outboundSchema.parse(
      atsGetBackgroundCheckRequestRequest,
    ),
  );
}

export function atsGetBackgroundCheckRequestRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetBackgroundCheckRequestRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetBackgroundCheckRequestRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetBackgroundCheckRequestRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetBackgroundCheckRequestResponse$inboundSchema: z.ZodType<
  AtsGetBackgroundCheckRequestResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BackgroundCheckOrderResult: shared.BackgroundCheckOrderResult$inboundSchema
    .optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BackgroundCheckOrderResult": "backgroundCheckOrderResult",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetBackgroundCheckRequestResponse$Outbound = {
  BackgroundCheckOrderResult?:
    | shared.BackgroundCheckOrderResult$Outbound
    | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetBackgroundCheckRequestResponse$outboundSchema: z.ZodType<
  AtsGetBackgroundCheckRequestResponse$Outbound,
  z.ZodTypeDef,
  AtsGetBackgroundCheckRequestResponse
> = z.object({
  backgroundCheckOrderResult: shared.BackgroundCheckOrderResult$outboundSchema
    .optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    backgroundCheckOrderResult: "BackgroundCheckOrderResult",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetBackgroundCheckRequestResponse$ {
  /** @deprecated use `AtsGetBackgroundCheckRequestResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetBackgroundCheckRequestResponse$inboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckRequestResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetBackgroundCheckRequestResponse$outboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckRequestResponse$Outbound` instead. */
  export type Outbound = AtsGetBackgroundCheckRequestResponse$Outbound;
}

export function atsGetBackgroundCheckRequestResponseToJSON(
  atsGetBackgroundCheckRequestResponse: AtsGetBackgroundCheckRequestResponse,
): string {
  return JSON.stringify(
    AtsGetBackgroundCheckRequestResponse$outboundSchema.parse(
      atsGetBackgroundCheckRequestResponse,
    ),
  );
}

export function atsGetBackgroundCheckRequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetBackgroundCheckRequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetBackgroundCheckRequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetBackgroundCheckRequestResponse' from JSON`,
  );
}