/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetBackgroundCheckPackageRequest = {
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
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsGetBackgroundCheckPackageResponse = {
  /**
   * The background check package with the given identifier was retrieved.
   */
  backgroundCheckPackageResult?:
    | shared.BackgroundCheckPackageResult
    | undefined;
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
export const AtsGetBackgroundCheckPackageRequest$inboundSchema: z.ZodType<
  AtsGetBackgroundCheckPackageRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetBackgroundCheckPackageRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsGetBackgroundCheckPackageRequest$outboundSchema: z.ZodType<
  AtsGetBackgroundCheckPackageRequest$Outbound,
  z.ZodTypeDef,
  AtsGetBackgroundCheckPackageRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace AtsGetBackgroundCheckPackageRequest$ {
  /** @deprecated use `AtsGetBackgroundCheckPackageRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetBackgroundCheckPackageRequest$inboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckPackageRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetBackgroundCheckPackageRequest$outboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckPackageRequest$Outbound` instead. */
  export type Outbound = AtsGetBackgroundCheckPackageRequest$Outbound;
}

export function atsGetBackgroundCheckPackageRequestToJSON(
  atsGetBackgroundCheckPackageRequest: AtsGetBackgroundCheckPackageRequest,
): string {
  return JSON.stringify(
    AtsGetBackgroundCheckPackageRequest$outboundSchema.parse(
      atsGetBackgroundCheckPackageRequest,
    ),
  );
}

export function atsGetBackgroundCheckPackageRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetBackgroundCheckPackageRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetBackgroundCheckPackageRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetBackgroundCheckPackageRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetBackgroundCheckPackageResponse$inboundSchema: z.ZodType<
  AtsGetBackgroundCheckPackageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  BackgroundCheckPackageResult: shared
    .BackgroundCheckPackageResult$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "BackgroundCheckPackageResult": "backgroundCheckPackageResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetBackgroundCheckPackageResponse$Outbound = {
  BackgroundCheckPackageResult?:
    | shared.BackgroundCheckPackageResult$Outbound
    | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetBackgroundCheckPackageResponse$outboundSchema: z.ZodType<
  AtsGetBackgroundCheckPackageResponse$Outbound,
  z.ZodTypeDef,
  AtsGetBackgroundCheckPackageResponse
> = z.object({
  backgroundCheckPackageResult: shared
    .BackgroundCheckPackageResult$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    backgroundCheckPackageResult: "BackgroundCheckPackageResult",
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
export namespace AtsGetBackgroundCheckPackageResponse$ {
  /** @deprecated use `AtsGetBackgroundCheckPackageResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetBackgroundCheckPackageResponse$inboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckPackageResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetBackgroundCheckPackageResponse$outboundSchema;
  /** @deprecated use `AtsGetBackgroundCheckPackageResponse$Outbound` instead. */
  export type Outbound = AtsGetBackgroundCheckPackageResponse$Outbound;
}

export function atsGetBackgroundCheckPackageResponseToJSON(
  atsGetBackgroundCheckPackageResponse: AtsGetBackgroundCheckPackageResponse,
): string {
  return JSON.stringify(
    AtsGetBackgroundCheckPackageResponse$outboundSchema.parse(
      atsGetBackgroundCheckPackageResponse,
    ),
  );
}

export function atsGetBackgroundCheckPackageResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetBackgroundCheckPackageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetBackgroundCheckPackageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetBackgroundCheckPackageResponse' from JSON`,
  );
}
