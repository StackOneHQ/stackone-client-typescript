/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AssessmentPackage,
  AssessmentPackage$inboundSchema,
  AssessmentPackage$Outbound,
  AssessmentPackage$outboundSchema,
} from "./assessmentpackage.js";
import {
  RawResponse,
  RawResponse$inboundSchema,
  RawResponse$Outbound,
  RawResponse$outboundSchema,
} from "./rawresponse.js";

export type AssessmentPackageResult = {
  data: AssessmentPackage;
  raw?: Array<RawResponse> | null | undefined;
};

/** @internal */
export const AssessmentPackageResult$inboundSchema: z.ZodType<
  AssessmentPackageResult,
  z.ZodTypeDef,
  unknown
> = z.object({
  data: AssessmentPackage$inboundSchema,
  raw: z.nullable(z.array(RawResponse$inboundSchema)).optional(),
});

/** @internal */
export type AssessmentPackageResult$Outbound = {
  data: AssessmentPackage$Outbound;
  raw?: Array<RawResponse$Outbound> | null | undefined;
};

/** @internal */
export const AssessmentPackageResult$outboundSchema: z.ZodType<
  AssessmentPackageResult$Outbound,
  z.ZodTypeDef,
  AssessmentPackageResult
> = z.object({
  data: AssessmentPackage$outboundSchema,
  raw: z.nullable(z.array(RawResponse$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentPackageResult$ {
  /** @deprecated use `AssessmentPackageResult$inboundSchema` instead. */
  export const inboundSchema = AssessmentPackageResult$inboundSchema;
  /** @deprecated use `AssessmentPackageResult$outboundSchema` instead. */
  export const outboundSchema = AssessmentPackageResult$outboundSchema;
  /** @deprecated use `AssessmentPackageResult$Outbound` instead. */
  export type Outbound = AssessmentPackageResult$Outbound;
}

export function assessmentPackageResultToJSON(
  assessmentPackageResult: AssessmentPackageResult,
): string {
  return JSON.stringify(
    AssessmentPackageResult$outboundSchema.parse(assessmentPackageResult),
  );
}

export function assessmentPackageResultFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentPackageResult, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentPackageResult$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentPackageResult' from JSON`,
  );
}
