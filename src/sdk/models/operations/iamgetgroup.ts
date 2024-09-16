/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type IamGetGroupRequest = {
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

export type IamGetGroupResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The group with the given identifier was retrieved.
   */
  iamGroupResult?: shared.IamGroupResult | undefined;
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
export const IamGetGroupRequest$inboundSchema: z.ZodType<
  IamGetGroupRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
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
export type IamGetGroupRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw: boolean | null;
  "x-account-id": string;
};

/** @internal */
export const IamGetGroupRequest$outboundSchema: z.ZodType<
  IamGetGroupRequest$Outbound,
  z.ZodTypeDef,
  IamGetGroupRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
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
export namespace IamGetGroupRequest$ {
  /** @deprecated use `IamGetGroupRequest$inboundSchema` instead. */
  export const inboundSchema = IamGetGroupRequest$inboundSchema;
  /** @deprecated use `IamGetGroupRequest$outboundSchema` instead. */
  export const outboundSchema = IamGetGroupRequest$outboundSchema;
  /** @deprecated use `IamGetGroupRequest$Outbound` instead. */
  export type Outbound = IamGetGroupRequest$Outbound;
}

/** @internal */
export const IamGetGroupResponse$inboundSchema: z.ZodType<
  IamGetGroupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  IamGroupResult: shared.IamGroupResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "IamGroupResult": "iamGroupResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type IamGetGroupResponse$Outbound = {
  ContentType: string;
  IamGroupResult?: shared.IamGroupResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const IamGetGroupResponse$outboundSchema: z.ZodType<
  IamGetGroupResponse$Outbound,
  z.ZodTypeDef,
  IamGetGroupResponse
> = z.object({
  contentType: z.string(),
  iamGroupResult: shared.IamGroupResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    iamGroupResult: "IamGroupResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGetGroupResponse$ {
  /** @deprecated use `IamGetGroupResponse$inboundSchema` instead. */
  export const inboundSchema = IamGetGroupResponse$inboundSchema;
  /** @deprecated use `IamGetGroupResponse$outboundSchema` instead. */
  export const outboundSchema = IamGetGroupResponse$outboundSchema;
  /** @deprecated use `IamGetGroupResponse$Outbound` instead. */
  export type Outbound = IamGetGroupResponse$Outbound;
}
