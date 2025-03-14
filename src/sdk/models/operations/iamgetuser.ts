/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type IamGetUserRequest = {
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

export type IamGetUserResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The user with the given identifier was retrieved.
   */
  iamUserResult?: shared.IamUserResult | undefined;
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
export const IamGetUserRequest$inboundSchema: z.ZodType<
  IamGetUserRequest,
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
export type IamGetUserRequest$Outbound = {
  expand?: string | null | undefined;
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const IamGetUserRequest$outboundSchema: z.ZodType<
  IamGetUserRequest$Outbound,
  z.ZodTypeDef,
  IamGetUserRequest
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
export namespace IamGetUserRequest$ {
  /** @deprecated use `IamGetUserRequest$inboundSchema` instead. */
  export const inboundSchema = IamGetUserRequest$inboundSchema;
  /** @deprecated use `IamGetUserRequest$outboundSchema` instead. */
  export const outboundSchema = IamGetUserRequest$outboundSchema;
  /** @deprecated use `IamGetUserRequest$Outbound` instead. */
  export type Outbound = IamGetUserRequest$Outbound;
}

export function iamGetUserRequestToJSON(
  iamGetUserRequest: IamGetUserRequest,
): string {
  return JSON.stringify(
    IamGetUserRequest$outboundSchema.parse(iamGetUserRequest),
  );
}

export function iamGetUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<IamGetUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGetUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGetUserRequest' from JSON`,
  );
}

/** @internal */
export const IamGetUserResponse$inboundSchema: z.ZodType<
  IamGetUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  IamUserResult: shared.IamUserResult$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "IamUserResult": "iamUserResult",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type IamGetUserResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  IamUserResult?: shared.IamUserResult$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const IamGetUserResponse$outboundSchema: z.ZodType<
  IamGetUserResponse$Outbound,
  z.ZodTypeDef,
  IamGetUserResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  iamUserResult: shared.IamUserResult$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    iamUserResult: "IamUserResult",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IamGetUserResponse$ {
  /** @deprecated use `IamGetUserResponse$inboundSchema` instead. */
  export const inboundSchema = IamGetUserResponse$inboundSchema;
  /** @deprecated use `IamGetUserResponse$outboundSchema` instead. */
  export const outboundSchema = IamGetUserResponse$outboundSchema;
  /** @deprecated use `IamGetUserResponse$Outbound` instead. */
  export type Outbound = IamGetUserResponse$Outbound;
}

export function iamGetUserResponseToJSON(
  iamGetUserResponse: IamGetUserResponse,
): string {
  return JSON.stringify(
    IamGetUserResponse$outboundSchema.parse(iamGetUserResponse),
  );
}

export function iamGetUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<IamGetUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IamGetUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IamGetUserResponse' from JSON`,
  );
}
