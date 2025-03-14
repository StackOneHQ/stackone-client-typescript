/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CrmGetContactRequest = {
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

export type CrmGetContactResponse = {
  /**
   * The contact with the given identifier was retrieved.
   */
  contactResult?: shared.ContactResult | undefined;
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
export const CrmGetContactRequest$inboundSchema: z.ZodType<
  CrmGetContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
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
export type CrmGetContactRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  include?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const CrmGetContactRequest$outboundSchema: z.ZodType<
  CrmGetContactRequest$Outbound,
  z.ZodTypeDef,
  CrmGetContactRequest
> = z.object({
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
export namespace CrmGetContactRequest$ {
  /** @deprecated use `CrmGetContactRequest$inboundSchema` instead. */
  export const inboundSchema = CrmGetContactRequest$inboundSchema;
  /** @deprecated use `CrmGetContactRequest$outboundSchema` instead. */
  export const outboundSchema = CrmGetContactRequest$outboundSchema;
  /** @deprecated use `CrmGetContactRequest$Outbound` instead. */
  export type Outbound = CrmGetContactRequest$Outbound;
}

export function crmGetContactRequestToJSON(
  crmGetContactRequest: CrmGetContactRequest,
): string {
  return JSON.stringify(
    CrmGetContactRequest$outboundSchema.parse(crmGetContactRequest),
  );
}

export function crmGetContactRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmGetContactRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmGetContactRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmGetContactRequest' from JSON`,
  );
}

/** @internal */
export const CrmGetContactResponse$inboundSchema: z.ZodType<
  CrmGetContactResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContactResult: shared.ContactResult$inboundSchema.optional(),
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContactResult": "contactResult",
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CrmGetContactResponse$Outbound = {
  ContactResult?: shared.ContactResult$Outbound | undefined;
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CrmGetContactResponse$outboundSchema: z.ZodType<
  CrmGetContactResponse$Outbound,
  z.ZodTypeDef,
  CrmGetContactResponse
> = z.object({
  contactResult: shared.ContactResult$outboundSchema.optional(),
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contactResult: "ContactResult",
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
export namespace CrmGetContactResponse$ {
  /** @deprecated use `CrmGetContactResponse$inboundSchema` instead. */
  export const inboundSchema = CrmGetContactResponse$inboundSchema;
  /** @deprecated use `CrmGetContactResponse$outboundSchema` instead. */
  export const outboundSchema = CrmGetContactResponse$outboundSchema;
  /** @deprecated use `CrmGetContactResponse$Outbound` instead. */
  export type Outbound = CrmGetContactResponse$Outbound;
}

export function crmGetContactResponseToJSON(
  crmGetContactResponse: CrmGetContactResponse,
): string {
  return JSON.stringify(
    CrmGetContactResponse$outboundSchema.parse(crmGetContactResponse),
  );
}

export function crmGetContactResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmGetContactResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmGetContactResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmGetContactResponse' from JSON`,
  );
}
