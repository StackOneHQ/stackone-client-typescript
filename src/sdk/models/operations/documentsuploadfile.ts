/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type DocumentsUploadFileRequest = {
  unifiedUploadRequestDto: shared.UnifiedUploadRequestDto;
  /**
   * The account identifier
   */
  xAccountId: string;
  /**
   * The session token
   */
  xStackoneApiSessionToken?: string | undefined;
};

export type DocumentsUploadFileResponse = {
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
   * The file was uploaded.
   */
  writeResultApiModel?: shared.WriteResultApiModel | undefined;
};

/** @internal */
export const DocumentsUploadFileRequest$inboundSchema: z.ZodType<
  DocumentsUploadFileRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  UnifiedUploadRequestDto: shared.UnifiedUploadRequestDto$inboundSchema,
  "x-account-id": z.string(),
  "x-stackone-api-session-token": z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "UnifiedUploadRequestDto": "unifiedUploadRequestDto",
    "x-account-id": "xAccountId",
    "x-stackone-api-session-token": "xStackoneApiSessionToken",
  });
});

/** @internal */
export type DocumentsUploadFileRequest$Outbound = {
  UnifiedUploadRequestDto: shared.UnifiedUploadRequestDto$Outbound;
  "x-account-id": string;
  "x-stackone-api-session-token"?: string | undefined;
};

/** @internal */
export const DocumentsUploadFileRequest$outboundSchema: z.ZodType<
  DocumentsUploadFileRequest$Outbound,
  z.ZodTypeDef,
  DocumentsUploadFileRequest
> = z.object({
  unifiedUploadRequestDto: shared.UnifiedUploadRequestDto$outboundSchema,
  xAccountId: z.string(),
  xStackoneApiSessionToken: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedUploadRequestDto: "UnifiedUploadRequestDto",
    xAccountId: "x-account-id",
    xStackoneApiSessionToken: "x-stackone-api-session-token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentsUploadFileRequest$ {
  /** @deprecated use `DocumentsUploadFileRequest$inboundSchema` instead. */
  export const inboundSchema = DocumentsUploadFileRequest$inboundSchema;
  /** @deprecated use `DocumentsUploadFileRequest$outboundSchema` instead. */
  export const outboundSchema = DocumentsUploadFileRequest$outboundSchema;
  /** @deprecated use `DocumentsUploadFileRequest$Outbound` instead. */
  export type Outbound = DocumentsUploadFileRequest$Outbound;
}

export function documentsUploadFileRequestToJSON(
  documentsUploadFileRequest: DocumentsUploadFileRequest,
): string {
  return JSON.stringify(
    DocumentsUploadFileRequest$outboundSchema.parse(documentsUploadFileRequest),
  );
}

export function documentsUploadFileRequestFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsUploadFileRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsUploadFileRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsUploadFileRequest' from JSON`,
  );
}

/** @internal */
export const DocumentsUploadFileResponse$inboundSchema: z.ZodType<
  DocumentsUploadFileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  WriteResultApiModel: shared.WriteResultApiModel$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
    "WriteResultApiModel": "writeResultApiModel",
  });
});

/** @internal */
export type DocumentsUploadFileResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
  WriteResultApiModel?: shared.WriteResultApiModel$Outbound | undefined;
};

/** @internal */
export const DocumentsUploadFileResponse$outboundSchema: z.ZodType<
  DocumentsUploadFileResponse$Outbound,
  z.ZodTypeDef,
  DocumentsUploadFileResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  writeResultApiModel: shared.WriteResultApiModel$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
    writeResultApiModel: "WriteResultApiModel",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentsUploadFileResponse$ {
  /** @deprecated use `DocumentsUploadFileResponse$inboundSchema` instead. */
  export const inboundSchema = DocumentsUploadFileResponse$inboundSchema;
  /** @deprecated use `DocumentsUploadFileResponse$outboundSchema` instead. */
  export const outboundSchema = DocumentsUploadFileResponse$outboundSchema;
  /** @deprecated use `DocumentsUploadFileResponse$Outbound` instead. */
  export type Outbound = DocumentsUploadFileResponse$Outbound;
}

export function documentsUploadFileResponseToJSON(
  documentsUploadFileResponse: DocumentsUploadFileResponse,
): string {
  return JSON.stringify(
    DocumentsUploadFileResponse$outboundSchema.parse(
      documentsUploadFileResponse,
    ),
  );
}

export function documentsUploadFileResponseFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsUploadFileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsUploadFileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsUploadFileResponse' from JSON`,
  );
}
