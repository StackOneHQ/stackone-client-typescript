/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetLocationRequest = {
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

export type AtsGetLocationResponse = {
  /**
   * The location with the given identifier was retrieved.
   */
  atsLocationResult?: shared.ATSLocationResult | undefined;
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
};

/** @internal */
export const AtsGetLocationRequest$inboundSchema: z.ZodType<
  AtsGetLocationRequest,
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
export type AtsGetLocationRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const AtsGetLocationRequest$outboundSchema: z.ZodType<
  AtsGetLocationRequest$Outbound,
  z.ZodTypeDef,
  AtsGetLocationRequest
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
export namespace AtsGetLocationRequest$ {
  /** @deprecated use `AtsGetLocationRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetLocationRequest$inboundSchema;
  /** @deprecated use `AtsGetLocationRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetLocationRequest$outboundSchema;
  /** @deprecated use `AtsGetLocationRequest$Outbound` instead. */
  export type Outbound = AtsGetLocationRequest$Outbound;
}

export function atsGetLocationRequestToJSON(
  atsGetLocationRequest: AtsGetLocationRequest,
): string {
  return JSON.stringify(
    AtsGetLocationRequest$outboundSchema.parse(atsGetLocationRequest),
  );
}

export function atsGetLocationRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetLocationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetLocationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetLocationRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetLocationResponse$inboundSchema: z.ZodType<
  AtsGetLocationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ATSLocationResult: shared.ATSLocationResult$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ATSLocationResult": "atsLocationResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetLocationResponse$Outbound = {
  ATSLocationResult?: shared.ATSLocationResult$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetLocationResponse$outboundSchema: z.ZodType<
  AtsGetLocationResponse$Outbound,
  z.ZodTypeDef,
  AtsGetLocationResponse
> = z.object({
  atsLocationResult: shared.ATSLocationResult$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    atsLocationResult: "ATSLocationResult",
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetLocationResponse$ {
  /** @deprecated use `AtsGetLocationResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetLocationResponse$inboundSchema;
  /** @deprecated use `AtsGetLocationResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetLocationResponse$outboundSchema;
  /** @deprecated use `AtsGetLocationResponse$Outbound` instead. */
  export type Outbound = AtsGetLocationResponse$Outbound;
}

export function atsGetLocationResponseToJSON(
  atsGetLocationResponse: AtsGetLocationResponse,
): string {
  return JSON.stringify(
    AtsGetLocationResponse$outboundSchema.parse(atsGetLocationResponse),
  );
}

export function atsGetLocationResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetLocationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetLocationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetLocationResponse' from JSON`,
  );
}
