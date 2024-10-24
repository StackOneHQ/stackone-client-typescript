/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type CrmCreateContactRequest = {
  crmCreateContactRequestDto: shared.CrmCreateContactRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type CrmCreateContactResponse = {
  /**
   * The contact was successfully created.
   */
  contactResult?: shared.ContactResult | undefined;
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
export const CrmCreateContactRequest$inboundSchema: z.ZodType<
  CrmCreateContactRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  CrmCreateContactRequestDto: shared.CrmCreateContactRequestDto$inboundSchema,
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "CrmCreateContactRequestDto": "crmCreateContactRequestDto",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type CrmCreateContactRequest$Outbound = {
  CrmCreateContactRequestDto: shared.CrmCreateContactRequestDto$Outbound;
  "x-account-id": string;
};

/** @internal */
export const CrmCreateContactRequest$outboundSchema: z.ZodType<
  CrmCreateContactRequest$Outbound,
  z.ZodTypeDef,
  CrmCreateContactRequest
> = z.object({
  crmCreateContactRequestDto: shared.CrmCreateContactRequestDto$outboundSchema,
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    crmCreateContactRequestDto: "CrmCreateContactRequestDto",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCreateContactRequest$ {
  /** @deprecated use `CrmCreateContactRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCreateContactRequest$inboundSchema;
  /** @deprecated use `CrmCreateContactRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCreateContactRequest$outboundSchema;
  /** @deprecated use `CrmCreateContactRequest$Outbound` instead. */
  export type Outbound = CrmCreateContactRequest$Outbound;
}

/** @internal */
export const CrmCreateContactResponse$inboundSchema: z.ZodType<
  CrmCreateContactResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContactResult: shared.ContactResult$inboundSchema.optional(),
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContactResult": "contactResult",
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CrmCreateContactResponse$Outbound = {
  ContactResult?: shared.ContactResult$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const CrmCreateContactResponse$outboundSchema: z.ZodType<
  CrmCreateContactResponse$Outbound,
  z.ZodTypeDef,
  CrmCreateContactResponse
> = z.object({
  contactResult: shared.ContactResult$outboundSchema.optional(),
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contactResult: "ContactResult",
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCreateContactResponse$ {
  /** @deprecated use `CrmCreateContactResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCreateContactResponse$inboundSchema;
  /** @deprecated use `CrmCreateContactResponse$outboundSchema` instead. */
  export const outboundSchema = CrmCreateContactResponse$outboundSchema;
  /** @deprecated use `CrmCreateContactResponse$Outbound` instead. */
  export type Outbound = CrmCreateContactResponse$Outbound;
}
