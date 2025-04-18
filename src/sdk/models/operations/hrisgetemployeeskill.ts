/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetEmployeeSkillRequest = {
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
  subResourceId: string;
  /**
   * The account identifier
   */
  xAccountId: string;
};

export type HrisGetEmployeeSkillResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The skill related to the employee with the given identifiers was retrieved.
   */
  entitySkillResult?: shared.EntitySkillResult | undefined;
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
export const HrisGetEmployeeSkillRequest$inboundSchema: z.ZodType<
  HrisGetEmployeeSkillRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
  subResourceId: z.string(),
  "x-account-id": z.string(),
}).transform((v) => {
  return remap$(v, {
    "x-account-id": "xAccountId",
  });
});

/** @internal */
export type HrisGetEmployeeSkillRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  subResourceId: string;
  "x-account-id": string;
};

/** @internal */
export const HrisGetEmployeeSkillRequest$outboundSchema: z.ZodType<
  HrisGetEmployeeSkillRequest$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeSkillRequest
> = z.object({
  fields: z.nullable(z.string()).optional(),
  id: z.string(),
  proxy: z.nullable(z.record(z.any())).optional(),
  raw: z.nullable(z.boolean()).optional(),
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
export namespace HrisGetEmployeeSkillRequest$ {
  /** @deprecated use `HrisGetEmployeeSkillRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetEmployeeSkillRequest$inboundSchema;
  /** @deprecated use `HrisGetEmployeeSkillRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetEmployeeSkillRequest$outboundSchema;
  /** @deprecated use `HrisGetEmployeeSkillRequest$Outbound` instead. */
  export type Outbound = HrisGetEmployeeSkillRequest$Outbound;
}

export function hrisGetEmployeeSkillRequestToJSON(
  hrisGetEmployeeSkillRequest: HrisGetEmployeeSkillRequest,
): string {
  return JSON.stringify(
    HrisGetEmployeeSkillRequest$outboundSchema.parse(
      hrisGetEmployeeSkillRequest,
    ),
  );
}

export function hrisGetEmployeeSkillRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetEmployeeSkillRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetEmployeeSkillRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetEmployeeSkillRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetEmployeeSkillResponse$inboundSchema: z.ZodType<
  HrisGetEmployeeSkillResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  EntitySkillResult: shared.EntitySkillResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "EntitySkillResult": "entitySkillResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetEmployeeSkillResponse$Outbound = {
  ContentType: string;
  EntitySkillResult?: shared.EntitySkillResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetEmployeeSkillResponse$outboundSchema: z.ZodType<
  HrisGetEmployeeSkillResponse$Outbound,
  z.ZodTypeDef,
  HrisGetEmployeeSkillResponse
> = z.object({
  contentType: z.string(),
  entitySkillResult: shared.EntitySkillResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    entitySkillResult: "EntitySkillResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetEmployeeSkillResponse$ {
  /** @deprecated use `HrisGetEmployeeSkillResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetEmployeeSkillResponse$inboundSchema;
  /** @deprecated use `HrisGetEmployeeSkillResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetEmployeeSkillResponse$outboundSchema;
  /** @deprecated use `HrisGetEmployeeSkillResponse$Outbound` instead. */
  export type Outbound = HrisGetEmployeeSkillResponse$Outbound;
}

export function hrisGetEmployeeSkillResponseToJSON(
  hrisGetEmployeeSkillResponse: HrisGetEmployeeSkillResponse,
): string {
  return JSON.stringify(
    HrisGetEmployeeSkillResponse$outboundSchema.parse(
      hrisGetEmployeeSkillResponse,
    ),
  );
}

export function hrisGetEmployeeSkillResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetEmployeeSkillResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetEmployeeSkillResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetEmployeeSkillResponse' from JSON`,
  );
}
