/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type DocumentsGetFolderRequest = {
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

export type DocumentsGetFolderResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The folder with the given identifier was retrieved.
   */
  folderResult?: shared.FolderResult | undefined;
  headers: { [k: string]: Array<string> };
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
export const DocumentsGetFolderRequest$inboundSchema: z.ZodType<
  DocumentsGetFolderRequest,
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
export type DocumentsGetFolderRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const DocumentsGetFolderRequest$outboundSchema: z.ZodType<
  DocumentsGetFolderRequest$Outbound,
  z.ZodTypeDef,
  DocumentsGetFolderRequest
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
export namespace DocumentsGetFolderRequest$ {
  /** @deprecated use `DocumentsGetFolderRequest$inboundSchema` instead. */
  export const inboundSchema = DocumentsGetFolderRequest$inboundSchema;
  /** @deprecated use `DocumentsGetFolderRequest$outboundSchema` instead. */
  export const outboundSchema = DocumentsGetFolderRequest$outboundSchema;
  /** @deprecated use `DocumentsGetFolderRequest$Outbound` instead. */
  export type Outbound = DocumentsGetFolderRequest$Outbound;
}

export function documentsGetFolderRequestToJSON(
  documentsGetFolderRequest: DocumentsGetFolderRequest,
): string {
  return JSON.stringify(
    DocumentsGetFolderRequest$outboundSchema.parse(documentsGetFolderRequest),
  );
}

export function documentsGetFolderRequestFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsGetFolderRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsGetFolderRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsGetFolderRequest' from JSON`,
  );
}

/** @internal */
export const DocumentsGetFolderResponse$inboundSchema: z.ZodType<
  DocumentsGetFolderResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  FolderResult: shared.FolderResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "FolderResult": "folderResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type DocumentsGetFolderResponse$Outbound = {
  ContentType: string;
  FolderResult?: shared.FolderResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const DocumentsGetFolderResponse$outboundSchema: z.ZodType<
  DocumentsGetFolderResponse$Outbound,
  z.ZodTypeDef,
  DocumentsGetFolderResponse
> = z.object({
  contentType: z.string(),
  folderResult: shared.FolderResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    folderResult: "FolderResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DocumentsGetFolderResponse$ {
  /** @deprecated use `DocumentsGetFolderResponse$inboundSchema` instead. */
  export const inboundSchema = DocumentsGetFolderResponse$inboundSchema;
  /** @deprecated use `DocumentsGetFolderResponse$outboundSchema` instead. */
  export const outboundSchema = DocumentsGetFolderResponse$outboundSchema;
  /** @deprecated use `DocumentsGetFolderResponse$Outbound` instead. */
  export type Outbound = DocumentsGetFolderResponse$Outbound;
}

export function documentsGetFolderResponseToJSON(
  documentsGetFolderResponse: DocumentsGetFolderResponse,
): string {
  return JSON.stringify(
    DocumentsGetFolderResponse$outboundSchema.parse(documentsGetFolderResponse),
  );
}

export function documentsGetFolderResponseFromJSON(
  jsonString: string,
): SafeParseResult<DocumentsGetFolderResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DocumentsGetFolderResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DocumentsGetFolderResponse' from JSON`,
  );
}
