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
export type MarketingListSmsTemplatesQueryParamFilter = {
  /**
   * Use a string with a date to only select results updated after that given date
   */
  updatedAfter?: string | null | undefined;
};

export type MarketingListSmsTemplatesRequest = {
  /**
   * The comma separated list of fields that will be returned in the response (if empty, all fields are returned)
   */
  fields?: string | null | undefined;
  /**
   * Filter parameters that allow greater customisation of the list response
   */
  filter?: MarketingListSmsTemplatesQueryParamFilter | null | undefined;
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

export type MarketingListSmsTemplatesResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  headers: { [k: string]: Array<string> };
  /**
   * The list of SMS templates was retrieved.
   */
  smsTemplatesPaginated?: shared.SmsTemplatesPaginated | undefined;
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
export const MarketingListSmsTemplatesQueryParamFilter$inboundSchema: z.ZodType<
  MarketingListSmsTemplatesQueryParamFilter,
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
export type MarketingListSmsTemplatesQueryParamFilter$Outbound = {
  updated_after?: string | null | undefined;
};

/** @internal */
export const MarketingListSmsTemplatesQueryParamFilter$outboundSchema:
  z.ZodType<
    MarketingListSmsTemplatesQueryParamFilter$Outbound,
    z.ZodTypeDef,
    MarketingListSmsTemplatesQueryParamFilter
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
export namespace MarketingListSmsTemplatesQueryParamFilter$ {
  /** @deprecated use `MarketingListSmsTemplatesQueryParamFilter$inboundSchema` instead. */
  export const inboundSchema =
    MarketingListSmsTemplatesQueryParamFilter$inboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesQueryParamFilter$outboundSchema` instead. */
  export const outboundSchema =
    MarketingListSmsTemplatesQueryParamFilter$outboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesQueryParamFilter$Outbound` instead. */
  export type Outbound = MarketingListSmsTemplatesQueryParamFilter$Outbound;
}

export function marketingListSmsTemplatesQueryParamFilterToJSON(
  marketingListSmsTemplatesQueryParamFilter:
    MarketingListSmsTemplatesQueryParamFilter,
): string {
  return JSON.stringify(
    MarketingListSmsTemplatesQueryParamFilter$outboundSchema.parse(
      marketingListSmsTemplatesQueryParamFilter,
    ),
  );
}

export function marketingListSmsTemplatesQueryParamFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  MarketingListSmsTemplatesQueryParamFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MarketingListSmsTemplatesQueryParamFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'MarketingListSmsTemplatesQueryParamFilter' from JSON`,
  );
}

/** @internal */
export const MarketingListSmsTemplatesRequest$inboundSchema: z.ZodType<
  MarketingListSmsTemplatesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => MarketingListSmsTemplatesQueryParamFilter$inboundSchema),
  ).optional(),
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
export type MarketingListSmsTemplatesRequest$Outbound = {
  fields?: string | null | undefined;
  filter?:
    | MarketingListSmsTemplatesQueryParamFilter$Outbound
    | null
    | undefined;
  next?: string | null | undefined;
  page?: string | null | undefined;
  page_size?: string | null | undefined;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  updated_after?: string | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const MarketingListSmsTemplatesRequest$outboundSchema: z.ZodType<
  MarketingListSmsTemplatesRequest$Outbound,
  z.ZodTypeDef,
  MarketingListSmsTemplatesRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  filter: z.nullable(
    z.lazy(() => MarketingListSmsTemplatesQueryParamFilter$outboundSchema),
  ).optional(),
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
export namespace MarketingListSmsTemplatesRequest$ {
  /** @deprecated use `MarketingListSmsTemplatesRequest$inboundSchema` instead. */
  export const inboundSchema = MarketingListSmsTemplatesRequest$inboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesRequest$outboundSchema` instead. */
  export const outboundSchema = MarketingListSmsTemplatesRequest$outboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesRequest$Outbound` instead. */
  export type Outbound = MarketingListSmsTemplatesRequest$Outbound;
}

export function marketingListSmsTemplatesRequestToJSON(
  marketingListSmsTemplatesRequest: MarketingListSmsTemplatesRequest,
): string {
  return JSON.stringify(
    MarketingListSmsTemplatesRequest$outboundSchema.parse(
      marketingListSmsTemplatesRequest,
    ),
  );
}

export function marketingListSmsTemplatesRequestFromJSON(
  jsonString: string,
): SafeParseResult<MarketingListSmsTemplatesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MarketingListSmsTemplatesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingListSmsTemplatesRequest' from JSON`,
  );
}

/** @internal */
export const MarketingListSmsTemplatesResponse$inboundSchema: z.ZodType<
  MarketingListSmsTemplatesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  Headers: z.record(z.array(z.string())),
  SmsTemplatesPaginated: shared.SmsTemplatesPaginated$inboundSchema.optional(),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "Headers": "headers",
    "SmsTemplatesPaginated": "smsTemplatesPaginated",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type MarketingListSmsTemplatesResponse$Outbound = {
  ContentType: string;
  Headers: { [k: string]: Array<string> };
  SmsTemplatesPaginated?: shared.SmsTemplatesPaginated$Outbound | undefined;
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const MarketingListSmsTemplatesResponse$outboundSchema: z.ZodType<
  MarketingListSmsTemplatesResponse$Outbound,
  z.ZodTypeDef,
  MarketingListSmsTemplatesResponse
> = z.object({
  contentType: z.string(),
  headers: z.record(z.array(z.string())),
  smsTemplatesPaginated: shared.SmsTemplatesPaginated$outboundSchema.optional(),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    headers: "Headers",
    smsTemplatesPaginated: "SmsTemplatesPaginated",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MarketingListSmsTemplatesResponse$ {
  /** @deprecated use `MarketingListSmsTemplatesResponse$inboundSchema` instead. */
  export const inboundSchema = MarketingListSmsTemplatesResponse$inboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesResponse$outboundSchema` instead. */
  export const outboundSchema =
    MarketingListSmsTemplatesResponse$outboundSchema;
  /** @deprecated use `MarketingListSmsTemplatesResponse$Outbound` instead. */
  export type Outbound = MarketingListSmsTemplatesResponse$Outbound;
}

export function marketingListSmsTemplatesResponseToJSON(
  marketingListSmsTemplatesResponse: MarketingListSmsTemplatesResponse,
): string {
  return JSON.stringify(
    MarketingListSmsTemplatesResponse$outboundSchema.parse(
      marketingListSmsTemplatesResponse,
    ),
  );
}

export function marketingListSmsTemplatesResponseFromJSON(
  jsonString: string,
): SafeParseResult<MarketingListSmsTemplatesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MarketingListSmsTemplatesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MarketingListSmsTemplatesResponse' from JSON`,
  );
}
