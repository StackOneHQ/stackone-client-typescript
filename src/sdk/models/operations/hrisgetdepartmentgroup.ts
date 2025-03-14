/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../../lib/primitives.js";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import * as shared from "../shared/index.js";

export type HrisGetDepartmentGroupRequest = {
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

export type HrisGetDepartmentGroupResponse = {
  /**
   * HTTP response content type for this operation
   */
  contentType: string;
  /**
   * The department group with the given identifier was retrieved.
   */
  hrisDepartmentsResult?: shared.HRISDepartmentsResult | undefined;
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
export const HrisGetDepartmentGroupRequest$inboundSchema: z.ZodType<
  HrisGetDepartmentGroupRequest,
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
export type HrisGetDepartmentGroupRequest$Outbound = {
  fields?: string | null | undefined;
  id: string;
  proxy?: { [k: string]: any } | null | undefined;
  raw?: boolean | null | undefined;
  "x-account-id": string;
};

/** @internal */
export const HrisGetDepartmentGroupRequest$outboundSchema: z.ZodType<
  HrisGetDepartmentGroupRequest$Outbound,
  z.ZodTypeDef,
  HrisGetDepartmentGroupRequest
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
export namespace HrisGetDepartmentGroupRequest$ {
  /** @deprecated use `HrisGetDepartmentGroupRequest$inboundSchema` instead. */
  export const inboundSchema = HrisGetDepartmentGroupRequest$inboundSchema;
  /** @deprecated use `HrisGetDepartmentGroupRequest$outboundSchema` instead. */
  export const outboundSchema = HrisGetDepartmentGroupRequest$outboundSchema;
  /** @deprecated use `HrisGetDepartmentGroupRequest$Outbound` instead. */
  export type Outbound = HrisGetDepartmentGroupRequest$Outbound;
}

export function hrisGetDepartmentGroupRequestToJSON(
  hrisGetDepartmentGroupRequest: HrisGetDepartmentGroupRequest,
): string {
  return JSON.stringify(
    HrisGetDepartmentGroupRequest$outboundSchema.parse(
      hrisGetDepartmentGroupRequest,
    ),
  );
}

export function hrisGetDepartmentGroupRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetDepartmentGroupRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetDepartmentGroupRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetDepartmentGroupRequest' from JSON`,
  );
}

/** @internal */
export const HrisGetDepartmentGroupResponse$inboundSchema: z.ZodType<
  HrisGetDepartmentGroupResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  ContentType: z.string(),
  HRISDepartmentsResult: shared.HRISDepartmentsResult$inboundSchema.optional(),
  Headers: z.record(z.array(z.string())),
  StatusCode: z.number().int(),
  RawResponse: z.instanceof(Response),
}).transform((v) => {
  return remap$(v, {
    "ContentType": "contentType",
    "HRISDepartmentsResult": "hrisDepartmentsResult",
    "Headers": "headers",
    "StatusCode": "statusCode",
    "RawResponse": "rawResponse",
  });
});

/** @internal */
export type HrisGetDepartmentGroupResponse$Outbound = {
  ContentType: string;
  HRISDepartmentsResult?: shared.HRISDepartmentsResult$Outbound | undefined;
  Headers: { [k: string]: Array<string> };
  StatusCode: number;
  RawResponse: never;
};

/** @internal */
export const HrisGetDepartmentGroupResponse$outboundSchema: z.ZodType<
  HrisGetDepartmentGroupResponse$Outbound,
  z.ZodTypeDef,
  HrisGetDepartmentGroupResponse
> = z.object({
  contentType: z.string(),
  hrisDepartmentsResult: shared.HRISDepartmentsResult$outboundSchema.optional(),
  headers: z.record(z.array(z.string())),
  statusCode: z.number().int(),
  rawResponse: z.instanceof(Response).transform(() => {
    throw new Error("Response cannot be serialized");
  }),
}).transform((v) => {
  return remap$(v, {
    contentType: "ContentType",
    hrisDepartmentsResult: "HRISDepartmentsResult",
    headers: "Headers",
    statusCode: "StatusCode",
    rawResponse: "RawResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisGetDepartmentGroupResponse$ {
  /** @deprecated use `HrisGetDepartmentGroupResponse$inboundSchema` instead. */
  export const inboundSchema = HrisGetDepartmentGroupResponse$inboundSchema;
  /** @deprecated use `HrisGetDepartmentGroupResponse$outboundSchema` instead. */
  export const outboundSchema = HrisGetDepartmentGroupResponse$outboundSchema;
  /** @deprecated use `HrisGetDepartmentGroupResponse$Outbound` instead. */
  export type Outbound = HrisGetDepartmentGroupResponse$Outbound;
}

export function hrisGetDepartmentGroupResponseToJSON(
  hrisGetDepartmentGroupResponse: HrisGetDepartmentGroupResponse,
): string {
  return JSON.stringify(
    HrisGetDepartmentGroupResponse$outboundSchema.parse(
      hrisGetDepartmentGroupResponse,
    ),
  );
}

export function hrisGetDepartmentGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisGetDepartmentGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisGetDepartmentGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisGetDepartmentGroupResponse' from JSON`,
  );
}
