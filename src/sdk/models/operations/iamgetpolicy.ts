/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type IamGetPolicyRequest = {
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
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type IamGetPolicyResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The policy with the given identifier was retrieved.
   */
  iamPolicyResult?: shared.IamPolicyResult | undefined;
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
export const IamGetPolicyRequest$inboundSchema: z.ZodType<
  IamGetPolicyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  expand: z.nullable(z.string()).optional(),
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
export type IamGetPolicyRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const IamGetPolicyRequest$outboundSchema: z.ZodType<
  IamGetPolicyRequest$Outbound,
  z.ZodTypeDef,
  IamGetPolicyRequest
> = z.object({
  expand: z.nullable(z.string()).optional(),
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
export namespace IamGetPolicyRequest$ {
  /** @deprecated use `IamGetPolicyRequest$inboundSchema` instead. */
  export const inboundSchema = IamGetPolicyRequest$inboundSchema;
  /** @deprecated use `IamGetPolicyRequest$outboundSchema` instead. */
  export const outboundSchema = IamGetPolicyRequest$outboundSchema;
  /** @deprecated use `IamGetPolicyRequest$Outbound` instead. */
  export type Outbound = IamGetPolicyRequest$Outbound;
}

export function iamGetPolicyRequestToJSON(
  iamGetPolicyRequest: IamGetPolicyRequest,
): string {
  return JSON.stringify(
    IamGetPolicyRequest$outboundSchema.parse(iamGetPolicyRequest),
  );
}

export function iamGetPolicyRequestFromJSON(
  jsonString: string,
): SafeParseResult<IamGetPolicyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGetPolicyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGetPolicyRequest' from JSON`,
  );
}

/** @internal */
export const IamGetPolicyResponse$inboundSchema: z.ZodType<
  IamGetPolicyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  IamPolicyResult: shared.IamPolicyResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "IamPolicyResult": "iamPolicyResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type IamGetPolicyResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  IamPolicyResult?: shared.IamPolicyResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const IamGetPolicyResponse$outboundSchema: z.ZodType<
  IamGetPolicyResponse$Outbound,
  z.ZodTypeDef,
  IamGetPolicyResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  iamPolicyResult: shared.IamPolicyResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    iamPolicyResult: "IamPolicyResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGetPolicyResponse$ {
  /** @deprecated use `IamGetPolicyResponse$inboundSchema` instead. */
  export const inboundSchema = IamGetPolicyResponse$inboundSchema;
  /** @deprecated use `IamGetPolicyResponse$outboundSchema` instead. */
  export const outboundSchema = IamGetPolicyResponse$outboundSchema;
  /** @deprecated use `IamGetPolicyResponse$Outbound` instead. */
  export type Outbound = IamGetPolicyResponse$Outbound;
}

export function iamGetPolicyResponseToJSON(
  iamGetPolicyResponse: IamGetPolicyResponse,
): string {
  return JSON.stringify(
    IamGetPolicyResponse$outboundSchema.parse(iamGetPolicyResponse),
  );
}

export function iamGetPolicyResponseFromJSON(
  jsonString: string,
): SafeParseResult<IamGetPolicyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGetPolicyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGetPolicyResponse' from JSON`,
  );
}
