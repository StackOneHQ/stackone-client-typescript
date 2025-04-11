/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Drives,
  Drives$inboundSchema,
  Drives$Outbound,
  Drives$outboundSchema,
} from "./drives.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type DriveResult = {
  data: Drives;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const DriveResult$inboundSchema: z.ZodType<
  DriveResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: Drives$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type DriveResult$Outbound = {
  data: Drives$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const DriveResult$outboundSchema: z.ZodType<
  DriveResult$Outbound,
  z.ZodTypeDef,
  DriveResult
> = z.object({
  data: Drives$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DriveResult$ {
  /** @deprecated use `DriveResult$inboundSchema` instead. */
  export const inboundSchema = DriveResult$inboundSchema;
  /** @deprecated use `DriveResult$outboundSchema` instead. */
  export const outboundSchema = DriveResult$outboundSchema;
  /** @deprecated use `DriveResult$Outbound` instead. */
  export type Outbound = DriveResult$Outbound;
}

export function driveResultToJSON(driveResult: DriveResult): string {
  return JSON.stringify(DriveResult$outboundSchema.parse(driveResult));
}

export function driveResultFromJSON(
  jsonString: string,
): SafeParseResult<DriveResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DriveResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DriveResult' from JSON`,
  );
}
