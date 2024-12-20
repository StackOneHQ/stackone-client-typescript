/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AssessmentsPackagesTestApiModel = {
  /**
   * Package description
   */
  description?: string | null | undefined;
  /**
   * Unique identifier
   */
  id?: string | null | undefined;
  /**
   * Package name
   */
  name?: string | null | undefined;
};

/** @internal */
export const AssessmentsPackagesTestApiModel$inboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type AssessmentsPackagesTestApiModel$Outbound = {
  description?: string | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const AssessmentsPackagesTestApiModel$outboundSchema: z.ZodType<
  AssessmentsPackagesTestApiModel$Outbound,
  z.ZodTypeDef,
  AssessmentsPackagesTestApiModel
> = z.object({
  description: z.nullable(z.string()).optional(),
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AssessmentsPackagesTestApiModel$ {
  /** @deprecated use `AssessmentsPackagesTestApiModel$inboundSchema` instead. */
  export const inboundSchema = AssessmentsPackagesTestApiModel$inboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel$outboundSchema` instead. */
  export const outboundSchema = AssessmentsPackagesTestApiModel$outboundSchema;
  /** @deprecated use `AssessmentsPackagesTestApiModel$Outbound` instead. */
  export type Outbound = AssessmentsPackagesTestApiModel$Outbound;
}

export function assessmentsPackagesTestApiModelToJSON(
  assessmentsPackagesTestApiModel: AssessmentsPackagesTestApiModel,
): string {
  return JSON.stringify(
    AssessmentsPackagesTestApiModel$outboundSchema.parse(
      assessmentsPackagesTestApiModel,
    ),
  );
}

export function assessmentsPackagesTestApiModelFromJSON(
  jsonString: string,
): SafeParseResult<AssessmentsPackagesTestApiModel, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AssessmentsPackagesTestApiModel$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AssessmentsPackagesTestApiModel' from JSON`,
  );
}
