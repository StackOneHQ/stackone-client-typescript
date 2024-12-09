/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateAssessmentsPackages = {
  /**
   * Package description
   */
  description?: string | null | undefined;
  /**
   * Package name
   */
  name?: string | null | undefined;
};

/** @internal */
export const CreateAssessmentsPackages$inboundSchema: z.ZodType<
  CreateAssessmentsPackages,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type CreateAssessmentsPackages$Outbound = {
  description?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CreateAssessmentsPackages$outboundSchema: z.ZodType<
  CreateAssessmentsPackages$Outbound,
  z.ZodTypeDef,
  CreateAssessmentsPackages
> = z.object({
  description: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateAssessmentsPackages$ {
  /** @deprecated use `CreateAssessmentsPackages$inboundSchema` instead. */
  export const inboundSchema = CreateAssessmentsPackages$inboundSchema;
  /** @deprecated use `CreateAssessmentsPackages$outboundSchema` instead. */
  export const outboundSchema = CreateAssessmentsPackages$outboundSchema;
  /** @deprecated use `CreateAssessmentsPackages$Outbound` instead. */
  export type Outbound = CreateAssessmentsPackages$Outbound;
}

export function createAssessmentsPackagesToJSON(
  createAssessmentsPackages: CreateAssessmentsPackages,
): string {
  return JSON.stringify(
    CreateAssessmentsPackages$outboundSchema.parse(createAssessmentsPackages),
  );
}

export function createAssessmentsPackagesFromJSON(
  jsonString: string,
): SafeParseResult<CreateAssessmentsPackages, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAssessmentsPackages$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAssessmentsPackages' from JSON`,
  );
}
