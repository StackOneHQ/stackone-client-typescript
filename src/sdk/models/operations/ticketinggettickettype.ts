/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type TicketingGetTicketTypeRequest = {
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

export type TicketingGetTicketTypeResponse = {
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
   * The ticket type with the given identifier was retrieved.
   */
  ticketingTicketTypeResult?: shared.TicketingTicketTypeResult | undefined;
};

/** @internal */
export const TicketingGetTicketTypeRequest$inboundSchema: z.ZodType<
  TicketingGetTicketTypeRequest,
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
export type TicketingGetTicketTypeRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const TicketingGetTicketTypeRequest$outboundSchema: z.ZodType<
  TicketingGetTicketTypeRequest$Outbound,
  z.ZodTypeDef,
  TicketingGetTicketTypeRequest
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
export namespace TicketingGetTicketTypeRequest$ {
  /** @deprecated use `TicketingGetTicketTypeRequest$inboundSchema` instead. */
  export const inboundSchema = TicketingGetTicketTypeRequest$inboundSchema;
  /** @deprecated use `TicketingGetTicketTypeRequest$outboundSchema` instead. */
  export const outboundSchema = TicketingGetTicketTypeRequest$outboundSchema;
  /** @deprecated use `TicketingGetTicketTypeRequest$Outbound` instead. */
  export type Outbound = TicketingGetTicketTypeRequest$Outbound;
}

export function ticketingGetTicketTypeRequestToJSON(
  ticketingGetTicketTypeRequest: TicketingGetTicketTypeRequest,
): string {
  return JSON.stringify(
    TicketingGetTicketTypeRequest$outboundSchema.parse(
      ticketingGetTicketTypeRequest,
    ),
  );
}

export function ticketingGetTicketTypeRequestFromJSON(
  jsonString: string,
): SafeParseResult<TicketingGetTicketTypeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingGetTicketTypeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingGetTicketTypeRequest' from JSON`,
  );
}

/** @internal */
export const TicketingGetTicketTypeResponse$inboundSchema: z.ZodType<
  TicketingGetTicketTypeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  TicketingTicketTypeResult: shared.TicketingTicketTypeResult$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "TicketingTicketTypeResult": "ticketingTicketTypeResult",
  });
});

/** @internal */
export type TicketingGetTicketTypeResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  TicketingTicketTypeResult?:
    | shared.TicketingTicketTypeResult$Outbound
    | undefined;
};

/** @internal */
export const TicketingGetTicketTypeResponse$outboundSchema: z.ZodType<
  TicketingGetTicketTypeResponse$Outbound,
  z.ZodTypeDef,
  TicketingGetTicketTypeResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  ticketingTicketTypeResult: shared.TicketingTicketTypeResult$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    ticketingTicketTypeResult: "TicketingTicketTypeResult",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketingGetTicketTypeResponse$ {
  /** @deprecated use `TicketingGetTicketTypeResponse$inboundSchema` instead. */
  export const inboundSchema = TicketingGetTicketTypeResponse$inboundSchema;
  /** @deprecated use `TicketingGetTicketTypeResponse$outboundSchema` instead. */
  export const outboundSchema = TicketingGetTicketTypeResponse$outboundSchema;
  /** @deprecated use `TicketingGetTicketTypeResponse$Outbound` instead. */
  export type Outbound = TicketingGetTicketTypeResponse$Outbound;
}

export function ticketingGetTicketTypeResponseToJSON(
  ticketingGetTicketTypeResponse: TicketingGetTicketTypeResponse,
): string {
  return JSON.stringify(
    TicketingGetTicketTypeResponse$outboundSchema.parse(
      ticketingGetTicketTypeResponse,
    ),
  );
}

export function ticketingGetTicketTypeResponseFromJSON(
  jsonString: string,
): SafeParseResult<TicketingGetTicketTypeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketingGetTicketTypeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketingGetTicketTypeResponse' from JSON`,
  );
}
