/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AtsDownloadApplicationDocumentRequest = {
  /**
   * The format to download the file in
   */
  format?: string | null | undefined;
  id: string;
  subResourceId: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsDownloadApplicationDocumentResponse = {
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
   * The document related to the application with the given identifiers was retrieved.
   */
  responseStream?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const AtsDownloadApplicationDocumentRequest$inboundSchema: z.ZodType<
  AtsDownloadApplicationDocumentRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  format: z.nullable(z.string()).optional(),
  id: z.string(),
  subResourceId: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsDownloadApplicationDocumentRequest$Outbound = {
  format?: string | null | undefined;
  id: string;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const AtsDownloadApplicationDocumentRequest$outboundSchema: z.ZodType<
  AtsDownloadApplicationDocumentRequest$Outbound,
  z.ZodTypeDef,
  AtsDownloadApplicationDocumentRequest
> = z.object({
  format: z.nullable(z.string()).optional(),
  id: z.string(),
  subResourceId: z.string(),
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
export namespace AtsDownloadApplicationDocumentRequest$ {
  /** @deprecated use `AtsDownloadApplicationDocumentRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsDownloadApplicationDocumentRequest$inboundSchema;
  /** @deprecated use `AtsDownloadApplicationDocumentRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsDownloadApplicationDocumentRequest$outboundSchema;
  /** @deprecated use `AtsDownloadApplicationDocumentRequest$Outbound` instead. */
  export type Outbound = AtsDownloadApplicationDocumentRequest$Outbound;
}

export function atsDownloadApplicationDocumentRequestToJSON(
  atsDownloadApplicationDocumentRequest: AtsDownloadApplicationDocumentRequest,
): string {
  return JSON.stringify(
    AtsDownloadApplicationDocumentRequest$outboundSchema.parse(
      atsDownloadApplicationDocumentRequest,
    ),
  );
}

export function atsDownloadApplicationDocumentRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsDownloadApplicationDocumentRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsDownloadApplicationDocumentRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsDownloadApplicationDocumentRequest' from JSON`,
  );
}

/** @internal */
export const AtsDownloadApplicationDocumentResponse$inboundSchema: z.ZodType<
  AtsDownloadApplicationDocumentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  "response-stream": z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "response-stream": "responseStream",
  });
});

/** @internal */
export type AtsDownloadApplicationDocumentResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  "response-stream"?: ReadableStream<Uint8Array> | undefined;
};

/** @internal */
export const AtsDownloadApplicationDocumentResponse$outboundSchema: z.ZodType<
  AtsDownloadApplicationDocumentResponse$Outbound,
  z.ZodTypeDef,
  AtsDownloadApplicationDocumentResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  responseStream: z.instanceof(ReadableStream<Uint8Array>).optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    responseStream: "response-stream",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsDownloadApplicationDocumentResponse$ {
  /** @deprecated use `AtsDownloadApplicationDocumentResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsDownloadApplicationDocumentResponse$inboundSchema;
  /** @deprecated use `AtsDownloadApplicationDocumentResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsDownloadApplicationDocumentResponse$outboundSchema;
  /** @deprecated use `AtsDownloadApplicationDocumentResponse$Outbound` instead. */
  export type Outbound = AtsDownloadApplicationDocumentResponse$Outbound;
}

export function atsDownloadApplicationDocumentResponseToJSON(
  atsDownloadApplicationDocumentResponse:
    AtsDownloadApplicationDocumentResponse,
): string {
  return JSON.stringify(
    AtsDownloadApplicationDocumentResponse$outboundSchema.parse(
      atsDownloadApplicationDocumentResponse,
    ),
  );
}

export function atsDownloadApplicationDocumentResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsDownloadApplicationDocumentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsDownloadApplicationDocumentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsDownloadApplicationDocumentResponse' from JSON`,
  );
}
