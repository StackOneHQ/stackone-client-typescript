/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

/**
 * Filter parameters that allow greater customisation of the list response
 */
export type AtsGetJobCustomFieldDefinitionQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type AtsGetJobCustomFieldDefinitionRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: AtsGetJobCustomFieldDefinitionQueryParamFilter | null | undefined;
  id: string;
  /**
   * The unified cursor
   */
  next?: string | null | undefined;
  /**
   * The page number of the results to fetch
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  page?: string | null | undefined;
  /**
   * The number of results per page (default value is 25)
   */
  pageSize?: string | null | undefined;
  /**
   * Query parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key
   */
  proxy?: { [k: string]: any } | null | undefined;
  /**
   * Indicates that the raw request result should be returned in addition to the mapped result (default value is false)
   */
  raw?: boolean | null | undefined;
  /**
   * Use a string with a date to only select results updated after that given date
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  updatedAfter?: string | null | undefined;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type AtsGetJobCustomFieldDefinitionResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The job custom field definition was retrieved.
   */
  customFieldDefinitionResultApiModel?:
    | shared.CustomFieldDefinitionResultApiModel
    | undefined;
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
export const AtsGetJobCustomFieldDefinitionQueryParamFilter$inboundSchema:
  z.ZodType<
    AtsGetJobCustomFieldDefinitionQueryParamFilter,
    z.ZodTypeDef,
    unknown
  > = z.object({
    updated_after: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "updated_after": "updatedAfter",
    });
  });

/** @internal */
export type AtsGetJobCustomFieldDefinitionQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const AtsGetJobCustomFieldDefinitionQueryParamFilter$outboundSchema:
  z.ZodType<
    AtsGetJobCustomFieldDefinitionQueryParamFilter$Outbound,
    z.ZodTypeDef,
    AtsGetJobCustomFieldDefinitionQueryParamFilter
  > = z.object({
    updatedAfter: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      updatedAfter: "updated_after",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetJobCustomFieldDefinitionQueryParamFilter$ {
  /** @deprecated use `AtsGetJobCustomFieldDefinitionQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetJobCustomFieldDefinitionQueryParamFilter$inboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetJobCustomFieldDefinitionQueryParamFilter$outboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionQueryParamFilter$Outbound` instead. */
  export type Outbound =
    AtsGetJobCustomFieldDefinitionQueryParamFilter$Outbound;
}

export function atsGetJobCustomFieldDefinitionQueryParamFilterToJSON(
  atsGetJobCustomFieldDefinitionQueryParamFilter:
    AtsGetJobCustomFieldDefinitionQueryParamFilter,
): string {
  return JSON.stringify(
    AtsGetJobCustomFieldDefinitionQueryParamFilter$outboundSchema.parse(
      atsGetJobCustomFieldDefinitionQueryParamFilter,
    ),
  );
}

export function atsGetJobCustomFieldDefinitionQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  AtsGetJobCustomFieldDefinitionQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetJobCustomFieldDefinitionQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AtsGetJobCustomFieldDefinitionQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const AtsGetJobCustomFieldDefinitionRequest$inboundSchema: z.ZodType<
  AtsGetJobCustomFieldDefinitionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsGetJobCustomFieldDefinitionQueryParamFilter$inboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  page_size: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  updated_after: z.nullable(z.string()).optional(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "page_size": "pageSize",
    "updated_after": "updatedAfter",
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type AtsGetJobCustomFieldDefinitionRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | AtsGetJobCustomFieldDefinitionQueryParamFilter$Outbound
    | null
    | undefined;
  id: string;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const AtsGetJobCustomFieldDefinitionRequest$outboundSchema: z.ZodType<
  AtsGetJobCustomFieldDefinitionRequest$Outbound,
  z.ZodTypeDef,
  AtsGetJobCustomFieldDefinitionRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => AtsGetJobCustomFieldDefinitionQueryParamFilter$outboundSchema),
  ).optional(),
  id: z.string(),
  next: z.nullable(z.string()).optional(),
  page: z.nullable(z.string()).optional(),
  pageSize: z.nullable(z.string()).optional(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  updatedAfter: z.nullable(z.string()).optional(),
  xAccountId: z.string(),
}).transform((v) => {
  return remap$(v, {
    pageSize: "page_size",
    updatedAfter: "updated_after",
    xAccountId: "x-account-id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetJobCustomFieldDefinitionRequest$ {
  /** @deprecated use `AtsGetJobCustomFieldDefinitionRequest$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetJobCustomFieldDefinitionRequest$inboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionRequest$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetJobCustomFieldDefinitionRequest$outboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionRequest$Outbound` instead. */
  export type Outbound = AtsGetJobCustomFieldDefinitionRequest$Outbound;
}

export function atsGetJobCustomFieldDefinitionRequestToJSON(
  atsGetJobCustomFieldDefinitionRequest: AtsGetJobCustomFieldDefinitionRequest,
): string {
  return JSON.stringify(
    AtsGetJobCustomFieldDefinitionRequest$outboundSchema.parse(
      atsGetJobCustomFieldDefinitionRequest,
    ),
  );
}

export function atsGetJobCustomFieldDefinitionRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetJobCustomFieldDefinitionRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetJobCustomFieldDefinitionRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetJobCustomFieldDefinitionRequest' from JSON`,
  );
}

/** @internal */
export const AtsGetJobCustomFieldDefinitionResponse$inboundSchema: z.ZodType<
  AtsGetJobCustomFieldDefinitionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  CustomFieldDefinitionResultApiModel: shared
    .CustomFieldDefinitionResultApiModel$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "CustomFieldDefinitionResultApiModel":
      "customFieldDefinitionResultApiModel",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type AtsGetJobCustomFieldDefinitionResponse$Outbound = {
  ContentType: string;
  CustomFieldDefinitionResultApiModel?:
    | shared.CustomFieldDefinitionResultApiModel$Outbound
    | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const AtsGetJobCustomFieldDefinitionResponse$outboundSchema: z.ZodType<
  AtsGetJobCustomFieldDefinitionResponse$Outbound,
  z.ZodTypeDef,
  AtsGetJobCustomFieldDefinitionResponse
> = z.object({
  contentType: z.string(),
  customFieldDefinitionResultApiModel: shared
    .CustomFieldDefinitionResultApiModel$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    customFieldDefinitionResultApiModel: "CustomFieldDefinitionResultApiModel",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsGetJobCustomFieldDefinitionResponse$ {
  /** @deprecated use `AtsGetJobCustomFieldDefinitionResponse$inboundSchema` instead. */
  export const inboundSchema =
    AtsGetJobCustomFieldDefinitionResponse$inboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionResponse$outboundSchema` instead. */
  export const outboundSchema =
    AtsGetJobCustomFieldDefinitionResponse$outboundSchema;
  /** @deprecated use `AtsGetJobCustomFieldDefinitionResponse$Outbound` instead. */
  export type Outbound = AtsGetJobCustomFieldDefinitionResponse$Outbound;
}

export function atsGetJobCustomFieldDefinitionResponseToJSON(
  atsGetJobCustomFieldDefinitionResponse:
    AtsGetJobCustomFieldDefinitionResponse,
): string {
  return JSON.stringify(
    AtsGetJobCustomFieldDefinitionResponse$outboundSchema.parse(
      atsGetJobCustomFieldDefinitionResponse,
    ),
  );
}

export function atsGetJobCustomFieldDefinitionResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsGetJobCustomFieldDefinitionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AtsGetJobCustomFieldDefinitionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsGetJobCustomFieldDefinitionResponse' from JSON`,
  );
}
