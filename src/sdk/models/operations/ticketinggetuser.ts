/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type TicketingGetUserRequest = {
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

export type TicketingGetUserResponse = {
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
  /**
   * The user with the given identifier was retrieved.
   */
  ticketingUserResult?: shared.TicketingUserResult | undefined;
};

/** @internal */
export const TicketingGetUserRequest$inboundSchema: z.ZodType<
  TicketingGetUserRequest,
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
export type TicketingGetUserRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const TicketingGetUserRequest$outboundSchema: z.ZodType<
  TicketingGetUserRequest$Outbound,
  z.ZodTypeDef,
  TicketingGetUserRequest
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
export namespace TicketingGetUserRequest$ {
  /** @deprecated use `TicketingGetUserRequest$inboundSchema` instead. */
  export const inboundSchema = TicketingGetUserRequest$inboundSchema;
  /** @deprecated use `TicketingGetUserRequest$outboundSchema` instead. */
  export const outboundSchema = TicketingGetUserRequest$outboundSchema;
  /** @deprecated use `TicketingGetUserRequest$Outbound` instead. */
  export type Outbound = TicketingGetUserRequest$Outbound;
}

export function ticketingGetUserRequestToJSON(
  ticketingGetUserRequest: TicketingGetUserRequest,
): string {
  return JSON.stringify(
    TicketingGetUserRequest$outboundSchema.parse(ticketingGetUserRequest),
  );
}

export function ticketingGetUserRequestFromJSON(
  jsonString: string,
): SafeParseResult<TicketingGetUserRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingGetUserRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingGetUserRequest' from JSON`,
  );
}

/** @internal */
export const TicketingGetUserResponse$inboundSchema: z.ZodType<
  TicketingGetUserResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TicketingUserResult: shared.TicketingUserResult$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TicketingUserResult": "ticketingUserResult",
  });
});

/** @internal */
export type TicketingGetUserResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  TicketingUserResult?: shared.TicketingUserResult$Outbound | undefined;
};

/** @internal */
export const TicketingGetUserResponse$outboundSchema: z.ZodType<
  TicketingGetUserResponse$Outbound,
  z.ZodTypeDef,
  TicketingGetUserResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  ticketingUserResult: shared.TicketingUserResult$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    ticketingUserResult: "TicketingUserResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingGetUserResponse$ {
  /** @deprecated use `TicketingGetUserResponse$inboundSchema` instead. */
  export const inboundSchema = TicketingGetUserResponse$inboundSchema;
  /** @deprecated use `TicketingGetUserResponse$outboundSchema` instead. */
  export const outboundSchema = TicketingGetUserResponse$outboundSchema;
  /** @deprecated use `TicketingGetUserResponse$Outbound` instead. */
  export type Outbound = TicketingGetUserResponse$Outbound;
}

export function ticketingGetUserResponseToJSON(
  ticketingGetUserResponse: TicketingGetUserResponse,
): string {
  return JSON.stringify(
    TicketingGetUserResponse$outboundSchema.parse(ticketingGetUserResponse),
  );
}

export function ticketingGetUserResponseFromJSON(
  jsonString: string,
): SafeParseResult<TicketingGetUserResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingGetUserResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingGetUserResponse' from JSON`,
  );
}
