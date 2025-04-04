/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type AtsGetApplicationRequest = {
  /**
   * The comma separated list of fields that will be expanded in the response
   */
  expand?: string | null | undefined;
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  id: string;
  /**
   * The comma separated list of fields that will be included in the response
   */
  include?: string | null | undefined;
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

export type AtsGetApplicationResponse = {
  /**
   * The application with the given identifier was retrieved.
   */
  applicationResult?: shared.ApplicationResult | undefined;
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
export const AtsGetApplicationRequest$inboundSchema: z.ZodType<
  AtsGetApplicationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  include: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetApplicationRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  id: string;
  include?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsGetApplicationRequest$outboundSchema: z.ZodType<
  AtsGetApplicationRequest$Outbound,
  z.ZodTypeDef,
  AtsGetApplicationRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  include: z.nullable(z.string()).optional(),
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
export namespace AtsGetApplicationRequest$ {
  /** @deprecated use `AtsGetApplicationRequest$inboundSchema` instead. */
  export const inboundSchema = AtsGetApplicationRequest$inboundSchema;
  /** @deprecated use `AtsGetApplicationRequest$outboundSchema` instead. */
  export const outboundSchema = AtsGetApplicationRequest$outboundSchema;
  /** @deprecated use `AtsGetApplicationRequest$Outbound` instead. */
  export type Outbound = AtsGetApplicationRequest$Outbound;
}

export function atsGetApplicationRequestToJSON(
  atsGetApplicationRequest: AtsGetApplicationRequest,
): string {
  return JSON.stringify(
    AtsGetApplicationRequest$outboundSchema.parse(atsGetApplicationRequest),
  );
}

export function atsGetApplicationRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetApplicationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetApplicationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetApplicationRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetApplicationResponse$inboundSchema: z.ZodType<
  AtsGetApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ApplicationResult: shared.ApplicationResult$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ApplicationResult": "applicationResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetApplicationResponse$Outbound = {
  ApplicationResult?: shared.ApplicationResult$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetApplicationResponse$outboundSchema: z.ZodType<
  AtsGetApplicationResponse$Outbound,
  z.ZodTypeDef,
  AtsGetApplicationResponse
> = z.object({
  applicationResult: shared.ApplicationResult$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    applicationResult: "ApplicationResult",
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
export namespace AtsGetApplicationResponse$ {
  /** @deprecated use `AtsGetApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = AtsGetApplicationResponse$inboundSchema;
  /** @deprecated use `AtsGetApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = AtsGetApplicationResponse$outboundSchema;
  /** @deprecated use `AtsGetApplicationResponse$Outbound` instead. */
  export type Outbound = AtsGetApplicationResponse$Outbound;
}

export function atsGetApplicationResponseToJSON(
  atsGetApplicationResponse: AtsGetApplicationResponse,
): string {
  return JSON.stringify(
    AtsGetApplicationResponse$outboundSchema.parse(atsGetApplicationResponse),
  );
}

export function atsGetApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsGetApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetApplicationResponse' from JSON`,
  );
}
