/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type CreateRequest = {
  requestBody: Array<shared.CreateEvent>;
  id: number;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type CreateResponse = {
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
   * Multiple status returned. Check the response body for details.
   */
  classes?: Array<shared.CreateEventResponse> | undefined;
};

/** @internal */
export const CreateRequest$inboundSchema: z.ZodType<
  CreateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  RequestBody: z.array(shared.CreateEvent$inboundSchema),
  id: z.number(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type CreateRequest$Outbound = {
  RequestBody: Array<shared.CreateEvent$Outbound>;
  id: number;
  "x-account-id": string;
};

/** @internal */
export const CreateRequest$outboundSchema: z.ZodType<
  CreateRequest$Outbound,
  z.ZodTypeDef,
  CreateRequest
> = z.object({
  requestBody: z.array(shared.CreateEvent$outboundSchema),
  id: z.number(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateRequest$ {
  /** @deprecated use `CreateRequest$inboundSchema` instead. */
  export const inboundSchema = CreateRequest$inboundSchema;
  /** @deprecated use `CreateRequest$outboundSchema` instead. */
  export const outboundSchema = CreateRequest$outboundSchema;
  /** @deprecated use `CreateRequest$Outbound` instead. */
  export type Outbound = CreateRequest$Outbound;
}

export function createRequestToJSON(createRequest: CreateRequest): string {
  return JSON.stringify(CreateRequest$outboundSchema.parse(createRequest));
}

export function createRequestFromJSON(
  jsonString: string,
): SafeParseResult<CreateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateRequest' from JSON`,
  );
}

/** @internal */
export const CreateResponse$inboundSchema: z.ZodType<
  CreateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
  classes: z.array(shared.CreateEventResponse$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type CreateResponse$Outbound = {
  ContentType: string;
  StatusCode: number;
  RawResponse: never;
  classes?: Array<shared.CreateEventResponse$Outbound> | undefined;
};

/** @internal */
export const CreateResponse$outboundSchema: z.ZodType<
  CreateResponse$Outbound,
  z.ZodTypeDef,
  CreateResponse
> = z.object({
  contentType: z.string(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
  classes: z.array(shared.CreateEventResponse$outboundSchema).optional(),
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
export namespace CreateResponse$ {
  /** @deprecated use `CreateResponse$inboundSchema` instead. */
  export const inboundSchema = CreateResponse$inboundSchema;
  /** @deprecated use `CreateResponse$outboundSchema` instead. */
  export const outboundSchema = CreateResponse$outboundSchema;
  /** @deprecated use `CreateResponse$Outbound` instead. */
  export type Outbound = CreateResponse$Outbound;
}

export function createResponseToJSON(createResponse: CreateResponse): string {
  return JSON.stringify(CreateResponse$outboundSchema.parse(createResponse));
}

export function createResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateResponse' from JSON`,
  );
}
