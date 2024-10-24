/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import * as shared from "../shared/index.js";

export type StackoneAuthenticateConnectSessionResponse = {
  /**
   * The details of the authenticated connect session.
   */
  connectSession?: shared.ConnectSession | undefined;
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
export const StackoneAuthenticateConnectSessionResponse$inboundSchema:
  z.ZodType<StackoneAuthenticateConnectSessionResponse, z.ZodTypeDef, unknown> =
    z.object({
      ConnectSession: shared.ConnectSession$inboundSchema.optional(),
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
    }).transform((v) => {
      return remap$(v, {
        "ConnectSession": "connectSession",
        "ContentType": "contentType",
        "StatusCode": "statusCode",
        "RawResponse": "rawResponse",
      });
    });

/** @internal */
export type StackoneAuthenticateConnectSessionResponse$Outbound = {
  ConnectSession?: shared.ConnectSession$Outbound | undefined;
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const StackoneAuthenticateConnectSessionResponse$outboundSchema:
  z.ZodType<
    StackoneAuthenticateConnectSessionResponse$Outbound,
    z.ZodTypeDef,
    StackoneAuthenticateConnectSessionResponse
  > = z.object({
    connectSession: shared.ConnectSession$outboundSchema.optional(),
    contentType: z.string(),
    statusCode: z.number().int(),
    rawResponse: z.instanceof(Response).transform(() => {
      throw new Error("Response cannot be serialized");
    }),
  }).transform((v) => {
    return remap$(v, {
      connectSession: "ConnectSession",
      contentType: "ContentType",
      statusCode: "StatusCode",
      rawResponse: "RawResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StackoneAuthenticateConnectSessionResponse$ {
  /** @deprecated use `StackoneAuthenticateConnectSessionResponse$inboundSchema` instead. */
  export const inboundSchema =
    StackoneAuthenticateConnectSessionResponse$inboundSchema;
  /** @deprecated use `StackoneAuthenticateConnectSessionResponse$outboundSchema` instead. */
  export const outboundSchema =
    StackoneAuthenticateConnectSessionResponse$outboundSchema;
  /** @deprecated use `StackoneAuthenticateConnectSessionResponse$Outbound` instead. */
  export type Outbound = StackoneAuthenticateConnectSessionResponse$Outbound;
}
