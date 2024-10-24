/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type StackoneListConnectorsMetaRequest = {
  /**
   * The comma separated list of data that will be included in the response
   */
  include?: string | null | undefined;
};

export type StackoneListConnectorsMetaResponse = {
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
  /**
   * The list of connectors meta information was retrieved.
   */
  classes?: Array<shared.ConnectorsMeta> | undefined;
};

/** @internal */
export const StackoneListConnectorsMetaRequest$inboundSchema: z.ZodType<
  StackoneListConnectorsMetaRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  include: z.nullable(z.string()).optional(),
});

/** @internal */
export type StackoneListConnectorsMetaRequest$Outbound = {
  include?: string | null | undefined;
};

/** @internal */
export const StackoneListConnectorsMetaRequest$outboundSchema: z.ZodType<
  StackoneListConnectorsMetaRequest$Outbound,
  z.ZodTypeDef,
  StackoneListConnectorsMetaRequest
> = z.object({
  include: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneListConnectorsMetaRequest$ {
  /** @deprecated use `StackoneListConnectorsMetaRequest$inboundSchema` instead. */
  export const inboundSchema = StackoneListConnectorsMetaRequest$inboundSchema;
  /** @deprecated use `StackoneListConnectorsMetaRequest$outboundSchema` instead. */
  export const outboundSchema =
    StackoneListConnectorsMetaRequest$outboundSchema;
  /** @deprecated use `StackoneListConnectorsMetaRequest$Outbound` instead. */
  export type Outbound = StackoneListConnectorsMetaRequest$Outbound;
}

/** @internal */
export const StackoneListConnectorsMetaResponse$inboundSchema: z.ZodType<
  StackoneListConnectorsMetaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.ConnectorsMeta$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type StackoneListConnectorsMetaResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.ConnectorsMeta$Outbound> | undefined;
};

/** @internal */
export const StackoneListConnectorsMetaResponse$outboundSchema: z.ZodType<
  StackoneListConnectorsMetaResponse$Outbound,
  z.ZodTypeDef,
  StackoneListConnectorsMetaResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.ConnectorsMeta$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneListConnectorsMetaResponse$ {
  /** @deprecated use `StackoneListConnectorsMetaResponse$inboundSchema` instead. */
  export const inboundSchema = StackoneListConnectorsMetaResponse$inboundSchema;
  /** @deprecated use `StackoneListConnectorsMetaResponse$outboundSchema` instead. */
  export const outboundSchema =
    StackoneListConnectorsMetaResponse$outboundSchema;
  /** @deprecated use `StackoneListConnectorsMetaResponse$Outbound` instead. */
  export type Outbound = StackoneListConnectorsMetaResponse$Outbound;
}
