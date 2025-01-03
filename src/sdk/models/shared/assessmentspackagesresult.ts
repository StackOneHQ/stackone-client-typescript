/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AssessmentsPackages,
  AssessmentsPackages$inboundSchema,
  AssessmentsPackages$Outbound,
  AssessmentsPackages$outboundSchema,
} from "./assessmentspackages.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type AssessmentsPackagesResult = {
  data: AssessmentsPackages;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const AssessmentsPackagesResult$inboundSchema: z.ZodType<
  AssessmentsPackagesResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: AssessmentsPackages$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type AssessmentsPackagesResult$Outbound = {
  data: AssessmentsPackages$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const AssessmentsPackagesResult$outboundSchema: z.ZodType<
  AssessmentsPackagesResult$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesResult
> = z.object({
  data: AssessmentsPackages$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesResult$ {
  /** @deprecated use `AssessmentsPackagesResult$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesResult$inboundSchema;
  /** @deprecated use `AssessmentsPackagesResult$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesResult$outboundSchema;
  /** @deprecated use `AssessmentsPackagesResult$Outbound` instead. */
  export type Outbound = AssessmentsPackagesResult$Outbound;
}

export function assessmentsPackagesResultToJSON(
  assessmentsPackagesResult: AssessmentsPackagesResult,
): string {
  return JSON.stringify(
    AssessmentsPackagesResult$outboundSchema.parse(assessmentsPackagesResult),
  );
}

export function assessmentsPackagesResultFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesResult' from JSON`,
  );
}
